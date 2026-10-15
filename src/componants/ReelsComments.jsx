import styled from "styled-components";

export default function ReelsComments({ comments }) {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  inset: 0;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.4);
`;
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;
