import React, { useState, useEffect, useContext } from 'react';
import { Todos } from './Todos';
import { NewTask } from './newTask/NewTask';
import { AppContext } from '../AppContext';
import { trackPromise } from 'react-promise-tracker';
import { BrowserRouter, Switch, Route, NavLink, useRouteMatch, useParams, Redirect } from 'react-router-dom';
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
async function fetchTodos(category) {
    const result = await fetch(`/api/todos/${category}`);
    return result.json();
}

async function deleteCompletedTask(category){
    const result = await fetch(`/api/todos/delete/all/${category}`, {method: 'DELETE'});
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

export function TodosContainer() {

    const context = useContext(AppContext);

    const dayjs = require('dayjs');
    let now = dayjs();
  
    const paramsURL = useParams();
    const { path, url } = useRouteMatch();
    const [category, setCategory ] = useState(paramsURL.category)

    const [todos, setTodos] = useState([]);
    const [todosLeftLength, setTodosLeftLength] = useState(0);

    useEffect(() => {
        if (paramsURL && paramsURL.category) {
            setCategory(paramsURL.category);
        }
    } , [paramsURL])

    useEffect(() => {
        console.log("updating app...")
        const get = async () => {
            const result = await trackPromise(fetchTodos(category));
            setTodos(result);
            setTodosLeftLength(result.filter( r => !r.completed).length);
            }
        get();
    },[context.taskSubmitted, context.taskChanged, category]);

    function getClearBtn() {
        if (todos.length > 0 && todos.length > todosLeftLength) {
            return (
                <Clear>
                    <ClearComplete onClick={ async (e) => { 
                        await trackPromise(deleteCompletedTask(category));
                        context.setTaskChanged(!context.taskChanged)
                        }}>Clear Completed</ClearComplete>
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

    return ( 
        <BrowserRouter>
            <Container>
                <Header>
                    <H2>{now.format("dddd")}, <Day>{now.format("D")}{dayFormat(now.format("D"))}</Day> </H2>
                    <Month> {now.format("MMMM")} </Month>
                    <DetailsContainer hidden={todos.length === 0}>
                        <Details>
                            <OpenTasks>
                                <span> {todosLeftLength} tasks left </span>
                            </OpenTasks>
                            <Filter>
                                <StyledNavLink to={`${url}/all`} >All</StyledNavLink>
                                <StyledNavLink to={`${url}/active`} >Active</StyledNavLink>
                                <StyledNavLink to={`${url}/completed`} >Completed</StyledNavLink>
                            </Filter>
                        </Details>
                    </DetailsContainer>
                </Header>
                <NewTask category={category} />
                <TodosList>
                    {getNoTaskCreated()}
                    <Switch>
                        <Route exact path={`${path}/:status`}>
                            <Todos todos={todos} />
                        </Route>
                        <Route path={`${path}/`}>
                            <Redirect to={`${url}/all`} />
                        </Route>
                    </Switch>
                </TodosList>
                {getClearBtn()}
            </Container>
        </BrowserRouter>
    )
}