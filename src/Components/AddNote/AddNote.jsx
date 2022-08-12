
import "./AddNote.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteData from "../Data/NoteData";

export default function AddNote({id, setNoteId }) {

const navigate = useNavigate()
const [title, setTitle] = useState("");
const [note, setNote] = useState("");
const [message, setMessage] = useState({ error: false, msg: "" });

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  if (title === "" || note === "") {
    setMessage({ error: true, msg: "All fields are mandatory!" });
    return;
  }
  const newNote = {
    title,
    note,
  };
  console.log(newNote);

  try {
    // if (id !== undefined && id !== "") {
      // await NoteData.updateNotes(id, newNote);
      // setNoteId("");
      // setMessage({ error: false, msg: "Updated successfully!" });
    // } 
    // else {
      await NoteData.addNotes(newNote);
      setMessage({ error: false, msg: "New note added successfully!" });
    // }
  } catch (err) {
    setMessage({ error: true, msg: err.message });
  }

  setTitle("");
  setNote("");
  
  };





  return (
    <div className='addnote'>
      <h2>Add New Note</h2>

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
          <TextField id="standard-basic" label="Title" variant="standard" value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} /><br />

          {/* Note Input */}
          <TextField id="standard-basic" label="Note" variant="standard" value={note} onChange={(e) => {
            setNote(e.target.value)
          }} /><br />

          {/* Add Card Button */}
          <Button disabled={ !title || !note } variant="contained" onClick={handleSubmit}>submit</Button>
        </Box>

      </div>
    </div>
  )
}
