import styled from "styled-components";
import NewNoteForm from "./NewNoteForm";

const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledH1 = styled.h1`
  width: fit-content;
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3rem;
  margin-top: 0px;
  color: #06283d;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>To do List (Front to Backend)</StyledH1>
      <NewNoteForm />
    </StyledHeader>
  );
};

export default Header;
