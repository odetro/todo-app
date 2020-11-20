import React, { useState, useEffect } from 'react';
import './todo-list.scss';
import { Task } from './task/Task';
import { NewTask } from './newTask/NewTask';
import { AppContext } from '../AppContext';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { AiOutlineDelete, AiFillDelete } from 'react-icons/ai';

async function fetchTodos() {
    const result = await fetch('/api/todos');
    return result.json();
}

async function deleteCompletedTask(){
    const result = await fetch(`/api/todos/delete/all`, {method: 'DELETE'});
    return result.json();
}

function returnDay (day) {
    switch(day){
        case 0: 
            return ("Sunday"); 
        case 1: 
            return ("Monday");
        case 2: 
            return ("Tuesday"); 
        case 3: 
            return ("Wednesday"); 
        case 4: 
            return ("Thursday"); ;
        case 5: 
            return ("Friday");
        case 6: 
            return ("Saturday");
        default:
            return ("Welcome")
    }
}

function returnMonth (month) {
    switch(month){
        case 0: 
            return ("January"); 
        case 1: 
            return ("February");
        case 2: 
            return ("March"); 
        case 3: 
            return ("April"); 
        case 4: 
            return ("May"); ;
        case 5: 
            return ("June");
        case 6: 
            return ("July");
        case 7: 
            return ("August");
        case 8: 
            return ("September");
        case 9: 
            return ("October");
        case 10: 
            return ("November");
        case 11: 
            return ("December");
        default:
            return ("Not valid month")
    }
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
    
    let myDate = new Date(); 
    let dayName = returnDay(myDate.getDay());
    let dayNum = myDate.getDate();
    let month = returnMonth(myDate.getMonth());

    function getClearBtn() {
        if (todosCompleted.length) {
            return (
                <div className="clear">
                    <button className="clearComplete" onClick={e => {deleteCompletedTask().then(setTaskChanged(!taskChanged))}}>Clear Completed</button>
                    <AiOutlineDelete className="icon" />
                    <AiFillDelete className="iconHover" />
                </div>
            )
        }
    }

    function getNoTaskCreated() {
        if (!todos.length) {
            return (
                <p className="center">No tasks created yet</p>
            )
        }
    }

    return ( 
        <AppContext.Provider value={appContextValues}>
            <BrowserRouter>
            <div className="todo-container">
                <div className="header">
                    <h2>{dayName}, <span className="day">{dayNum}th</span> </h2>
                    <span className="month"> {month} </span>
                    <div className="todo-details-container" hidden={todos.length === 0}>
                        <div className="todo-details">
                            <div className="open-tasks">
                                <span> {todosLeft} tasks left </span>
                            </div>
                            <div className="filter">
                                <Link to="/" className="filterBtn">All</Link>
                                <Link to="/active" className="filterBtn">Active</Link>
                                <Link to="/completed" className="filterBtn">Completed</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <NewTask></NewTask>
                <div className="todo-list">
                    {getNoTaskCreated()}
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
            </div>
            {getClearBtn()}
            </BrowserRouter>
        </AppContext.Provider>
    )
}