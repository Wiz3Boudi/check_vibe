import styled from "styled-components";

export default function MoreHorizontalOptions() {
  const items = ["Unfollow", "Report"];
  return (
    <Wrapper>
      {items.map((items) => (
        <Button key={items}> {items} </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  position: absolute;
  width: 70%;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 12px 0;
`;
const Button = styled.button`
  &:hover {
    background: red;
  }
`;
