import { useRef } from "react";
import styled from "styled-components";

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

  const handleSubmit = () => {};

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input ref={inputRef} type="text"></input>
      <button>Create note</button>
    </StyledForm>
  );
};

export default NewNoteForm;
