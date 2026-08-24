import styled from "styled-components";
import LogoSrc from '/images/loggo1.jpg';


export default function Logo({height, width}){
    return (
        <Image 
            src={LogoSrc} 
            alt='Logo'
            $width={width}
            $height={height}
        />
    )
}

const Image = styled.img`
    width:${(props) => props.$width || '50px'};
    height:${(props) => props.$height || '50px'};
    border-radius:10px;
`;