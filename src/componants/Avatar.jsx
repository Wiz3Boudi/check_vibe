import styled from "styled-components";
import { profile } from "../data/profile";
import { Plus } from "lucide-react";

export default function Avatar({ Icon }) {
  return (
    <AvatarCustom>
      <div>
        <div>
          <img src={profile?.avatarURL} alt="avatar" />
        </div>
        <button>{Icon ? <Icon /> : <Plus size={25} />}</button>
      </div>
    </AvatarCustom>
  );
}
const AvatarCustom = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border-radius: 50%;
  }
  & > div {
    position: relative;
  }
  & > div div {
    background-color: var(--primary);
    padding: 2px;
  }
  button {
    position: absolute;
    right: 0;
    bottom: 0;
    display:flex
    justify-content: center;
    align-items: center;
    background: none;
    svg {
      background-color: var(--primary);
      color: white;
      border: 2px solid white;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
