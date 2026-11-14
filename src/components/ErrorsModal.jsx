import styled from "styled-components";

export default function ErrorModal({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  background-color: #eccadd77;
  border-radius: 10px;
  padding: 3px;
`;
