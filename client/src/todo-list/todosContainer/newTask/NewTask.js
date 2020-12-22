import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import { trackPromise } from 'react-promise-tracker';

const NewTaskContainer = styled.div`  
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 20px;
`
const NewTaskItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 25px;
    padding-left: 30px;
    max-width: 80%;
`
const NewTaskInput = styled.input`
    width: 100%;
    border: none;
    font-size: 16px;
    margin-left: 17px;
    &:focus {
        outline: none;
    }
`

async function createNewTask (task, category) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "task": task ? task : "Error: Not Valid Task",
            "category": category
        })
    };
    const result = await fetch('/api/todos', requestOptions);
    return result.json();
}

export function NewTask(props) {

    const [newTask, setNewTask] = useState("new task...");
    const context = useContext(AppContext) || {};

    const handleChange = (e) => {        
        setNewTask(e.target.value);
      };

    const handleSubmit = (e) => {
        if (e.charCode === 13 && e.target.value.length > 0) {
            e.preventDefault();
            trackPromise(createNewTask(newTask, props.category));
            if (context.setTaskSubmitted) { 
                context.setTaskSubmitted(newTask)
            };
            setNewTask("");
            e.target.value = "";
          }
      };

    return (
        <NewTaskContainer>
            <NewTaskItem>
                <AiOutlinePlus />
                <NewTaskInput placeholder="new task..." onChange={handleChange} onKeyPress={handleSubmit} />
            </NewTaskItem>
        </NewTaskContainer>
    )
}