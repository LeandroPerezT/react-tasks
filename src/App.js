import { useState, useEffect } from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'

function App() {
  const url = 'http://localhost:3000/tasks'
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      }
    
    getTasks()
  }, [])

// Fetch Tasks
const fetchTasks = async () =>{
  const res = await fetch(url)
  const data = await res.json()
  return data
  }


// Add Task
const addTask = async (task)=>{
  const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
}

// Delete Task

const deleteTask = async (id) =>{

  await fetch(`${url}/${id}`,{
      method: 'DELETE'
    })

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
