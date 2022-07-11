import { createContext, useEffect, useState } from "react";
import createNewNote from "../services/createNewNote";
import deleteNote from "../services/deleteNote";
// import notesJson from "../assets/notas_prueba.json";
import getAllNotes from "../services/getAllNotes";

const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes().then((res) => setNotes(res));
  }, []);

  const addNewNote = (newNote) => {
    createNewNote(newNote).then((res) => setNotes([...notes, res]));
  };

  const removeNote = (id) => {
    const notesAux = notes.filter((note) => note.id !== id);
    if (deleteNote(id)) setNotes(notesAux);
  };

  const data = {
    notes,
    addNewNote,
    removeNote,
  };

  return <NotesContext.Provider value={data}>{children}</NotesContext.Provider>;
};

export { NotesContextProvider };

export default NotesContext;
