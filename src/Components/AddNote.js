import React from 'react'
import { useState } from 'react';

export default function AddNote({handleAddNote}) {
    const characterLimit = 200;
    const [noteText, setnoteText] = useState('');

    const handleChange = (event)=>{
        if (characterLimit -event.target.value.length>=0){
            setnoteText(event.target.value);
        }
        

    }

    const handleSaveClick = ()=>{
        if (noteText.trim().length >0) {
            handleAddNote(noteText);
            setnoteText('')
        }
        else{
            alert("Note cannot be empty or contain spaces")
            setnoteText('')
        }
       
    }
    return (
        <div className='note new'>
            <textarea cols="10" rows="8" placeholder='Type to add a note...'
            value={noteText}
            onChange={handleChange}>
            </textarea>

            <div className='note-footer'>
                <small>{characterLimit - noteText.length}</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    )
}
