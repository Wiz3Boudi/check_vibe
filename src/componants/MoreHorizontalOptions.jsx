import styled from "styled-components";

export default function MoreHorizontalOptions({ handleClick }) {
  const items = ["Unfollow", "Report"];
  return (
    <Wrapper>
      {items.map((items) => (
        <Button key={items} onClick={handleClick}>
          {items}
        </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  position: absolute;
  width: fit-content;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 12px;
`;
const Button = styled.button`
  background: none;
  cursor: pointer;
  &:hover {
    color: var(--text-secondary-color);
  }
`;
