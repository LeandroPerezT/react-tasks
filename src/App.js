import { useState } from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Tomar un tecito",
      day: "El próximo lunes",
      reminder: true
    },
    {
      id: 2,
      text: "Parcial de Discreta",
      day: "Este domingo",
      reminder: true
    },
    {
      id: 3,
      text: "Estudiar para S y O",
      day: "Nunca",
      reminder: false 

    }
  ]
)
// Add Task
const addTask = (task)=>{
  const id = tasks.length + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
  }

// Delete Task

const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask} /> 
      {showAddTask && <AddTask onAdd={addTask}/>}
      {
      tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'No hay tareas pendientes'
      }
    </div>
  );
}

export default App;
