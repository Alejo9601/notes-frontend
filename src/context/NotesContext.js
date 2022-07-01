import { createContext, useState } from "react";
import notesJson from "../assets/notas_prueba.json";

const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(notesJson);

  const data = {
    notes,
    setNotes,
  };

  return <NotesContext.Provider value={data}>{children}</NotesContext.Provider>;
};

export { NotesContextProvider };

export default NotesContext;
