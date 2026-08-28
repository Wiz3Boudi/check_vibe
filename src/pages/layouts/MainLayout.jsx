import { Outlet } from "react-router";
import Header from "../../componants/Header";
import styled from "styled-components";
import Nav from "../../componants/Nav";

export default function MainLayout(){
    return(
        <Conntianer>
            <Header/>
            <Outlet/>
            <Nav/>
        </Conntianer>
    )
}

const Conntianer = styled.div`
    padding:4rem 10px;
`;