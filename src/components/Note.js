import styled from "styled-components";

const StyledLi = styled.li`
  width: 100%;
  text-align: left;
  font-size: 1.3rem;
  margin: 10px 0px;
  padding: 0px 10px;
  background-color: #b2c8df;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 0px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  span {
    font-size: 1.8rem;
  }
  small {
    color: blue;
    font-weight: 500;
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
