import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
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
const StyledLabel = styled.label`
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
const StyledModal = styled(Modal)`
    background-color: rgba(113, 96, 183, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    text-align: center;
    padding: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`
const ModalContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
    height: 150px;
    width: 500px;
    padding: 25px 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px #DBD8EA ;
    color: #8F94A2; 
`
const ModalInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 20px;
    margin-top: 20px;
`
const ModalInput = styled.input`
    width: 100%;
    border: none;
    font-size: 16px;
    margin-left: 17px;
    &:focus {
        outline: none;
    }
`
const ModalBtn = styled.div`
    display: flex;
    flex-flow: row;
    margin-top: 17px;
`
const ChangeBtn = styled.button`
    margin-right: 12px;
    background-image: linear-gradient(45deg, #5351FB, #764BA2);
    padding: 3px 30px;
    border: none;
    color: white;
    border-radius: 7px;
    height: 26px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        background-image: linear-gradient(45deg, #6360ff, #8a5db8);
    }
`
const CancelBtn = styled.button`
    padding: 3px 30px;
    border: none;
    color: #554696;
    border-radius: 7px;
    height: 26px;
    background-color: #F4F7FF;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #e7eaf3;
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
    if ( task != null && task.length !== 0 ) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"task": task})
        };
        const result = await fetch(`/api/todos/${id}`, requestOptions);
        return result.json();
    }
}

export function Task(props) {
    const context = useContext(AppContext);
    const [editedTask, setEditedTask] = useState("");

    const CheckboxChange = async (e) => {
        const complete = !props.completed;
        await trackPromise(taskStatus(props.id, complete));
        context.setTaskChanged(!context.taskChanged);
      };

    const handleChange = (e) => {        
        setEditedTask(e.target.value);
    };

    const handleSubmit = async (e) => {
        if (e.charCode === 13 && e.target.value.length > 0) {
            e.preventDefault();
            await trackPromise(editTask(props.id, editedTask));
            context.setTaskChanged(!context.taskChanged);
            setEditedTask("");
            closeModal();
        }
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <TaskItem>
            <StyledLabel>
                <StyledInput type="checkbox" checked={props.completed ? "checked" : ""} onChange={CheckboxChange}/>
                {props.task}
            </StyledLabel>
            <TaskAction>
                <Action>
                    <StyledButton onClick={openModal}>
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
            <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="editTaskModal" ariaHideApp={false}>
                <ModalContainer>
                    <p>Edit task</p>
                    <ModalInputContainer>
                        <ModalInput placeholder={props.task} onChange={handleChange} onKeyPress={handleSubmit} />
                    </ModalInputContainer>
                    <ModalBtn>
                        <ChangeBtn onClick={async (e) => {
                            await trackPromise(editTask(props.id, editedTask));
                            context.setTaskChanged(!context.taskChanged);
                            setEditedTask("");
                            closeModal();
                        }}>
                            Change
                        </ChangeBtn>
                        <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
                    </ModalBtn>
                </ModalContainer>
            </StyledModal>
        </TaskItem>
    )
}