import React, { useState, useEffect } from 'react';
import { Task } from './task/Task';
import { NewTask } from './newTask/NewTask';
import { AppContext } from '../AppContext';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { AiOutlineDelete, AiFillDelete } from 'react-icons/ai';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    background-color: white;
    align-items: center;
    border-radius: 10px;
    position: absolute;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #e9e9e9;
`
const H2 = styled.h2`
    color: #7160b7;
    align-self: end;
    margin: 30px 0 4px 45px;
`
const Day = styled.span`
    font-weight: 500;
`
const Month = styled.span`
    display: flex;
    align-self: end;
    margin-left: 45px;
    color: #b3aad8;
    font-size: 16px;
`
const DetailsContainer = styled.div`
    display: flex;
    width: 100%;
`
const Details = styled.div`
    margin: 45px 45px 18px 45px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    color: #C5C7E4;
`
const OpenTasks = styled.div`
    color: #8F94A2;
    font-size: 14px;
`
const Filter = styled.div`
    display: flex;
    font-size: 12px;
`
const StyledNavLink = styled(NavLink)`
    border: none;
    background-color: #E0F3FF;
    color: #8F94A2;
    margin-left: 10px;
    padding: 6px 14px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;

    :hover {
        background-color: #d0edff;
        color: #8F94A2;
    }
    :focus {
        outline: none;
        color: #5a678a;
        background-color: #cdecff;
    }

    &.active {
        color: #5a678a;
        background-color: #cdecff;
    }
`
const TodosList = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 0 30px 30px 30px;
    align-self: center;
    margin-bottom: 30px;
`
const Center = styled.p`
    text-align: center;
`
const Clear = styled.div`
    display: flex;
    align-items: center;
    color: #F8979A;
    right: 25px;
    padding-bottom: 20px;
    cursor: pointer;
    justify-content: flex-end;
    position: absolute;
    bottom: 10px;

    :hover {
        AiFillDelete {
            display: inline;
        }
    }
`
const ClearComplete = styled.button`
    border: none;
    background-color: transparent;
    color: #F8979A;
    margin-left: 7px;
    border-radius: 10px;
    cursor: pointer;

    :focus {
        outline: none;
    }
`
const DefaultBtn = styled.div`
    display: inline;
    ${Clear}:hover & {
        display: none;
    }
`
const HoverBtn = styled.div`
    display: none;
    ${Clear}:hover & {
        display: inline;
    }
`

async function fetchTodos() {
    const result = await fetch('/api/todos');
    return result.json();
}

async function deleteCompletedTask(){
    const result = await fetch(`/api/todos/delete/all`, {method: 'DELETE'});
    return result.json();
}

function dayFormat(day) {
    switch (parseInt(day)) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

export function TodoList() {

    const dayjs = require('dayjs');
    let now = dayjs();

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

    function getClearBtn() {
        if (todosCompleted.length) {
            return (
                <Clear>
                    <ClearComplete onClick={e => {deleteCompletedTask().then(setTaskChanged(!taskChanged))}}>Clear Completed</ClearComplete>
                    <DefaultBtn><AiOutlineDelete /></DefaultBtn>
                    <HoverBtn><AiFillDelete /></HoverBtn>
                </Clear>
            )
        }
    }

    function getNoTaskCreated() {
        if (!todos.length) {
            return (
                <Center>No tasks created yet</Center>
            )
        }
    }

    function getTasks(myTodos) {
        return (
            myTodos.map(todo => <Task 
            key = { todo._id }
            id = { todo._id }
            task={ todo.task } 
            completed={ todo.completed }></Task>
            )
        )
    }

    return ( 
        <AppContext.Provider value={appContextValues}>
            <BrowserRouter>
            <Container>
                <Header>
                    <H2>{now.format("dddd")}, <Day>{now.format("D")}{dayFormat(now.format("D"))}</Day> </H2>
                    <Month> {now.format("MMMM")} </Month>
                    <DetailsContainer hidden={todos.length === 0}>
                        <Details>
                            <OpenTasks>
                                <span> {todosLeft} tasks left </span>
                            </OpenTasks>
                            <Filter>
                                <StyledNavLink to="/" exact >All</StyledNavLink>
                                <StyledNavLink to="/active" exact >Active</StyledNavLink>
                                <StyledNavLink to="/completed" exact >Completed</StyledNavLink>
                            </Filter>
                        </Details>
                    </DetailsContainer>
                </Header>
                <NewTask />
                <TodosList>
                {getNoTaskCreated()}
                <Switch>
                    <Route exact path="/active">
                        { getTasks(todosActive) }
                    </Route>
                    <Route exact path="/completed">
                        { getTasks(todosCompleted) }
                    </Route>
                    <Route exact path="/">
                        { getTasks(todos) }
                    </Route>
                </Switch>
                </TodosList>
                {getClearBtn()}
            </Container>
            </BrowserRouter>
        </AppContext.Provider>
    )
}