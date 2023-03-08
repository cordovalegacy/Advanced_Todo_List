import './App.css';
import Form from './components/form';
import Display from './components/display';
import {useState} from 'react';

function App() {

  const[taskList, setTaskList] = useState([
    {task: "Write down some goals for the day", completed: false}
  ])

  return (
    <div className="App">
      <Form taskList={taskList} setTaskList={setTaskList} />
      <Display taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
