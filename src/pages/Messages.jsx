import { useState } from "react";
import styled from "styled-components";
import { initialConversations, suggestionsText } from "../data/directMessages";
import { CalendarHeart, Circle, Search } from "lucide-react";
import { getInitialNames } from "../uitilies/getInitialNmaes";
import Chat from "../componants/Chat";
import { useLockBodyScroll } from "../uitilies/useLockBodyScroll";

export default function ExpandableText() {
  const [value, setValue] = useState("");
  const [openChat, setOpenChat] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [chatMessages, setChatMessages] = useState(initialConversations);

  function onClose(id) {
    setOpenChat((prev) => !prev);
    setChatId(id);
  }
  const selectedChat = chatMessages.find((chat) => chat.id === chatId);
  useLockBodyScroll(openChat);

  return (
    <Container>
      {openChat && (
        <Chat
          onClose={onClose}
          data={selectedChat}
          suggestionsText={suggestionsText}
        />
      )}
      <SearchInputContaier>
        <div>
          <SearchInput
            type="search"
            placeholder="search messages..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {!value.trim() && (
            <SearchIcon>
              <Search color="#494454" size={22} />
            </SearchIcon>
          )}
        </div>
      </SearchInputContaier>
      <MessagesWrapper>
        {chatMessages.map((chat, index) => {
          const letterProfile = !chat.avatarUrl && getInitialNames(chat.name);
          return (
            <div key={chat.id}>
              <Message onClick={() => onClose(chat.id)}>
                {chat.isUnread && (
                  <UnReadStatusButton>
                    <Circle color="#6d3bd7" fill="#6d3bd7" size={12} />
                  </UnReadStatusButton>
                )}
                <ProfileImage>
                  {chat.isOnline && (
                    <OnlineStatusButton>
                      <Circle color="green" fill="green" size={10} />
                    </OnlineStatusButton>
                  )}
                  {chat.avatarUrl ? (
                    <Image src={chat.avatarUrl} alt={chat.lastMessage} />
                  ) : (
                    <NameAsProfilePic>{letterProfile}</NameAsProfilePic>
                  )}
                </ProfileImage>
                <Convo>
                  <NameAndTimeWrapper>
                    <Name>{chat.name}</Name>
                    <p className={chat.isUnread ? "active" : ""}>
                      {chat.timeString}
                    </p>
                  </NameAndTimeWrapper>
                  <Text className={chat.isUnread ? "active" : ""}>
                    {chat.lastMessage}
                  </Text>
                </Convo>
              </Message>
              {index < chatMessages.length - 1 && <hr key={chat.id} />}
            </div>
          );
        })}
      </MessagesWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
`;
const SearchInputContaier = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  div {
    width: 90%;
    position: relative;
    border-radius: 10px;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  padding-left: 30px;
  font-size: 1.02rem;
  outline: none;
  border: 1px solid var(--outline-variant);
  color: var(--text-secondary-color);
  background-color: #fffbff;
  &:focus {
    border-color: var(--primary);
    background-color: white;
  }
`;
const SearchIcon = styled.button`
  background: none;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 7px;
  top: 10px;
  z-index: 1;
`;
const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c4c7c9;
  border-bottom: 1px solid #c4c7c9;
  hr {
    border: none;
    height: 1px;
    background-color: #c4c7c9;
  }
`;
const Message = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 10px 1.4rem;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #faf8fd;
  }
`;
const ProfileImage = styled.div`
  width: fit-content;
  border-radius: 50%;
  position: relative;
`;
const Image = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
`;
const NameAsProfilePic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1px solid #c4c7c9;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: gray;
  color: white;
`;
const OnlineStatusButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const UnReadStatusButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
const Convo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  .active {
    color: var(--on-primary-fixed-variant);
  }
`;
const NameAndTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  p:last-child {
    margin-left: auto;
    justify-self: self-end;
  }
`;
const Name = styled.p`
  font-weight: bold;
`;
const Text = styled.p`
  color: var(--text-secondary-color);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
