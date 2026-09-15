import { X } from "lucide-react";
import styled from "styled-components";

export default function DisplayImage({ src, displayImageHandleClick }) {
  return (
    <Container>
      <Wrapper>
        <CloseButton title="Close image">
          <X onClick={displayImageHandleClick} />
        </CloseButton>
        <Image src={src} alt={src} />
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1002;
  background-color: rgb(0, 0, 0, 0.8);
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 80%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
