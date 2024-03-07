/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import Card from './Card'
import '../styles/board.css'
import { Context } from '../context/TasksContext'
import { useContext } from 'react'
import { useDrop} from 'react-dnd'

Board.propTypes = {
  status: PropTypes.string.isRequired
}

function Board({status}) {
  const { todo, inProgress, done, setTasks } = useContext(Context)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const addItemSection = (id) => {
    setTasks( prev => {
      const updateTaskStatus = prev.map(task => {
        if (task.id === id) {
          task.status = status
        }
        return task
      })

      localStorage.setItem("tasks", JSON.stringify(updateTaskStatus))
      return updateTaskStatus
    })
  }

  let text = "To do"
  let cls = "todo"
  let tasksToMap = todo
  
  if (status === "inprogress") {
    text = "In Progress"
    cls = "inprogress"
    tasksToMap = inProgress
  } else if (status === "done") {
    text = "Done"
    cls = "done"
    tasksToMap = done
  }
  
  return (
    <section ref={drop} className='board'>
      <h2 className={cls} >{text}</h2>
      {tasksToMap.map(task => (
        <Card key={task.id} task={task} status={status}/>
      ))}
    </section>
);
}

export default Board;