import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NoteData from "../Data/NoteData";

  export default function Edit({id}) {
    const [noteId, setNoteId] = useState("");
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" });
    

    const getBookIdHandler = (id) => {
      console.log("The ID of document to be edited: ", id);
      setNoteId(id);
    };

    const newNote = {
      title,
      note,
    };
    console.log(newNote);

    try {
         NoteData.updateNote(id, newNote);
        setNoteId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  
    setTitle("");
    setNote("");

    const editHandler = async () => {
      setMessage("");
      try {
        const docSnap = await NoteData.getNote(id);
        console.log("the record is :", docSnap.data());
        setTitle(docSnap.data().title);
        setNote(docSnap.data().note);
        
      } catch (err) {
        setMessage({ error: true, msg: err.message });
      }
    };
    
  

    

  return (
    <div className='addnote'>
      <h1>Update Notes</h1>

      <div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '55ch' },
          }}
          noValidate
          autoComplete="off"
        >

          {/* Title Input */}
          <TextField id="standard-basic" label="Title" value={title} variant="standard" onChange={(e) => {
            setTitle(e.target.value)
          }} /><br />

          {/* Notes Input */}
          <TextField id="standard-basic" label="Note"  value={note} variant="standard" onChange={(e) => {
            setNote(e.target.value)
          }} /><br />

          {/* Add Card Button */}
          <Button variant="contained" onClick={editHandler}>Update Card</Button><br />
          <Button variant="contained"  >Delete Card</Button>

        </Box>

      </div>
    </div>
  )
}
