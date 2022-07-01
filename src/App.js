import Notes from "./components/Notes";
import { NotesContextProvider } from "./context/NotesContext";

function App() {
  return (
    <NotesContextProvider>
      <div className="App">
        <Notes />
      </div>
    </NotesContextProvider>
  );
}

export default App;
