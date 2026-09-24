import React, { useState } from "react";
import styled from "styled-components";
import { initialConversations } from "../data/directMessages";

export default function ExpandableText() {
  const [value, setValue] = useState("");
  return (
    <Container>
      <SearchInputContaier>
        <SearchInput
          type="search"
          placeholder="search messages..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </SearchInputContaier>
      <MessagesWrapper>
        {initialConversations.map((chat) => {
          const fullName = !chat.avatarUrl && chat.name.split(" ");
          return (
            <Message key={chat.id}>
              <ProfileImage>
                {chat.avatarUrl ? (
                  <Image src={chat.avatarUrl} alt={chat.lastMessage} />
                ) : (
                  <div></div>
                )}
              </ProfileImage>
              <Convo>
                <NameAndTimeWrapper>
                  <Name>{chat.name}</Name>
                  <Time>{chat.timeString}</Time>
                </NameAndTimeWrapper>
                <Text> {chat.lastMessage} </Text>
              </Convo>
            </Message>
          );
        })}
      </MessagesWrapper>
    </Container>
  );
}

const Container = styled.div``;
const SearchInputContaier = styled.div``;
const SearchInput = styled.input``;
const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Message = styled.div`
  display: flex;
`;
const ProfileImage = styled.div``;
const Image = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
`;
const IconButton = styled.button``;
const Convo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const NameAndTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.p``;
const Time = styled.p``;
const Text = styled.p``;
