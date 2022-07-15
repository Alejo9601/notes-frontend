import Notes from "./components/Notes";
import { NotesContextProvider } from "./context/NotesContext";
import styled from "styled-components";

const APP = styled.div`
  background-color: #6e85b7;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <NotesContextProvider>
      <APP>
        <Notes />
      </APP>
    </NotesContextProvider>
  );
}

export default App;
