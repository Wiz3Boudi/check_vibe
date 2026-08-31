import styled from "styled-components";
import { MessageSquare, Camera } from "lucide-react";

export default function Header() {
  return (
    <UpBar>
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
    </UpBar>
  );
}

const UpBar = styled.div`
  display: flex;
  justify-content: center;
  algin-items: center;
  height: 50px;
  background-color: white;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
`;
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
