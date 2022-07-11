import { createContext, useEffect, useState } from "react";
// import notesJson from "../assets/notas_prueba.json";
import getAllNotes from "../services/getAllNotes";

const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes().then((res) => setNotes(res));
    console.log(notes);
  }, []);

  const data = {
    notes,
    setNotes,
  };

  return <NotesContext.Provider value={data}>{children}</NotesContext.Provider>;
};

export { NotesContextProvider };

export default NotesContext;
