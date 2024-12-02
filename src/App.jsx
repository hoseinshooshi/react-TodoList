import React from 'react'
import { useState } from 'react'
//custom Compenets & hooks
import useLocalStorage from './hooks/useLocalStorage'
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'
function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks',[])
  const [editedTask, setEditedTask] = useState(null);
  const [isEditting, setIsEditting] = useState(false)
  function addTask(task) {
    setTasks(prevState => [...prevState, task])
  }
  function deleteTask(id) {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }
  function toggleTask(id) {
    setTasks(prevState => prevState.map(task => task.id === id ? {...task, checked:!task.checked } : task))
  }
  function updateTask(task) {
    setTasks(prevState => prevState.map(t => t.id === task.id ? {...t, name: task.name} : t))
    clsoeEditMode();
  }
  function clsoeEditMode() {
    setIsEditting(false)
  }
  
  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditting(true)
  }
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      { isEditting && 
        <EditForm 
      editedTask={editedTask}
      updateTask={updateTask}
      clsoeEditMode={clsoeEditMode}/>
    }
      <CustomForm addTask={addTask} />
      <TaskList tasks={tasks}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      enterEditMode={enterEditMode} /> 
    </div>
  )
}

export default App
