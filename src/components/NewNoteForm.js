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
  return (
    <StyledForm>
      <input type="text"></input>
      <button>Create note</button>
    </StyledForm>
  );
};

export default NewNoteForm;
