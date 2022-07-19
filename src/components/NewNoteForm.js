import { useContext, useRef } from "react";
import styled from "styled-components";
import NotesContext from "../context/NotesContext";

const StyledForm = styled.form`
  input,
  button {
    font-size: 1.2rem;
    padding: 0px 20px;
    border: 0px;
    height: 34px;
  }

  input {
    width: 400px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    outline: none;
  }

  button {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: #1f4690;
    cursor: pointer;
    color: white;
  }

  @media (max-width: 500px) {
    input {
      margin-top: 20px;
      width: 94%;
      height: 40px;
    }
  }
`;

const NewNoteForm = () => {
  const inputRef = useRef();
  const { addNewNote } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value === "") {
      alert("Please write some content...");
      return;
    }

    const newNote = {
      content: inputRef.current.value,
      important: Math.random() > 0.5,
    };

    inputRef.current.value = "";
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
