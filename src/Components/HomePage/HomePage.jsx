import "./HomePage.css"
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteData from "../Data/NoteData";

export default function HomePage({getNoteId}) {
  const navigate = useNavigate()
  const [note, setNote] = useState([]);

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    const data = await NoteData.getAllNotes();
    console.log(data.docs);
    setNote(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await NoteData.deletenote(id);
    getNote();
  };


  
  return (
    <div className="main">
          
          <div className='notebox'>
      {
        note.map((doc) => {
          return(
          <div key={doc.id} className='noteCard'>
            <div className="details">
            <p>Title :- {doc.title}</p>
            <p>Note:- {doc.note}</p>
            </div>
            <div className="btn">
            <Button  onClick = {(id) =>{
              console.log(doc.id); 
              navigate(`/edit/${getNoteId(doc.id)}`)
            }} >Edit</Button>

            <Button onClick = {(id) =>{
            deleteHandler(doc.id)
            }} >Delete</Button>
            </div>
          </div>
        )})
      }
      </div>
    </div>
  )
}
