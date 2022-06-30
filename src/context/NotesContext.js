import { createContext } from "react";

const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState();

  const data = {
    notes,
    setNotes,
  };

  return <NotesContext.Provider value={data}>{children}</NotesContext.Provider>;
};

export { NotesContextProvider };

export default NotesContext;
