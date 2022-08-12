import { database } from "./../Firebase/Firebase.config"

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const noteCollectionRef = collection(database, "notes");
class NoteData {
  addNotes = (newNote) => {
    return addDoc(noteCollectionRef, newNote);
  };

  updateNote = (id, updatedNote) => {
    const noteDoc = doc(database, "notes", id);
    return updateDoc(noteDoc, updatedNote);
  };

  deletenote = (id) => {
    const noteDoc = doc(database, "notes", id);
    return deleteDoc(noteDoc);
  };

  getAllNotes = () => {
    return getDocs(noteCollectionRef);
  };

  getNote = (id) => {
    const noteDoc = doc(database, "notes", id);
    return getDoc(noteDoc);
  };
}

export default new NoteData();