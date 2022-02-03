import styled from "styled-components";

const LikeStyled = styled.button`
  border: none;
  background-color: transparent;
  align-items: center;
  text-align: center;
  font-size: 1.4em;
  transition: 300ms;
  color: #e84118;
  &:hover {
    border-bottom: 1px solid #e84118;
    transition: 500ms;
  }
`;

export default LikeStyled;
