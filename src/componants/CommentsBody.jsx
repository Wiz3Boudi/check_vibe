import { Columns, Heart } from "lucide-react";
import styled from "styled-components";

export default function CommentsBody({ comments, dispatch, postId }) {
  return (
    <Main>
      {comments.map((item, index) => (
        <Comment key={index}>
          <AvatarImage
            src={item.avatarUrl}
            alt={item.avatarUrl}
            aria-label="avatar image"
          />
          <Body>
            <BodyHaeder>
              <Name> {item.username} </Name>
              <TimeStamp> {item.timestamp} </TimeStamp>
            </BodyHaeder>
            <Text> {item.text} </Text>
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
      ))}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  height: 63%;
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
