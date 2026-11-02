import { Heart } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import { convertTime } from "../uitilies/converTimeToLocal";

export default function CommentsBody({ comments, dispatch, postId }) {
  const [isExpanded, setExpanded] = useState(true);
  return (
    <Main>
      {comments.map((item, index) => {
        const timestamp = convertTime(item.timestamp);
        return (
          <Comment key={index}>
            <AvatarImage
              src={item.avatarUrl}
              alt={item.avatarUrl}
              aria-label="avatar image"
            />
            <Body>
              <BodyHaeder>
                <Name> {item.username} </Name>
                <TimeStamp> {timestamp} </TimeStamp>
              </BodyHaeder>
              <Text
                $isExpanded={isExpanded}
                onClick={() => setExpanded((prev) => !prev)}
              >
                {item.text}
              </Text>
            </Body>
            <Reaction>
              <Button
                onClick={() =>
                  dispatch({
                    type: "COMMENT_LIKES",
                    postId: postId,
                    commentId: item.id,
                  })
                }
              >
                <Heart
                  fill={item.isLiked ? "#6b38d4" : "white"}
                  color={item.isLiked ? "#6b38d4" : "#64748b"}
                />
              </Button>
              <Likes> {item.likesCount || ""} </Likes>
            </Reaction>
          </Comment>
        );
      })}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  max-height: 63%;
  overflow: auto;
  @media (max-width: 768px) {
    scrollbar-width: none;
  }
`;
const Comment = styled.div`
  display: flex;
  gap: 10px;
`;
const AvatarImage = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
  background-color: var(--primary);
  padding: 1px;
`;
const Body = styled.div`
  margin-right: auto;
  align-self: start;
  flex: 1;
`;
const BodyHaeder = styled.div`
  display: flex;
  gap: 6px;
`;
const Name = styled.h4``;
const TimeStamp = styled.span`
  color: var(--text-muted);
`;
const Text = styled.p`
  color: var(--text-secondary-color);
  cursor: pointer;
  ${(props) =>
    props?.$isExpanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;
const Reaction = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background: none;
  display: flex;
  width: fit-content;
  cursor: pointer;
  svg {
    color: var(--text-muted);
  }
`;
const Likes = styled.small`
  align-self: center;
`;
