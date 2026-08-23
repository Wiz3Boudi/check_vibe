import styled from "styled-components";
import LogoSrc from '/images/loggo1.jpg';


export default function Logo(){
    return <Image src={LogoSrc} alt='Logo' />
}

const Image = styled.img`
    width:50px;
    width:50px;
    border-radius:10px;
`;