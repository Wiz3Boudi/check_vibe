import { Link } from "react-router";
import styled from "styled-components";
import { Home, Search, PlusSquare, PlayCircle, Bell, User } from "lucide-react";
import Logo from "../componants/Logo";
export default function Nav() {
  return (
    <Container>
      <CheckVibe>
        <Logo />
        <div>
          <h1>VibeCheck</h1>
          <p>Light </p>
        </div>
      </CheckVibe>
      <List>
        <li>
          <Link to="/feeds" className="active">
            <button>
              <Home /> <span> Home Feeds </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/search-explore">
            <button>
              <Search /> <span> Explore & Search </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/reels">
            <button>
              <PlusSquare /> <span> Vibe Reels </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <button>
              <PlayCircle /> <span> Direct Messages </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/notifcations">
            <button>
              <Bell /> <span> Notifcations </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <button>
              <User /> <span> rofile </span>
            </button>
          </Link>
        </li>
      </List>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  @media (min-width: 768px) {
    position: static;
    flex-direction: column;
    background-color: white;
    height: 100vh;
    width: 100%;
  }
`;
const CheckVibe = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  span {
    display: none;
  }
  button {
    background: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    color: var(--inverse-surface);
  }
  @media (min-width: 768px) {
    flex-direction: column;
    background-color: white;

    span {
      display: block;
    }
    .active {
      color: red;
    }
  }
`;
