import styled from "styled-components"
import { initialStories as StoriesDate, initialPosts as postsData } from "../data/feeds";
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { useState } from "react";


export default function Feeds(){

    const [initialStories, setInitialStories] = useState(StoriesDate);
    const [initialPosts, setInitialPosts] = useState(postsData);
    console.log(initialPosts)

    return(
        <Container>
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
           <Posts>
                 {initialPosts?.map((post) => {
                    return(
                        <Post key={post.id}>
                            <div className="auther"> 
                                <img src={post.avatarUrl} alt={post.caption} />
                                <div>
                                    <h4> {post.username} </h4>
                                    <p> {post.location} </p>
                                </div>
                            </div>
                            <div className="img">
                                <img src={post.avatarUrl} alt={post.images} />
                            </div>
                            <div className="detials">
                                <div className="reactions">
                                    <div>
                                        <button aria-label="like"> <Heart/> </button>
                                         <button aria-label="comment"> <MessageCircle/> </button>
                                         <button aria-label="send"> <Send/> </button>
                                    </div>
                                    <button aria-label="bookmark"> <Bookmark/> </button>
                                </div>
                                <h3 className="liksCounts"> {post.likesCount.toLocaleString()} Likes  </h3>
                                <div className="caption">
                                    <span>{post.username}</span>
                                    <span> {post.caption} </span>
                                </div>
                                <p className="viewcommrnts"> View all {post.commentsCount} comments </p>
                                <h5 className="timesamp"> {post.timestamp} </h5>
                            </div>
                        </Post>
                    )
                 })}
           </Posts>
        </Container>
    )
}
const Container = styled.div`
    background-color: var(--secondary);
`;

const Stories = styled.div`
    display: flex;
    align-items:center;
    justify-content:flex-start;
    width: 100%;             
    box-sizing: border-box;
    gap:10px;
    padding:10px;
    background-color: white;
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

const Posts = styled.div`
    display:flex;
    flex-direction: column;
    gap:1rem;
    padding-top: 1rem;
`;
const Post = styled.div`
    display:flex;
    flex-direction: column;
    gap:1rem;
    background-color: white;
    .auther{
         display: flex;
         gap: 1rem;
         padding:1rem;
         img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor:pointer;
         }
        div h4, div p{
            curosr:pointer;
        }
    }
    .img{
        img{
            width: 100%;
            display:noen
        }
    }
    .detials{
        display:flex;
        flex-direction:column;
        gap:5px;
        padding: 0 10px;
        padding-bottom:1rem;
        .reactions{
            display:flex;
            justify-content: space-between;
            button{
                background:none;
                cursor:pointer;
            }
            div{
                display:flex;
                align-items: center;
                gap:1rem;
            }
        }
    }
    .caption{
    //     width-width: 60px;
    //     white-space: nowrap;
    //     overflow:hidden;
    //     text-overflow: ellipsis;
    //     margin:0;
    //     text-align: center;
        span:first-child{
            color:var(--on-surface);
            font-size:1.2rem;
            margin-right: 5px;
        }
    }
    .viewcommrnts{
        &:hover{
         color:var(--secondary-fixed-dim);
         cursor:pointer;
        }
    }
`;