import { useState } from "react";
import styled from "styled-components"
import Logo from '../componants/Logo';
import Button from "../componants/Button";
import { Link } from "react-router";
import google from '/images/google.png';
import { FaFacebook } from "react-icons/fa6";
import { LockIcon, EyeClosed, Eye } from "lucide-react";
import { MdEmail } from "react-icons/md";

export default function CreateAccount(){

    const [formValues, setFormValues] = useState({
        username:'',
        email:'',
        password:''
    })

    const [showPassword, setShowPassword] = useState(false);


    function formHandelChange(e){
        const id = e.target.id;
        const value = e.target.value
        setFormValues((prev)=> {
            return {...prev, [id]:value}
        })
    }

    function formSubmitHandeler(e){
        e.preventDefault();
        console.log('Hello from form submit handeler')
    }

    return(
        <Container>
            <Content>
            <Header>
                <Logo width='80px' height='80px' />
                 <h1>VibeCheck</h1>
                 <p>Create Account to sync your vibe.</p>
            </Header>
            <ContinueWith>
                <button 
                    aria-label="continue with google ">
                    <img src={google}/>
                    Continue with Google 
                </button>
                <button 
                    aria-label="continue with facebook "> 
                    <FaFacebook size={25}/>
                    Continue with Facebook
                </button>
            </ContinueWith>
            <Pragraph>
                Or
            </Pragraph>
            <Form onSubmit={formSubmitHandeler}>
                <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        placeholder="Enter username"
                        id="username"
                        value={formValues.username}
                        onChange={formHandelChange}
                    />
                <label htmlFor="email">Email</label>
                <EmailInputContainer>
                    <input 
                        type="email"
                        placeholder="hello@checkvibe.com"
                        id="email"
                        value={formValues.email}
                        onChange={formHandelChange}
                        className="usenameInput"
                    />
                    <EamilIconContainer>
                        <MdEmail size={22}/>
                    </EamilIconContainer>
                </EmailInputContainer>

                <label htmlFor="password">Password</label>
                 <PasswordInputContainer>
                    <input 
                        type={showPassword? 'text' :'password'}
                        placeholder=". . . . . . ."
                        id="password"
                        value={formValues.password}
                        onChange={formHandelChange}
                    />
                <LockIconContainer>
                    <LockIcon size={20}/>
                </LockIconContainer>
                {showPassword? (
                    <EyeCloseIconContainer onClick={()=> setShowPassword(prev => !prev)}>
                        <EyeClosed size={20}/>
                    </EyeCloseIconContainer>
                ):(
                    <EyeIconContainer onClick={()=> setShowPassword(prev => !prev)}>
                        <Eye size={20}/>
                    </EyeIconContainer>
                )}
                </PasswordInputContainer>
                
                <p>Forget Password</p>
                <Button
                text='Sign Up'
                backgroundColor='#6d3bd7'
                color='white'
                />
                <p>Do have an Account? <Link to='/login'> Login </Link> </p>
            </Form>
            </Content>
        </Container>
    )
}
const Container = styled.div``
const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
    padding:1rem;
    background-color:var(--background);
    margin:1rem;
    border-radius:20px;
    padding-bottom:2rem;
`;
const Header = styled(Content)`
        h1{
        color: #5516be;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -0.02em;
        font-weight: 800;
    }
`;
const ContinueWith = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    width:90%;
    button{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5px;
        padding:0.9rem 0;
        border-radius: 20px; 
        font-size:1.1rem;
        cursor:pointer;
    }
    button:first-child img{
        width:50px;
    }
    button:last-child{
         background-color: #1e60f0;
         color:white;
    }
    button:last-child svg{
        margin-bottom:2px;
    }
`;
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    width:90%;
    label{
        align-self:start;
    }
    input{
        width:100%;
        height: 40px;
        font-size:1.2rem;
        border:1px solid var(--border-subtle);
        background-color: var(--secondary-fixed);
        padding-left: 36px;
        padding-right:20px;
        box-sizing: border-box;
        &:focus{
            outline-color: var(--on-primary-fixed-variant);
        }
    }
    input:last-child{
    background-color:red;   
    }
`;
const Pragraph = styled.p``;

const EmailInputContainer = styled.div`
    width:100%;
    position:relative;
`;
const PasswordInputContainer = styled(EmailInputContainer)``;

const EyeIconContainer = styled.button`
    position: absolute;
    right:5px;
    top:7px;
    background:none;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    width:fit-content;

`;
const EyeCloseIconContainer = styled.button`
    position: absolute;
    right:5px;
    top:7px;
    background:none;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    width:fit-content;

`;
const EamilIconContainer = styled.button`
    position: absolute;
    left:5px;
    top:7px;
    background:none;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    width:fit-content;
`
const LockIconContainer = styled.button`
    position: absolute;
    left:5px;
    top:7px;
    background:none;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    width:fit-content;
`
;