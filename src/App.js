import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodoList from "./component/todoList";
import TriangleTree from "./component/triangleTree";

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
        <Tab eventKey="triangleTree" title="Triangle Tree">
          <TriangleTree />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
