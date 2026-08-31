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
      <Following className="follow">
        <NewFllowing />
      </Following>
    </Conntianer>
  );
}

const Conntianer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "sider outlet follow";
  }
`;
const UpperNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  height: 60px;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
const SiderNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  height: 60px;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    position: static;
    grid-area: sider;
    justify-content: center;
  }
`;
const OutletContainer = styled.div`
  padding: 4rem 0;
  @media (min-width: 768px) {
    padding: 0;
    grid-area: outlet;
  }
`;
const Following = styled.div`
  display: none;
  @media (min-width: 768px) {
    grid-area: follow;
    display: flex;
    flex-direction: column;
  }
`;
