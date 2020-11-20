import './task.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { AiOutlineDelete, AiFillDelete, AiOutlineEdit, AiTwotoneEdit} from 'react-icons/ai';

async function taskStatus (id, completed) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"completed": completed})
    };
    const result = await fetch(`/api/todos/${id}`, requestOptions);
    return result.json();
}

async function deleteTask (id) {
    const result = await fetch(`/api/todos/delete/${id}`, {method: 'DELETE'});
    return result.json();
}

async function editTask (id, task) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"task": task})
    };
    const result = await fetch(`/api/todos/${id}`, requestOptions);
    return result.json();
}

export function Task(props) {
    const context = useContext(AppContext);

    const CheckboxChange = (e) => {
        const complete = !props.completed;
        taskStatus(props.id, complete);
        context.setTaskChanged(!context.taskChanged);
        console.log("changed value");
      };

    return (<div className="task">
            <label className="container">
                <input type="checkbox" checked={props.completed ? "checked" : ""} onChange={CheckboxChange}/>
                <span className="checkmark"></span>
                {props.task}
            </label>
            <div className="taskAction">
                <div className="editOne">
                    <button className="edit" onClick={e => editTask(props.id, prompt(props.task)).then(context.setTaskChanged(!context.taskChanged))}>
                        <AiOutlineEdit className="icon"/>
                        <AiTwotoneEdit className="iconHover"/>
                    </button>
                </div>
                <div className="deleteOne">
                    <button className="delete" onClick={e => deleteTask(props.id).then(context.setTaskChanged(!context.taskChanged))}>
                        <AiOutlineDelete className="icon"/>
                        <AiFillDelete className="iconHover"/>
                    </button>
                </div>
            </div>
        </div>)
}