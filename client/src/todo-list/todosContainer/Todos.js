import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Task } from './task/Task';

export function Todos(params) {

    const paramsURL = useParams();
    const [status, setStatus] = useState("all");

    useEffect(() => {
        if (paramsURL && paramsURL.status) {
            setStatus(paramsURL.status);
        }
    } , [paramsURL])


    function getTasks(todos, status) {
        switch (status) {
            case 'active':
                return todos.filter( t => !t.completed);
            case 'completed':
                return todos.filter( t => t.completed);
            default:
                return todos;
        }
    }
        
    let myTodos = getTasks(params.todos, status);

    return (
            myTodos.map(todo => 
            <Task 
                key = { todo._id }
                id = { todo._id }
                task={ todo.task } 
                completed={ todo.completed } 
            />
            )
        )
}