import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodoList from "./component/todoList";

const App = () => {
  return (
    <div className="container mx-auto row py-5">
      <Tabs
        defaultActiveKey="todoList"
        id="uncontrolled-tab-example"
        className="mb-3 d-flex justify-content-center"
      >
        <Tab eventKey="todoList" title="Todo List">
          <TodoList />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
