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
    background-color:${(props) => props.$backgroundColor || 'transparent'}
`;
