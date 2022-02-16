import styled from "styled-components";

const DropDown = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  flex-direction: column;
  justify-content: space-between
  align-items: center;
`;

export default DropDown;
