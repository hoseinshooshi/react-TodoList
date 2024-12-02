import { PlusIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';


const EditForm = ({editedTask, updateTask, clsoeEditMode}) => {
  const [updatedTaskName, setUpdatedTaskName] = useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTaskName})
  }
  useEffect(() => {
    function closeModalIfEscaped(event) {
      event.key === 'Escape' && clsoeEditMode()
    }
    window.addEventListener('keydown', closeModalIfEscaped)
    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  } , [clsoeEditMode])
  return (
    <div
    role='dialog'
    aria-labelledby='editTask'
    >
      <form
      className='todo'
      onSubmit={handleFormSubmit}
      onClick={(e) => {e.target === e.currentTarget && clsoeEditMode()}}
      >
          <div className='wrapper'>
              <input
              type="text"
              id='editTask'
              className='input'
              value={updatedTaskName}
              onInput={(event) => setUpdatedTaskName(event.target.value)}
              required
              autoFocus
              maxLength={60}
              placeholder='update your task'/>
              <label htmlFor="editTask" className='label'>update your task</label>
          </div>
          <button className="btn"
           aria-label={`confirm to ${updatedTaskName}`}
           type='submit'
           >
              <CheckIcon strokeWidth={2} height={24} width={24} />
          </button>
      </form>
      <p>press 'esc' if you dont want to update</p>
    </div>
  )
}

export default EditForm