import React from 'react';
import styled from 'styled-components';

const Contanier = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
`
const NoteDiv = styled.div`
    align-self: end;
    margin-top: 30px;
    display: flex;
    align-items: center;
`
const Textarea = styled.textarea`
    width: 100%;
    border: none;
    font-size: 16px;
    resize: none;
    font-family: sans-serif;
    color: #8F94A2;

    :focus {
        outline: none
    };
`

async function editNote (id, note) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"note": note})
    };
    const result = await fetch(`/api/notes/${id}`, requestOptions);
    return result.json();
}

export function Note(props) {

    const handleChange = (e) => {
        editNote (props.id, e.target.value)
      };

    return (
        <Contanier>
            <NoteDiv>
                <Textarea className="noteInput" rows="10" cols="33" placeholder="Write notes here..." onChange={handleChange}>{props.note}</Textarea>
            </NoteDiv>
        </Contanier>
    )
}