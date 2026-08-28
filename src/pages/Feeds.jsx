import styled from "styled-components"
import { initialStories } from "../data/stories";

export default function Feeds(){
    return(
        <Stories>
            {initialStories?.map((story)=> {
                return(
                    <Story key={story.id}>
                        <div>
                            <img src={story.avatarUrl} alt={story.id} />
                        </div>
                        <h4>{ story.username}</h4>
                    </Story>
                )
            })}

        </Stories>
    )
}

const Stories = styled.div`
    display: flex;
    align-items:center;
    justify-content:flex-start;
    width: 100%;             
    box-sizing: border-box;
    gap:10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display:none;
    }
`;
const Story = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4{
        max-width: 60px;
        white-space: nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
        margin:0;
        text-align: center;
    }
    &> div{
        background-color:white;
        padding: 3px;
        border:3px solid var(--primary);;
        width:fit-content;
        border-radius:50%;
        display:flex;
        align-item: center;
        justify-content: center;
    }
    img{
        width: 60px;
        height:60px;
        border-radius:50%;
        border-color:var(--primary)
    }
`;