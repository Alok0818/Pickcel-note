import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

  export default function Edit() {
    const [bookId, setBookId] = useState("");

    const getBookIdHandler = (id) => {
      console.log("The ID of document to be edited: ", id);
      setBookId(id);
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
          <Button variant="contained" >Update Card</Button><br />
          <Button variant="contained"  >Delete Card</Button>

        </Box>

      </div>
    </div>
  )
}
