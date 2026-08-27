import { useState } from "react";
import styled from "styled-components"
import Logo from '../componants/Logo';
import { Link } from "react-router";
import google from '/images/google.png';
import { FaFacebook } from "react-icons/fa6";
import {Mail, LockIcon, EyeOff, Eye } from "lucide-react";

export default function Login(){

    const [formValues, setFormValues] = useState({
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

        if(!formValues.username.trim()) return;
        if(!formValues.email.trim()) return;
        if(!formValues.password.trim()) return;

        console.log('Login account function ')
    }

    return(
        <Container>
            <Content>
            <Header className="header">
                <Logo width='80px' height='80px' />
                 <h1>VibeCheck</h1>
                 <p> Sgin in to sync your vibe.</p>
            </Header>
            <p className="chosse">Chosse login method you prefer</p>
            <ContinueWith className="social">
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
            <Pragraph className="or">
                Or
            </Pragraph>
            <Form onSubmit={formSubmitHandeler} className="form">
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
                        <Mail size={22}/>
                    </EamilIconContainer>
                </EmailInputContainer>

                <label htmlFor="password">Password</label>
                 <PasswordInputContainer>
                    <input 
                        type={showPassword? 'text' :'password'}
                        placeholder="••••••••"
                        id="password"
                        value={formValues.password}
                        onChange={formHandelChange}
                    />
                <LockIconContainer>
                    <LockIcon size={20}/>
                </LockIconContainer>
                {showPassword? (
                    <EyeCloseIconContainer onClick={()=> setShowPassword(prev => !prev)}>
                        <EyeOff size={20}/>
                    </EyeCloseIconContainer>
                ):(
                    <EyeIconContainer onClick={()=> setShowPassword(prev => !prev)}>
                        <Eye size={20}/>
                    </EyeIconContainer>
                )}
                </PasswordInputContainer>
                
                <Link to='/forget-password' className="gorgetPassword">Forget Password</Link>
                <button type="submit" className="submit"> Login </button>
                <p>Do not have an Account? <Link to='/create-account'> Register </Link> </p>
            </Form>
            </Content>
        </Container>
    )
}
const Container = styled.div``;
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
    a{
        color:var(--on-primary-fixed-variant);
        &:hover{
            text-decoration: underline;
        }
    }
    .chosse{
        display:none;
    }
    @media(min-width: 768px){
        .chosse{
            display:block;
        }
        display:grid;
            grid-template-columns:1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
                "header chosse"
                "header social"
                "header or"
                "header form";
        }
        .header {
            grid-area: header;
            display: flex;
            flex-direction: column;
        }
        .social {
            grid-area: social;
        }
        .or {
            grid-area: or;
            text-align:center;
       }
       .form {
            grid-area: form;
        }
        .chosse{
            gird-area: chosse;
            margin-top:20px;
            text-align:center;
        }
        padding:0;
        gap:1rem;
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
    gap:1rem;
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
        border:2px solid var(--input-border-color);
    }
    button:first-child img{
        width:50px;
    }
    button:last-child{
         background-color: #1e60f0;
         color:white;
         border:none;
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
        height: 50px;
        font-size:1.2rem;
        border:2px solid var(--input-border-color);
        background-color: var(--input-background);
        outline:none;
        padding-left: 36px;
        padding-right:20px;
        box-sizing: border-box;
        color: var(--text-secondary-color);
        &:focus{
            border-color: var(--primary);
        }
    }
    .username{
        padding: 0 10px;
    }
    button{
        position: absolute;
        top:12px;
        background:none;
        border:none;
        display:flex;
        align-items:center;
        justify-content:center;
        width:fit-content;
    }
    .submit{
        position:static;
        height: 50px;
        font-size:1.1rem;
        font-weight:700;
        border-radius:20px;
        background-color:#6d3bd7;
        color:white;
        width:100%;
        cursor:pointer;
    }
    .gorgetPassword{
        display:flex;
        text-align:right;
    }
`;
const Pragraph = styled.p``;
const EmailInputContainer = styled.div`
    width:100%;
    position:relative;
`;
const PasswordInputContainer = styled(EmailInputContainer)``;
const EyeIconContainer = styled.button`
    right:10px;
`;
const EyeCloseIconContainer = styled.button`
    right:10px;
`;
const EamilIconContainer = styled.button`
    left:10px;
`
const LockIconContainer = styled.button`
    left:10px;
`;