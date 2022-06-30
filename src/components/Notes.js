import notes from "../assets/notas_prueba.json";
import Note from "./Note";
import styled from "styled-components";
import NewNoteForm from "./NewNoteForm";

const StyledDiv = styled.div`
  margin: 20px;
`;
const StyledH1 = styled.h1`
  font-size: 3rem;
`;

const Notes = () => {
  return (
    <StyledDiv>
      <StyledH1>Notes</StyledH1>
      <ol>
        {notes.map((note, index) => (
          <Note key={index} content={note.content} date={note.date} />
        ))}
      </ol>
      <NewNoteForm />
    </StyledDiv>
  );
};

export default Notes;
