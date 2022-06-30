import styled from "styled-components";

const StyledForm = styled.form`
  input {
    height: 30px;
    width: 400px;
  }

  button {
    height: 36px;
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
