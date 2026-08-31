import styled from "styled-components";
import {
  initialStories as StoriesData,
  initialPosts as postsData,
} from "../data/feeds";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useReducer, useState } from "react";
import { updatePostsReducer } from "../reducer/feeds";

export default function Feeds() {
  const [initialPosts, dispatch] = useReducer(updatePostsReducer, postsData);
  const [initialStories, setInitialStories] = useState(StoriesData);

  function updateStoriesFunction(id) {
    setInitialStories((prev) =>
      prev.map((story) =>
        story.id === id ? { ...story, hasUnseenStory: true } : story,
      ),
    );
  }

  const sortedStories = initialStories
    ? [...initialStories].sort((a, b) => {
        if (a.id === "story-alex") return -1;
        if (b.id === "story-alex") return 1;
        return a.hasUnseenStory - b.hasUnseenStory;
      })
    : [];

  return (
    <Container>
      <Stories>
        {sortedStories.map((story) => (
          <Story key={story.id} onClick={() => updateStoriesFunction(story.id)}>
            <div className={story.hasUnseenStory ? "hasSeen" : ""}>
              <img src={story.avatarUrl} alt={story.username || story.id} />
            </div>
            <h4>{story.id === "story-alex" ? "Your story" : story.username}</h4>
          </Story>
        ))}
      </Stories>

      <Posts>
        {initialPosts?.map((post) => (
          <PostCard key={post.id} post={post} dispatch={dispatch} />
        ))}
      </Posts>
    </Container>
  );
}

function PostCard({ post, dispatch }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const showPrev = currentIndex > 0;
  const showNext = currentIndex < post.images.length - 1;

  return (
    <Post>
      <div className="author">
        <img src={post.avatarUrl} alt={post.username} />
        <div>
          <h4>{post.username}</h4>
          <p>{post.location}</p>
        </div>
      </div>

      <div className="img-container">
        <img
          src={post.images[currentIndex]}
          alt={`Post slide ${currentIndex + 1}`}
        />

        {showNext && (
          <button
            className="nav-btn next"
            onClick={() => setCurrentIndex((prev) => prev + 1)}
          >
            <ChevronRight />
          </button>
        )}
        {showPrev && (
          <button
            className="nav-btn prev"
            onClick={() => setCurrentIndex((prev) => prev - 1)}
          >
            <ChevronLeft />
          </button>
        )}

        {post.images.length > 1 && (
          <div className="dots">
            {post.images.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? "dot active" : "dot"}
              />
            ))}
          </div>
        )}
      </div>

      <div className="details">
        <div className="reactions">
          <div>
            <button
              aria-label="like"
              onClick={() =>
                dispatch({
                  type: post.isLiked ? "decrease" : "increase",
                  id: post.id,
                })
              }
            >
              <Heart
                fill={post.isLiked ? "red" : "none"}
                color={post.isLiked ? "red" : "black"}
              />
            </button>
            <button aria-label="comment">
              <MessageCircle />
            </button>
            <button aria-label="send">
              <Send />
            </button>
          </div>
          <button
            aria-label="bookmark"
            onClick={() => dispatch({ type: "save", id: post.id })}
          >
            <Bookmark fill={post.isSaved ? "black" : "none"} color="black" />
          </button>
        </div>

        <h3 className="likes-count">
          {post.likesCount?.toLocaleString()} Likes
        </h3>
        <div className={`caption ${!isExpanded ? "expandedCaption" : ""}`}>
          <span>{post.username}</span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded((prev) => !prev);
            }}
          >
            {post.caption}
          </span>
        </div>
        <p className="view-comments">View all {post.commentsCount} comments</p>
        <h5 className="timestamp">{post.timestamp}</h5>
      </div>
    </Post>
  );
}

const Container = styled.div`
  background-color: var(--secondary, #fafafa);
`;

const Stories = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;
  background-color: white;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Story = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  h4 {
    max-width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    text-align: center;
  }

  & > div {
    background-color: white;
    padding: 3px;
    border: 2px solid var(--primary, #e1306c);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hasSeen {
    border-color: gray;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;

  .author {
    display: flex;
    gap: 1rem;
    padding: 1rem 1rem 0 1rem;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
    }

    div h4,
    div p {
      margin: 0;
      cursor: pointer;
    }
  }

  .img-container {
    position: relative;
    width: 100%;
    z-index: 1;
    img {
      width: 100%;
      display: block;
      max-height: 500px;
      object-fit: cover;
    }

    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.7);
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &.next {
        right: 10px;
      }
      &.prev {
        left: 10px;
      }
    }

    .dots {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 5px;

      .dot {
        width: 10px;
        height: 10px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;

        &.active {
          background: #0095f6;
        }
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 10px 1rem 10px;

    .reactions {
      display: flex;
      justify-content: space-between;

      button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
      }

      div {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    .likes-count {
      margin: 5px 0 0 0;
      font-size: 0.9rem;
    }
  }
  .caption {
    span:first-child {
      font-weight: bold;
      margin-right: 5px;
      line-height: 1.4;
    }
  }
  .expandedCaption {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .view-comments {
    margin: 0;
    color: gray;
    font-size: 0.85rem;

    &:hover {
      cursor: pointer;
    }
  }

  .timestamp {
    margin: 0;
    color: gray;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`;
