import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NoteData from "../Data/NoteData";
import HomePage from '../HomePage/HomePage';

  export default function Edit({id, setNoteId}) {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" });
    

    // const newNote = {
    //   title,
    //   note,
      
    // };
    // console.log(newNote);

    // try {
    //   if (id !== undefined && id !== "") {
    //     NoteData.updateNote(id, newNote);
    //     setNoteId("");
    //     setMessage({ error: false, msg: "Updated successfully!" });
    //   }
    // } catch (err) {
    //   setMessage({ error: true, msg: err.message });
    // }
  
 

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
    
    useEffect(() => {
      console.log("The id here is : ", id);
        editHandler();
      
    }, []);

  //     const getNote = async () => {
  //   const data = await NoteData.getAllNotes();
  //   console.log(data.docs);
  //   setNote(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  //   const deleteHandler = async (id) => {
  //     await NoteData.deletenote(id);
  //     getNote();
  //   };

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
