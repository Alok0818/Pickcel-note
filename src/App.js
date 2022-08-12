import './App.css';
import {Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import AddNote from './Components/AddNote/AddNote'
import HomePage from './Components/HomePage/HomePage';
import Edit from './Components/Edit/Edit';


function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
