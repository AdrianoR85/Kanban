/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createContext } from "react";

export const Context = createContext({})

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [todo, setTodo] = useState([])
  const [inProgress, setInProgress] = useState([])
  const [done, setDone] = useState([])

  useEffect(() => {
    const fTodo = tasks.filter((task) => task.status === 'todo')
    const fInProgress = tasks.filter((task) => task.status === 'inprogress')
    const fDone = tasks.filter((task) => task.status === 'done')

    setTodo(fTodo)   
    setInProgress(fInProgress)    
    setDone(fDone) 

  }, [tasks]) 

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')) || [])
  }, [])

  return ( 
    <Context.Provider value={{ 
      tasks, setTasks, 
      todo, setTodo, 
      inProgress, setInProgress,
      done, setDone 
    }}>
      { children }
    </Context.Provider>
   );
}

export default TaskProvider;