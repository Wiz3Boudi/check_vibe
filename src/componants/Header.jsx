import styled from "styled-components";
import { MessageSquare, Camera } from "lucide-react";

export default function Header() {
  return (
    <UnorderedList>
      <li className="camera">
        <button aria-label="camera">
          <Camera />
        </button>
      </li>
      <li>
        <h1>Check Vibe</h1>
      </li>
      <li>
        <button aria-label="messages">
          <MessageSquare />
        </button>
      </li>
    </UnorderedList>
  );
}

const UnorderedList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    color: var(--inverse-surface);
  }
  h1 {
    color: var(--primary);
  }
  button {
    background: none;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .camera {
      display: none;
    }
  }
`;
