import { useState } from "react";
import Board from "./components/Board";
import Input from "./components/Input";
function App() {
const [taskList, setTaskList] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <h1>To Do List</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4 sm:px-8 md:px-10 lg:px-12 gap-3">
        {taskList.map((task, i) => 
            <Board 
            key={i}
            index={i}
            task={task}
            taskList={taskList} 
            setTaskList={setTaskList}
            />)}
      </div>
    </div>
  )
}

export default App
