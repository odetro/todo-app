import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import './newTask.scss';
import { AiOutlinePlus } from 'react-icons/ai';

async function createNewTask (task) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "task": task ? task : "not valid task" })
    };
    const result = await fetch('/api/todos', requestOptions);
    return result.json();
}

export function NewTask() {

    const [newTask, setNewTask] = useState("new task...");
    const context = useContext(AppContext) || {};

    const handleChange = (e) => {
        setNewTask(e.target.value);
      };

    const handleSubmit = (e) => {
        if (e.charCode === 13) {
            e.preventDefault()
            createNewTask(newTask);
            if (context.setTaskSubmitted) { //not working with empty db
                context.setTaskSubmitted(newTask)};
            setNewTask("new task...");//doesn't change back the placeholder value
          }
      };

    return (
        <div className="newTask-container">
            <div className="newTask">
                <AiOutlinePlus />
                <input className="newTaskInput" placeholder="new task..." onChange={handleChange} onKeyPress={handleSubmit}></input>
            </div>
        </div>
    )
}