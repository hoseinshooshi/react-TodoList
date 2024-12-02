import React, { useState } from 'react'
import styles from './TaskItem.module.css'
import { CheckIcon } from '@heroicons/react/24/solid'
import { PencilIcon } from '@heroicons/react/16/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked] = useState(task.checked)
    function handleCheckBoxChange(event) {
        setIsChecked(!isChecked)
        toggleTask(task.id)
    }

  return (
    <li className={styles.task}>
        <div className={styles["task-group"]}>
            <input type="checkbox"
            checked={isChecked}
            onChange={handleCheckBoxChange}
            className={styles.checkbox}
            name={task.name}
            id={task.id} />
            <label htmlFor={task.id}
            className={styles.label}>
                {task.name}
                <p className={styles.checkmark}>
                    <CheckIcon 
                    strokeWidth={2}
                    width={24}
                    height={24}/>
                </p>
            </label>
        </div>
        <div className={styles["task-group"]}>
            <button className="btn"
            aria-label={`update ${task.name} task`}
            onClick={() => enterEditMode(task)}
            >
                <PencilIcon width={24} height={24} />
            </button>
            <button
            className={`btn ${styles.delete}`}
            aria-label={`delete ${task.name} task`}
            onClick={() => deleteTask(task.id)}
            >
                <TrashIcon width={24} height={24} />
            </button>
        </div>
    </li>
  )
}

export default TaskItem