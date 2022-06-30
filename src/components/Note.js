import styled from "styled-components";

const StyledLi = styled.li`
  width: fit-content;
  text-align: left;
  font-size: 1.3rem;
`;

const Note = ({ content, date }) => {
  return (
    <StyledLi>
      <span>{content}</span>
      <br></br>
      <small>{date}</small>
    </StyledLi>
  );
};

export default Note;
