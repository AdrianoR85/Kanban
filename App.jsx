import CreateTask from './components/CreateTask'
import BoardList from './components/BoardList'
import TaskProvider from './context/TasksContext'
import { Toaster } from 'react-hot-toast';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import './styles/app.css'
function App(){
  return (
    <TaskProvider>
      <DndProvider backend={HTML5Backend}>
        <div className='app'>      
            <Toaster />
              <header>
                <h1>Kanban Board</h1>
                <CreateTask />
              </header>
              <main>
                <BoardList />
              </main>
              <footer>
                <small>&copy;2024 - Adriano Rosa</small>
              </footer>
        </div>
      </DndProvider>
    </TaskProvider>
  )
}

export default App


