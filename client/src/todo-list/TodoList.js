import React, { useState, useEffect } from 'react';
import './todo-list.scss';
import { Task } from './task/Task';
import { NewTask } from './newTask/NewTask';
import { AppContext } from '../AppContext';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

async function fetchTodos() {
    const result = await fetch('/todos');
    return result.json();
}

async function deleteCompletedTask(){
    const result = await fetch(`/todos/delete/all`, {method: 'DELETE'});
    return result.json();
}

export function TodoList() {

    const [todos, setTodos] = useState([]);
    const [todosLeft, setTodosLeft] = useState(0);
    const [todosActive, setTodosActive] = useState([]);
    const [todosCompleted, setTodosCompleted] = useState([]);

    const [taskSubmitted, setTaskSubmitted] = useState("");
    const [taskChanged, setTaskChanged] = useState(false);

    const appContextValues = {
        taskSubmitted,
        setTaskSubmitted,
        taskChanged,
        setTaskChanged,
    }

    useEffect(() => {
        console.log("updating app...")
        const get = async () => {
            const result = await fetchTodos();
            setTodos(result);
            setTodosLeft(result.filter( r => !r.completed).length);
            setTodosActive(result.filter( r => !r.completed));
            setTodosCompleted(result.filter( r => r.completed));
            }
        get();
    },[taskSubmitted, taskChanged]);

    if (todos.length <= 0) {
        return (
        <div className="todo-container">
            <h2>My To Do List</h2>
            <div className="todo-details">
                <div className="nolist-container">
                    <div className="todo-list">
                        <p>Enter new task to start</p> 
                        <NewTask></NewTask>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return ( 
        <AppContext.Provider value={appContextValues}>
            <BrowserRouter>
            <div className="todo-container">
                <h2>My To Do List</h2>
                <div className="todo-details">
                    <div className="open-tasks">
                        <span> {todosLeft} tasks left </span>
                    </div>
                    <div className="filter">
                        <Link to="/" className="filterBtn">All</Link>
                        <Link to="/active" className="filterBtn">Active</Link>
                        <Link to="/completed" className="filterBtn">Completed</Link>
                    </div>
                    <div className="clearAll">
                        <button className="clear" onClick={e => {deleteCompletedTask().then(setTaskChanged(!taskChanged))}}>Clear Completed</button>
                    </div>
                </div>
                <div className="todo-list">
                <Switch>
                    <Route exact path="/active">
                        { 
                            todosActive.map(todo => <Task 
                                key = { todo._id }
                                id = { todo._id }
                                task={ todo.task } 
                                completed={ todo.completed }></Task>)
                        }
                    </Route>
                    <Route exact path="/completed">
                        { 
                            todosCompleted.map(todo => <Task 
                                key = { todo._id }
                                id = { todo._id }
                                task={ todo.task } 
                                completed={ todo.completed }></Task>)
                        }
                    </Route>
                    <Route exact path="/">
                        { 
                            todos.map(todo => <Task 
                                key = { todo._id }
                                id = { todo._id }
                                task={ todo.task } 
                                completed={ todo.completed }></Task>)
                        }
                    </Route>
                </Switch>
                </div>
                <NewTask></NewTask>
            </div>
            </BrowserRouter>
        </AppContext.Provider>
    )
}