import React, { useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import { TodosContainer } from './todosContainer/TodosContainer';
import { BrowserRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineBook, AiOutlineHome, AiOutlineStar, AiOutlineShoppingCart, AiOutlinePhone, AiOutlineMessage, AiOutlineCalendar, AiOutlineBulb} from 'react-icons/ai';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    align-items: center;
`
const Filter = styled.div`
    width: 15%;
    height: 100%;
    position: absolute;
    top: 20px;
    right: 90%;
    display: flex;
    flex-direction: column;
`
const CategoryDiv = styled.div`
    display: flex;
    align-items: start;
    flex-direction: row-reverse;
`
const StyledNavLink = styled(NavLink)`
    height: 22px;
    background-color: #8e82c1;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border: none;
    margin-bottom: 10px;
    padding: 10px;
    color: white;
    border-radius: 7px 0 0 20px;
    text-decoration: none;

    :focus {
        outline: none;
        background-color: #7160B7;
    }

    :hover {
        background-color: #7160B7;
        cursor: pointer;
        left: 2%;
    }

    &.active {
        background-color: white;
        color: #7160B7;
    }
`
const Icon = styled.div`
    padding-right: 4px;
    padding-left: 4px;
`
const ActiveTodosDot = styled.div`
    width: 8px;
    height: 8px;
    background-color: #FF5722;
    border-radius: 50%;
    border: 1.5px solid white;
    position: relative;
    top: 12px;
    right: -3%;
`
const Text = styled.div`
    display: none;

    ${CategoryDiv}:hover & {
        display: flex;
    }
`
const List = styled.div`
    width: 90%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 10%;
`

async function fetchActiveCategories() {
    const result = await fetch(`/api/todos/active-categories`);
    const resulttemp = await result.json();

    const resultArr = [];
    resulttemp.map( res => resultArr.push(res._id));

    return resultArr;
}

export function TodosApp() {

    const [activeCategories, setActiveCategories] = useState([]);
    const [category, setCategory] = useState("")
    const [taskSubmitted, setTaskSubmitted] = useState("");
    const [taskChanged, setTaskChanged] = useState(false);

    const appContextValues = {
        taskSubmitted,
        setTaskSubmitted,
        taskChanged,
        setTaskChanged,
    }

    function findIfActive(categories) {
        if (activeCategories.includes(categories)) {
            return <ActiveTodosDot />
        }
    }

    useEffect( () => {
        const get = async () => {
            const result = await fetchActiveCategories();
            setActiveCategories(result);
        }
        get();
    },[category, taskChanged, taskSubmitted])

    return (
        <AppContext.Provider value={appContextValues}>
        <BrowserRouter>
            <Container>
                <Filter>
                    <CategoryDiv>
                        <StyledNavLink to="/general" onClick={e => setCategory("general")}><Icon><AiOutlineBook /></Icon><Text>General</Text></StyledNavLink>
                        {findIfActive("general")}
                    </CategoryDiv>
                    <CategoryDiv>
                        <StyledNavLink to="/important" onClick={e => setCategory("important")}><Icon><AiOutlineStar /></Icon><Text>Important</Text></StyledNavLink>
                        {findIfActive("important")}
                    </CategoryDiv>
                    <CategoryDiv>
                        <StyledNavLink to="/house" onClick={e => setCategory("house")}><Icon><AiOutlineHome /></Icon><Text>House</Text></StyledNavLink>
                        {findIfActive("house")}
                    </CategoryDiv>
                    <CategoryDiv>
                        <StyledNavLink to="/shopping" onClick={e => setCategory("shopping")}><Icon><AiOutlineShoppingCart /></Icon><Text>Shopping</Text></StyledNavLink>
                        {findIfActive("shopping")}
                    </CategoryDiv>
                    <CategoryDiv>
                        <StyledNavLink to="/meetings" onClick={e => setCategory("meetings")}><Icon><AiOutlineCalendar /></Icon><Text>Meetings</Text></StyledNavLink>
                        {findIfActive("meetings")}
                    </CategoryDiv>
                    <CategoryDiv>
                        <StyledNavLink to="/calls" onClick={e => setCategory("calls")}><Icon><AiOutlinePhone /></Icon><Text>Calls</Text></StyledNavLink>
                        {findIfActive("calls")}
                    </CategoryDiv>
                    <CategoryDiv>
                        <StyledNavLink to="/messages" onClick={e => setCategory("messages")}><Icon><AiOutlineMessage /></Icon><Text>Messages</Text></StyledNavLink>
                        {findIfActive("messages")}
                    </CategoryDiv>
                    <CategoryDiv>
                        <StyledNavLink to="/ideas" onClick={e => setCategory("ideas")}><Icon><AiOutlineBulb /></Icon><Text>Ideas</Text></StyledNavLink>
                        {findIfActive("ideas")}
                    </CategoryDiv>
                </Filter>
                <List>
                    <Switch>
                        <Route path="/:category">
                            <TodosContainer />
                        </Route>
                        <Redirect from="/" to="/general" />
                    </Switch>
                </List>
            </Container>
        </BrowserRouter>
        </AppContext.Provider>
    )
}