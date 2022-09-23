import { useRef, useState } from "react";
import { RiAddLine, RiErrorWarningLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/task";

const TodoList = () => {
  const taskRef = useRef(null);
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const { taskList, showError } = useSelector(({ Task }) => Task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim() || !task.trim()) return;

    const addTaskAction = addTask({ id: new Date().getTime(), title: task });
    dispatch(addTaskAction);

    setTask("");

    taskRef.current.focus();
  };

  return (
    <div className="col-12 col-lg-6 offset-lg-3 col-md-8 offset-md-2 pt-3">
      <h1 className="text-center mb-5">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-10">
            <input
              ref={taskRef}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="form-control"
              placeholder="Input your task"
              required
            />
          </div>
          <div className="col-12 mt-3 mt-sm-0  col-sm-2 text-center">
            <button
              type="submit"
              className="btn btn-primary d-flex align-items-center"
            >
              Add <RiAddLine className="ms-1" />
            </button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-12 col-sm-10">
          {taskList && taskList.length > 0 && (
            <ul className="list-group mt-3">
              {taskList.map((item, idx) => {
                return (
                  <li className="list-group-item" key={item.id}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      {showError && (
        <p
          className="alert alert-danger mt-3 d-flex align-items-center"
          role="alert"
        >
          <RiErrorWarningLine className="me-1" /> Error when removing item from
          todo list
        </p>
      )}
    </div>
  );
};

export default TodoList;
