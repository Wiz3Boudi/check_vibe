import { useState } from "react";
import styled from "styled-components"
import Logo from '../componants/Logo';
import Input from "../componants/Input";
import Button from "../componants/Button";
import { Link } from "react-router";
import google from '/images/google.png';
import { FaFacebook } from "react-icons/fa6";

export default function CreateAccount(){

    const [formValues, setFormValues] = useState({
        email:'',
        password:''
    })

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
            <Header>
                <Logo width='80px' height='80px' />
                 <h1>VibeCheck</h1>
                 <p>Sign in to sync your vibe.</p>
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
                <Input
                    inputType='text'
                    htmlFor='email'
                    labelTitle='Eamil'
                    placeholder="hello@vibecheck.com"
                    name='email'
                    onClick={formHandelChange}
                    value={formValues.email}
                />
                  <Input
                    inputType='password'
                    htmlFor='password'
                    labelTitle='Password'
                    placeholder="........"
                    name='password'
                    onClick={formHandelChange}
                    value={formValues.password}
                />
                <p>Forget Password</p>
                <Button
                text='Sign Up'
                backgroundColor='#6d3bd7'
                color='white'
                />
                <p>Do have an Account? <Link to='/login'> Login </Link> </p>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
`;
const Header = styled(Container)`
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
    width:80%;
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
    gap:1rem;
`;
const Pragraph = styled.p``;
