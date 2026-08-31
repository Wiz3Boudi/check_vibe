import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../componants/Logo";
import { navItems } from "../data/navItems";

export default function Nav() {
  const location = useLocation();

  return (
    <Container>
      <CheckVibe>
        <Logo />
        <div>
          <h1>VibeCheck</h1>
          <p>Light</p>
        </div>
      </CheckVibe>
      <List>
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path}>
              <StyledLink to={path} $isActive={isActive}>
                <Icon size={24} />
                <span>{label}</span>
              </StyledLink>
            </li>
          );
        })}
      </List>
    </Container>
  );
}

const Container = styled.nav``;

const CheckVibe = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    h1 {
      font-size: 1.25rem;
      margin: 0;
      color: var(--primary);
    }
    p {
      margin: 0;
      font-size: 0.85rem;
      color: gray;
    }
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0.5rem 0;
  list-style: none;

  li {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 0.5rem;
    padding: 0;

    li {
      justify-content: flex-start;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  text-decoration: none;
  border-radius: 8px;
  color: ${(props) =>
    props.$isActive ? `var(--primary)` : "var(--inverse-surface, #333)"};
  transition: background-color 0.2s ease;

  span {
    display: none;
  }

  svg {
    stroke: currentColor;
  }

  &:hover {
    background-color: #f5f5f5;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;

    span {
      display: inline-block;
      font-size: 1rem;
      font-weight: ${(props) => (props.$isActive ? "600" : "normal")};
    }
  }
`;
