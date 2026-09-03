import styled from "styled-components";
import { X } from "lucide-react";

export default function EditProfile({ handelClick }) {
  return (
    <Container>
      <Header>
        <h4>Eddit Profile</h4>
        <button onClick={handelClick}>
          <X />
        </button>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 33.1%;
  height: 100vh;
  background-color: #000000;
`;
const Header = styled.div`
  display: flex;
  algin-items: center;
  justify-content: space-around;
  h4 {
    color: white;
  }
`;
