import styled from "styled-components";

export default function Button({color, backgroundColor, text}){
    return(
        <CustomButton 
            $color={color}
            $backgroundColor={backgroundColor}
        >
            {text || 'Submit'}
        </CustomButton>
    )
}

const CustomButton = styled.button`
    color: ${(props)=> props.$color || 'transparent'};
    background-color:${(props) => props.$backgroundColor};
    width:${(props)=> props.width? props.width : '100%'};
    height: 50px;
    font-size:1.1rem;
    font-weight:700;
    border-radius:20px;
`;