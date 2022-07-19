import Note from "./Note";
import styled from "styled-components";
import { useContext } from "react";
import NotesContext from "../context/NotesContext";
import Header from "./Header";

const StyledDiv = styled.div`
  padding: 0px 50px;
  width: 70%;

  @media (max-width: 500px) {
    padding: 0;
    width: 80%;
  }
`;

const StyledButton = styled.button`
  padding: 0px 20px;
  background-color: #1f4690;
  cursor: pointer;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 0px;
  border-radius: 3px;
  font-size: 1.3rem;
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
            <StyledButton onClick={() => removeNote(note.id)}>
              Delete
            </StyledButton>
          </>
        ))}
      </ol>
    </StyledDiv>
  );
};

export default Notes;
