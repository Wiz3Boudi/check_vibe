import { Search, Home, PlusSquare, VideoOffIcon, BellRing } from "lucide-react";
import { Link } from "react-router";
import styled from "styled-components";

export default function Nav(){
    return(
        <Container>
            <List>
                <li>
                    <Link>
                        <button> <Home/> <span> Home Feeds </span> </button>
                    </Link>
                </li>
                <li>
                    <Link>
                        <button> <Search/> <span> Explore & Search </span> </button> 
                    </Link>
                </li>
                <li>
                    <Link>
                        <button> <PlusSquare/> <span> Vibe Reels </span> </button> 
                    </Link>
                </li>
                <li>
                    <Link>
                        <button> <VideoOffIcon/> <span> Direct Messages </span> </button>
                    </Link>
                </li>
                <li>
                    <Link>
                        <button> <BellRing/> <span> Notifcations </span> </button> 
                    </Link>
                </li>
                <li> 
                    <Link>
                        <button> <Home/> <span> profile </span> </button>
                    </Link>
                </li>
            </List>
        </Container>
    )
}

const Container = styled.nav`
    display:flex;
    align-items: center;
    justify-content:center;
    position: fixed;
    bottom:0;
    left: 0;
    width:100%;
    height:50px;
    background-color:white;
`
const List = styled.ul`
    width:100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    span{
        display:none
    }
    li button{
        background:none;
        cursor:pointer;
    }
    svg{
       color: var(--inverse-surface);
    }
    @midea(min-width:768px){
        span{
        display:block;
        }
    }
`;