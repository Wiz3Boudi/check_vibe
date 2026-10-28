import { X } from "lucide-react";
import styled from "styled-components";

export default function CaptionModal({ text, isExpanded, handleClose }) {
  return (
    <Wrapper $isExpanded={isExpanded}>
      <InnerWrraper>
        <Button onClick={handleClose}>
          <X />
        </Button>
        <Text>{text || ""}</Text>
      </InnerWrraper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: ${(props) => (props?.$isExpanded ? "flex" : "none")};
  position: fixed;
  inset: 0;
  top: unset;
  width: 100%;
  height: fit-content;
  z-index: 1002;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  padding-top: 30px;
  @media (min-width: 768px) {
    inset: 0;
    border-radius: 0;
    height: 100%;
  }
`;
const InnerWrraper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  height: 100%;
  padding: 1rem;
  @media (min-width: 768px) {
    width: 40%;
    margin: auto;
    height: fit-content;
    border-radius: 20px;
  }
`;
const Button = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
  width: fit-content;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    svg {
      opacity: 0.5;
    }
  }
`;
const Text = styled.p`
  margin: 50px 0;
`;
