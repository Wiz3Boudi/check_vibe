import { Send } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

export default function CommentsFooter({ username, URL }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Footer onSubmit={handleSubmit}>
      <Avatar src={URL} alt={username} />
      <Input
        type="text"
        placeholder={`Add a comment as ${username}`}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button disabled={!value.trim()} type="submit" aria-label="submit">
        <Send />
      </Button>
    </Footer>
  );
}

const Footer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 50%;
`;
const Input = styled.input`
  flex: 1;
  height: 37px;
  border-radius: 20px;
  color: #0f172a;
  border: 2px solid #c5cbd1;
  backround-color: #f8fafc;
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  &:focus {
    border-color: var(--primary);
  }
`;
const Button = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: cneter;
  padding: 10px;
  cursor: pointer;
  background-color: #ae89f3;
  svg {
    color: white;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
