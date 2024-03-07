/* eslint-disable no-unused-vars */
import { TiDelete } from "react-icons/ti";
import PropTypes from 'prop-types'
import { Context } from '../context/TasksContext'
import { useContext } from 'react'
import toast from "react-hot-toast";
import { useDrag } from 'react-dnd'


import '../styles/card.css'

Card.propTypes = {
  status: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired
}
function Card({status, task}) {
  const { tasks, setTasks } = useContext(Context)

  const [{isDragging}, drag] = useDrag(() => ({
    type: "task",
    item: {id: task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const handleDelete = (id) => {
    const updateTasksList = tasks.filter(task => task.id !== id)
    setTasks(updateTasksList)
    localStorage.setItem("tasks", JSON.stringify(updateTasksList))

    toast.success("Task deleted", {
      duration: 2000,
      icon:"💀"
    })
  }

  return (
    <div ref={drag} className="card">
      <div className={`status ${status}`}></div>
      <div className="card__content">
        <span>{task.name}</span>
        <button onClick={() => handleDelete(task.id)}><TiDelete color="red"/></button>
      </div>
    </div>
  );
}

export default Card;