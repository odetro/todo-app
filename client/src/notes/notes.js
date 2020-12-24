import React, { useState, useEffect } from 'react';
import { Note } from './note/note';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    background-color: white;
    align-items: center;
    border-radius: 10px;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    border-radius: 10px 10px 0 0;
`
const H3 = styled.h3`
    color: #7160b7;
    align-self: end;
    margin: 30px 0 4px 45px;

    @media only screen and (max-width: 1000px) {
        margin: 25px 0 4px 30px;
    }
`

async function fetchNotes() {
    const result = await fetch('/api/notes');
    return result.json();
}

export function Notes() {
    const [myNotes, setMyNotes] = useState([]);

    useEffect(() => {
        const get = async () => {
            const result = await fetchNotes();
            setMyNotes(result);
            }
        get();
    },[]);

    function getNotes () {
        if ( myNotes.length === 0 ) {
            return <span>loading...</span>
        }
        else {
            return (
                myNotes.map(tempNote => <Note 
                    key = { tempNote._id }
                    id = { tempNote._id }
                    note={ tempNote.note } 
                    ></Note>)
            )
        }
    }

    return (
        <Container>
            <Header>
                <H3>Quick Notes</H3>
            </Header>
            <div>
                {getNotes()}
            </div>
        </Container>
    )
}