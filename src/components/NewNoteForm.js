import { useContext, useRef } from "react";
import styled from "styled-components";
import NotesContext from "../context/NotesContext";

const StyledForm = styled.form`
  input,
  button {
    font-size: 1.2rem;
    padding: 0px 20px;
  }

  input {
    height: 30px;
    width: 400px;
  }

  button {
    height: 34px;
  }
`;

const NewNoteForm = () => {
  const inputRef = useRef();
  const { notes, addNewNote } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value === "") {
      alert("Please write content...");
      return;
    }

    const newNote = {
      content: inputRef.current.value,
      important: Math.random() > 0.5,
    };

    addNewNote(newNote);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input ref={inputRef} type="text"></input>
      <button>Create note</button>
    </StyledForm>
  );
};

export default NewNoteForm;
