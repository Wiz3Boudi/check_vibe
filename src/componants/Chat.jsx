import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Chat({ onClose, data, suggestionsText }) {
  const [value, setValue] = useState("");
  return (
    <ChatWrapper>
      <ChatHeader onClose={onClose} data={data} />
      <Body>
        <Encrypted> Direct Vibe Sync • Encrypted</Encrypted>
        {data.messages.map((text) => {
          return text.isMe ? (
            <SentWrapper key={text.id}>
              <SentText>{text.text}</SentText>
              <Timestap>{text.timestamp}</Timestap>
            </SentWrapper>
          ) : (
            <RecivedWrapper key={text.id}>
              <RecivedText>{text.text}</RecivedText>
              <Timestap>{text.timestamp}</Timestap>
            </RecivedWrapper>
          );
        })}
      </Body>
      <Footer>
        <Suggestions>
          {suggestionsText.map((word) => (
            <Button key={word}> {word} </Button>
          ))}
        </Suggestions>
        <Form>
          <Input
            type="text"
            placeholder="Type a message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Submit>
            <Send />
          </Submit>
        </Form>
      </Footer>
    </ChatWrapper>
  );
}

const ChatWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1005;
  background-color: #e6eaee;
  display: flex;
  flex-direction: column;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  padding-top: 10px;
  overflow-y: auto;
  scrollbar-width: none;
`;
const Encrypted = styled.button`
  width: fit-content;
  border: 1px solid #cbc3d7;
  color: var(--text-secondary-color);
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.7rem;
`;
const SentWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const SentText = styled.p`
  max-width: 70%;
  background-color: var(--primary);
  color: white;
  padding: 10px;
  border-radius: 20px;
  border-top-right-radius: 0;
  font-size: 0.9rem;
  font-weight: 400;
`;
const RecivedWrapper = styled.div`
  margin-right: auto;
`;
const RecivedText = styled.p`
  max-width: 70%;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  border-top-left-radius: 0;
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  font-weight: 400;
`;
const Timestap = styled.small`
  color: var(--text-secondary-color);
`;
const Footer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0;
  margin-top: auto;
`;
const Suggestions = styled.div`
  display: flex;
  aling-items: center;
  justify-content: cneter;
  gap: 5px;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-scrollbar: none;
`;
const Button = styled.button`
  border-radius: 20px;
  padding: 5px;
  white-space: nowrap;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Input = styled.input`
  width: 78%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #cbc3d7;
  padding-left: 10px;
  outline: none;
  &:focus {
    border: 2px solid var(--primary);
  }
`;
const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  svg {
    color: var(--primary);
  }
`;
