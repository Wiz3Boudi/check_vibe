import { Outlet } from "react-router";
import Header from "../../componants/Header";
import styled from "styled-components";
import Nav from "../../componants/Nav";
import NewFllowing from "../../componants/NewFllowing";

export default function MainLayout() {
  return (
    <Conntianer>
      <UpperNav className="uppderNav">
        <Header />
      </UpperNav>
      <OutletContainer className="outlet">
        <Outlet />
      </OutletContainer>
      <SiderNav className="sider">
        <Nav />
      </SiderNav>
      <Fllowing className="fllow">
        <NewFllowing />
      </Fllowing>
    </Conntianer>
  );
}

const Conntianer = styled.div`
  padding: 4rem 0;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 20% 45% 35%;
    grid-template-rows: auto;
    grid-template-areas: "sider outlet fllow";
    gap: 1rem;
    background-color: var(--tertiary-fixed);
    padding: 0;
  }
`;
const UpperNav = styled.div`
  grid-area: uppderNav;
  @media (min-width: 768px) {
    display: none;
  }
`;
const SiderNav = styled.div`
  grid-area: sider;
  @media (min-width: 768px) {
    position: fixed;
    background-color: white;
  }
`;
const OutletContainer = styled.div`
  grid-area: outlet;
`;
const Fllowing = styled.div`
  grid-area: fllow;
  display: none;
  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    background-color: white;
    width: 32%;
    height: 100vh;
  }
`;
