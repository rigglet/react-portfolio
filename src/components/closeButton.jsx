import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

export default function closeButton({ closeFunction }) {
  return (
    <StyledClose onClick={() => closeFunction(false)}>
      <AiFillCloseCircle className="closeButton" />
    </StyledClose>
  );
}

const StyledClose = styled.div`
  z-index: 999;
  position: absolute;
  top: 1rem;
  right: 1rem;
  .closeButton {
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: whitesmoke;
    color: #65617d;

    &:hover {
      color: #920000;
      transition: 0.3s;
    }
  }
`;
