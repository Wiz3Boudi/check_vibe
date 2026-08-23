    import styled from 'styled-components'
    import image1 from '/images/check-vibe-1.jpg'
    import image2 from '/images/check-vibe-2.jpg'
    import image3 from '/images/check-vibe-3.jpg'
    import { useEffect, useState } from 'react';


    export default function SlideShow(){
        const images = [image1, image2, image3];
        const [currentIndex, setCurrentIndex] = useState(0)

        useEffect(()=>{
            const timer = setInterval(()=>{
                setCurrentIndex((prev) => (prev + 1) % images.length)
            }, 3000)
            return ()=> clearInterval(timer)
        },[])

        return(
            <Container>
                <ImagesContainer>
                    <img src={images[currentIndex]} alt='Slide show images'/>
                </ImagesContainer>
                <DotContainer>
                    {images.map((_, index)=>{
                        return (
                            <div key={index} className={index === currentIndex? 'active' :''}></div>
                        )
                    })}
                </DotContainer>
            </Container>
        )
    }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding:1rem;
`;
const ImagesContainer = styled.div`
    height:300px;
    img{
        width:100%;
        height:100%;
        border-radius:20px;
    }
    @media(min-width:768px){
        height:400px; 
    }
`;
const DotContainer = styled.div`
    display:flex;
    gap:10px;
    margin-top: 10px;
    div{
        width:15px;
        height: 15px;
        border-radius: 50%;
        background-color:var(--text-muted);
    }
    .active{
        background-color:var(--secondary-fixed-dim);
    }
    }
`;