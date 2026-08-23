import { MdEmail, MdLock } from "react-icons/md";
import styled from "styled-components";

export default function Input(props){
    return(
        <>
           <Label htmlFor={props.htmlFor}>{props.labelTitle} </Label>
           <InputContainer>
              <StyledInput
                id={props?.htmlFor} 
                type={props?.inputType}  
                placeholder={props?.placeholder}
                name={props?.name}
                value={props?.value}
                onChange={props.onClick}
            />
           </InputContainer>
        </>
    )
}
const Label = styled.label``;
const InputContainer = styled.div``;
const StyledInput = styled.input``;