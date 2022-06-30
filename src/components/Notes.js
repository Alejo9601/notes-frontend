import notes from "../assets/notas_prueba.json";
import Note from "./Note";
import styled from "styled-components";
import NewNoteForm from "./NewNoteForm";

const StyledH1 = styled.h1`
  font-size: 3rem;
`;

const Notes = () => {
  return (
    <div>
      <StyledH1>Notes</StyledH1>
      <ol>
        {notes.map((note, index) => (
          <Note key={index} content={note.content} date={note.date} />
        ))}
      </ol>
      <NewNoteForm />
    </div>
  );
};

export default Notes;
