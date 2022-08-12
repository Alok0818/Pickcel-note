import './App.css';
import {Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import AddNote from './Components/AddNote/AddNote'
import HomePage from './Components/HomePage/HomePage';
import Edit from './Components/Edit/Edit';
import { useState } from 'react';


function App() {
  const [noteId, setNoteId] = useState("");

  const getNoteIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setNoteId(id);
  };

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage getNoteId={getNoteIdHandler} />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/edit/:id" element={<Edit id={noteId} setNoteId={setNoteId}/>} />
      </Routes>
    </>
  );
}

export default App;
