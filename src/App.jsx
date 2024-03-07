import CreateTask from './components/CreateTask'
import BoardList from './components/BoardList'
import TaskProvider from './context/TasksContext'
import { Toaster } from 'react-hot-toast';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from 'react-dnd-touch-backend';
import './styles/app.css'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const Backend = isMobile ? TouchBackend : HTML5Backend;
function App(){
  return (
    <TaskProvider>
      <DndProvider backend={Backend}>
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


