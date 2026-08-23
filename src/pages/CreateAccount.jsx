import { useState } from "react";
import styled from "styled-components"
import Logo from '../componants/Logo';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Input from "../componants/Input";
import Button from "../componants/Button";
import { Link } from "react-router";
import google from '/images/google.png'

export default function CreateAccount(){

    const [formValues, setFormValues] = useState({
        email:'',
        password:''
    })

    console.log(formValues)

    function formHandelChange(e){
        const id = e.target.id;
        const value = e.target.value
        setFormValues((prev)=> {
            return {...prev, [id]:value}
        })
        console.log(value, id)
    }

    return(
        <Container>
            <Header>
                <Logo/>
                 <h1>VibeCheck</h1>
                 <p>Sign in to sync your vibe.</p>
            </Header>
            <ContinueWith>
                <button aria-label="continue with google "> <FaGoogle/> Continue with Google </button>
                <button aria-label="continue with facebook "> <FaFacebook/> Continue with Facebook</button>
            </ContinueWith>
            <Pragraph>
                Or
            </Pragraph>
            <Form>
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
`;
const Form = styled.form`
    display:flex;
    flex-direction:column;
    gap:1rem;
`;
const Pragraph = styled.p``;
