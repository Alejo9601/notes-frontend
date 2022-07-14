import Note from "./Note";
import styled from "styled-components";
import NewNoteForm from "./NewNoteForm";
import { useContext } from "react";
import NotesContext from "../context/NotesContext";

const StyledDiv = styled.div`
  padding: 0px 50px;
`;
const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  margin-top: 0px;
  color: #06283d;
`;

const Notes = () => {
  const { notes, removeNote } = useContext(NotesContext);

  return (
    <StyledDiv>
      <StyledH1>To do List (Front to Backend)</StyledH1>
      <ol>
        {notes.map((note, index) => (
          <>
            <Note key={index} content={note.content} date={note.date} />
            <button onClick={() => removeNote(note.id)}>DELETE</button>
          </>
        ))}
      </ol>
      <NewNoteForm />
    </StyledDiv>
  );
};

export default Notes;
