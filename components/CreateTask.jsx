import { useState, useContext } from "react";
import { Context} from "../context/TasksContext";
import { v4 as uuid } from 'uuid';
import toast from "react-hot-toast";
import '../styles/create-task.css'

function CreateTask() {
  const [newTask, setNewTask] = useState("")
  const { tasks, setTasks } = useContext(Context); 


  console.log(tasks)
  // Need to be change
  const handleSubmit = (e) => {
    e.preventDefault()

    if (newTask.length < 3) {
      return toast
        .error("A tasks must have more than 3 characters", {
          duration: 1000,
        }) 
    }

    const objTask = {
      id: uuid(),
      name: newTask,
      status: "todo"
    }
    
    const updateTasks = [...tasks, objTask]
    localStorage.setItem("tasks", JSON.stringify(updateTasks))
    setTasks([...tasks, objTask])

    setNewTask('')

    toast.success("A new task has been added",{
      duration: 2000,
      icon: "👍"
    })
  }
  
  return (
    <form className="create-task" onSubmit={handleSubmit}>
      <input 
        type="text"
        value={newTask}
        placeholder="Add a new task"
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button>Add</button>
    </form>
  );
}

export default CreateTask;