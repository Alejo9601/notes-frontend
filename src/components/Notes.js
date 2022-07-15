import Note from "./Note";
import styled from "styled-components";
import { useContext } from "react";
import NotesContext from "../context/NotesContext";
import Header from "./Header";

const StyledDiv = styled.div`
  padding: 0px 50px;
  width: 70%;
`;

const Notes = () => {
  const { notes, removeNote } = useContext(NotesContext);

  return (
    <StyledDiv>
      <Header />
      <ol>
        {notes.map((note, index) => (
          <>
            <Note key={index} content={note.content} date={note.date} />
            <button onClick={() => removeNote(note.id)}>DELETE</button>
          </>
        ))}
      </ol>
    </StyledDiv>
  );
};

export default Notes;
