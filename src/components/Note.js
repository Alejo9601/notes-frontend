import styled from "styled-components";

const StyledLi = styled.li`
  width: fit-content;
  text-align: left;
  font-size: 1.3rem;
  margin-bottom: 10px;

  span {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.8rem;
  }
  small {
    color: blue;
  }
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
