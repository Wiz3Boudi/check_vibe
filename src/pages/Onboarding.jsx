import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';
import SlideShow from '../componants/SlideShow';
import { Link } from 'react-router';
import Logo from '../componants/Logo';


export default function Onboarding(){
    return(
        <Container>
            <ContentContainer>
                <Header>
                    <Logo/>
                    <h1>VibeCheck</h1>
                </Header>
                <MobileSlideShowContainer>
                    <SlideShow/>
                </MobileSlideShowContainer>
                <Body>
                    <Content>
                        <h2>Find Your Tribe</h2>
                        <p>Connect with creatives, share your vibe, and explore a world of inspiration in an airy, sophisticated space.</p>
                        <Link to='/create-account'>
                            <button aria-label='get started'> Get Started <ArrowRight/></button>
                        </Link>
                        <Link to='/login'>
                            <button aria-label='login to your account'> Login to Account</button>
                        </Link>
                    </Content>
                    <Footer>
                        <p>By continuing, you agree to our Terms</p>
                    </Footer>
                </Body>
            </ContentContainer>
             <DeskTopSlideShowContainer>
                <SlideShow/>
            </DeskTopSlideShowContainer>

        </Container>
    )
}


const Container = styled.div`
   display: flex;
   flex-direction:column;
   justify-content: space-between;
   align-items: center;
   @media(min-width: 768px){
        justify-content: space-around;
        flex-direction: row;   
        height:100vh;
   }
`
const MobileSlideShowContainer = styled.div`
    @media(min-width: 768px){
        display:none;
    }
`;
const DeskTopSlideShowContainer = styled.div` 
    width:100%;         
    @media(max-width: 768px){
        display:none;    
    }
`;
const ContentContainer = styled(Container)`
    @media(min-width: 768px){
        flex-direction: column;
        max-width:50%;
    }
 `;

const Header = styled.div`
    display:flex;
    align-items:center;
    margin-top: 2rem;
   h1{
    color: #5516be;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    font-weight: 800;
   }
`;
const Body = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   margin-bottom:2rem;
   gap:1rem;
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
    p{
        text-align:center;
        max-width: 80%;
        font-size: 1.1rem;
        word-spacing: 2px;
        color: var(--secondary,#2f3131);
        @media(min-width:768px){
            max-width:50%;
        }
    }
    a{
        width:90%;
        border-radius:20px;
    }
    button{
        width:100%;
        border-radius:20px;
        border: 1px solid var(--outline);
        padding:15px 0;
        font-size:1.2rem;
        font-weight:600;
        color:#6d3bd7;
        cursor:pointer; 
    }
    a:first-of-type button{
        display:flex;
        align-items:center;
        justify-content: center;
        gap:10px;
        color: white;
        background-color: #6d3bd7;
        border:none;
    }
     @media(min-width: 768px){
        gap: 1.5rem;
   }
`;
const Footer = styled.div``;