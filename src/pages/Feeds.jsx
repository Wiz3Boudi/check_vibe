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
  Plus,
  MoreHorizontal,
} from "lucide-react";

import { useReducer, useState, useMemo } from "react";
import { updatePostsReducer } from "../reducer/feeds";
import MoreHorizontalOptions from "../componants/MoreHorizontalOptions";
import ViewProfile from "../componants/ViewProfile";

export default function Feeds() {
  const [posts, dispatch] = useReducer(updatePostsReducer, postsData);
  const [stories, setStories] = useState(StoriesData);
  const [showProfile, setshowProfile] = useState(false);
  const [activeProfileId, setActiveProfileId] = useState(null);

  function viewProfileHandClick(id) {
    setActiveProfileId(id);
    showProfileToggle(true);
  }
  function showProfileToggle(value) {
    setshowProfile(value);
  }
  const activeProfile = useMemo(() => {
    const profile = posts.find((p) => p.id === activeProfileId);
    return profile;
  }, [activeProfileId]);

  const handleStoryClick = (id) => {
    setStories((prev) =>
      prev.map((story) =>
        story.id === id ? { ...story, hasUnseenStory: true } : story,
      ),
    );
  };
  const sortedStories = useMemo(() => {
    if (!stories) return [];
    return [...stories].sort((a, b) => {
      if (a.id === "story-alex") return -1;
      if (b.id === "story-alex") return 1;
      return b.hasUnseenStory - a.hasUnseenStory;
    });
  }, [stories]);

  return (
    <Container>
      <StoriesBar>
        {sortedStories.map((story) => (
          <StoryItem key={story.id} onClick={() => handleStoryClick(story.id)}>
            <AvatarRing
              $hasUnseen={story.hasUnseenStory}
              className={story.id === "currentUser" ? "currentUser" : ""}
            >
              <div>
                <img
                  src={story.avatarUrl}
                  alt={story.username || "User story"}
                />
              </div>
              {story.id === "currentUser" && (
                <button aria-label="add">
                  <Plus size={20} />
                </button>
              )}
            </AvatarRing>
            <StoryUsername>
              {story.id === "currentUser" ? "Add" : story.username}
            </StoryUsername>
          </StoryItem>
        ))}
      </StoriesBar>
      {showProfile && (
        <ViewProfile
          data={activeProfile}
          showProfileToggle={showProfileToggle}
          showProfile={showProfile}
        />
      )}

      <FeedList>
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            dispatch={dispatch}
            idHandClick={viewProfileHandClick}
            showProfile={showProfile}
          />
        ))}
      </FeedList>
    </Container>
  );
}

function PostCard({ post, dispatch, idHandClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const images = post?.images || [];
  const showPrev = currentIndex > 0;
  const showNext = currentIndex < images.length - 1;

  const handleLike = () => {
    dispatch({
      type: post.isLiked ? "decrease" : "increase",
      id: post.id,
    });
  };

  const handleBookmark = () => {
    dispatch({ type: "save", id: post.id });
  };

  function isOpenFunction() {
    setIsOpen((prev) => !prev);
  }

  return (
    <PostArticle>
      <PostHeader>
        <UserInfo>
          <AuthorAvatar
            src={post.avatarUrl}
            alt={post.username}
            onClick={() => idHandClick(post.id)}
          />
          <AuthorMeta>
            <AuthorName>{post.username}</AuthorName>
            {post.location && <Location>{post.location}</Location>}
          </AuthorMeta>
        </UserInfo>
        <MoreHorizontalContainer>
          <button className="button" onClick={isOpenFunction}>
            <MoreHorizontal />
          </button>
          {isOpen && <MoreHorizontalOptions handleClick={isOpenFunction} />}
        </MoreHorizontalContainer>
      </PostHeader>
      {images.length > 0 && (
        <MediaContainer>
          <MediaImage
            src={images[currentIndex]}
            alt={`Post media ${currentIndex + 1}`}
          />

          {showPrev && (
            <NavButton
              type="button"
              $position="left"
              onClick={() => setCurrentIndex((prev) => prev - 1)}
            >
              <ChevronLeft size={20} />
            </NavButton>
          )}

          {showNext && (
            <NavButton
              type="button"
              $position="right"
              onClick={() => setCurrentIndex((prev) => prev + 1)}
            >
              <ChevronRight size={20} />
            </NavButton>
          )}

          {images.length > 1 && (
            <PaginationDots>
              {images.map((_, idx) => (
                <Dot
                  key={idx}
                  $active={idx === currentIndex}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </PaginationDots>
          )}
        </MediaContainer>
      )}

      <PostContent>
        <ActionBar>
          <LeftActions>
            <IconButton
              type="button"
              aria-label="Like post"
              onClick={handleLike}
            >
              <Heart
                fill={post.isLiked ? "#ed4956" : "none"}
                color={post.isLiked ? "#ed4956" : "currentColor"}
              />
            </IconButton>
            <IconButton type="button" aria-label="Comment">
              <MessageCircle />
            </IconButton>
            <IconButton type="button" aria-label="Share">
              <Send />
            </IconButton>
          </LeftActions>

          <IconButton
            type="button"
            aria-label="Bookmark"
            onClick={handleBookmark}
          >
            <Bookmark
              fill={post.isSaved ? "currentColor" : "none"}
              color="currentColor"
            />
          </IconButton>
        </ActionBar>

        <LikesCount>{post.likesCount?.toLocaleString()} Likes</LikesCount>

        <Caption $isTruncated={!isExpanded}>
          <Username>{post.username}</Username>
          <CaptionText onClick={() => setIsExpanded((prev) => !prev)}>
            {post.caption}
          </CaptionText>
        </Caption>

        {post.commentsCount > 0 && (
          <CommentsLink>View all {post.commentsCount} comments</CommentsLink>
        )}

        <Timestamp>{post.timestamp}</Timestamp>
      </PostContent>
    </PostArticle>
  );
}

const Container = styled.div`
  background-color: var(--secondary, #fafafa);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const StoriesBar = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 12px;
  padding: 12px;
  background-color: #ffffff;
  overflow-x: auto;
  border-bottom: 1px solid #e0e0e0;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .currentUser {
    position: relative;
    button {
      display: flex;
      algin-items: center;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      background-color: var(--primary);
      cursor: pointer;
      svg {
        color: white;
      }
    }
  }
`;
const StoryItem = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const AvatarRing = styled.div`
  padding: 2px;
  border: 2px solid
    ${(props) => (props.$hasUnseen ? "#c7c7c7" : "var(--primary, #e1306c)")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: fit-content;
    border-radius: 50%;
    display: flex;
    align-items: center;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const StoryUsername = styled.span`
  max-width: 64px;
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FeedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
`;

const PostArticle = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const MoreHorizontalContainer = styled.div`
  position: relative;
  flex: 0.3;
  display: flex;
  justify-content: right;
  .button {
    border-radius: 50%;
    display: flex;
    align-items: ceneter;
    padding: 3px;
    cursor: pointer;
    background: none;
    &:first-child:hover {
      background: revert;
    }
  }
`;
const AuthorAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
`;

const Location = styled.span`
  font-size: 0.75rem;
  color: #737373;
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #000000;
`;

const MediaImage = styled.img`
  width: 100%;
  max-height: 550px;
  object-fit: cover;
  display: block;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$position === "left" ? "left: 10px;" : "right: 10px;")}
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

const PaginationDots = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
`;

const Dot = styled.button`
  width: 6px;
  height: 6px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "#0095f6" : "rgba(255, 255, 255, 0.6)"};
  cursor: pointer;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.1s ease;
  }

  &:active svg {
    transform: scale(1.2);
  }
`;

const LikesCount = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`;

const Caption = styled.div`
  font-size: 0.875rem;
  line-height: 1.4;

  ${(props) =>
    props.$isTruncated &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

const Username = styled.span`
  font-weight: 600;
  margin-right: 6px;
`;

const CaptionText = styled.span`
  cursor: pointer;
`;

const CommentsLink = styled.span`
  font-size: 0.85rem;
  color: #737373;
  cursor: pointer;
`;

const Timestamp = styled.span`
  font-size: 0.7rem;
  color: #8e8e8e;
  text-transform: uppercase;
`;
