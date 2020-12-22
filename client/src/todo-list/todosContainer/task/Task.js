import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { trackPromise } from 'react-promise-tracker';
import { AiOutlineDelete, AiFillDelete, AiOutlineEdit, AiTwotoneEdit} from 'react-icons/ai';
import styled from 'styled-components';

const TaskItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`
const TaskHeader = styled.label`
    display: block;
    display: flex;
    align-items: center;
`
const StyledInput = styled.input`
    margin-right: 17px;
`
const TaskAction = styled.div`
    display: none;
    ${TaskItem}:hover & {
        display: flex;
        font-size: 15px;
    }
`
const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #8F94A2;
    font-size: 14px;
    margin-right: 10px;
    &:focus {
        outline: none;
    }
`
const Action = styled.div``

const Icon = styled.div`
    display: inline;
    ${Action}:hover & {
        display: none;
    }
`
const IconHover = styled.div`
    display: none;
    ${Action}:hover & {
        display: inline;
    }
`

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

    const CheckboxChange = async (e) => {
        const complete = !props.completed;
        await trackPromise(taskStatus(props.id, complete));
        context.setTaskChanged(!context.taskChanged);
      };

    return (
        <TaskItem>
            <TaskHeader>
                <StyledInput type="checkbox" checked={props.completed ? "checked" : ""} onChange={CheckboxChange}/>
                <span className="checkmark"></span>
                {props.task}
            </TaskHeader>
            <TaskAction>
                <Action>
                    <StyledButton onClick={async (e) => {
                            await trackPromise(editTask(props.id, prompt(props.task)));
                            context.setTaskChanged(!context.taskChanged);
                            }}>
                        <Icon><AiOutlineEdit /></Icon>
                        <IconHover><AiTwotoneEdit /></IconHover>
                    </StyledButton>
                </Action>
                <Action>
                    <StyledButton onClick={async (e) => {
                            await trackPromise(deleteTask(props.id));
                            context.setTaskChanged(!context.taskChanged);
                            }}>
                        <Icon><AiOutlineDelete /></Icon>
                        <IconHover><AiFillDelete /></IconHover>
                    </StyledButton>
                </Action>
            </TaskAction>
        </TaskItem>
    )
}