import styled from "styled-components";
import { Phone, Video, X } from "lucide-react";
import { getInitialNames } from "../uitilies/getInitialNmaes";

export default function ChatHeader({ onClose, data }) {
  return (
    <Header>
      <CloseButton onClick={onClose}>
        <X />
      </CloseButton>
      <UserInfo>
        {data.avatarUrl ? (
          <Image src={data.avatarUrl} alt={data.avatarUrl} loading="lazy" />
        ) : (
          <ImageRing>{getInitialNames(data.name)}</ImageRing>
        )}
        <HeaderSection>
          <NameWrapper>
            <Name> {data.name}</Name>
            {data.isOnline && <Status> Online </Status>}
          </NameWrapper>
          <UserName> {data.handle} </UserName>
        </HeaderSection>
      </UserInfo>
      <ContantWrapper>
        <Button>
          <Phone size={20} />
        </Button>
        <Button>
          <Video size={20} />
        </Button>
      </ContantWrapper>
    </Header>
  );
}

const Header = styled.div`
  display: grid;
  grid-template-columns: 15% 65% 20%;
  align-items: center;
  padding: 1rem 10px;
  background-color: white;
`;
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 50%;
  padding: 2px;
  background: none;
  cursor: pointer;
  svg {
    color: var(--text-secondary-color);
    &:hover {
      color: initial;
    }
  }
`;
const UserInfo = styled.div`
  display: flex;
  gap: 10px;
`;
const Image = styled.img`
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const ImageRing = styled.div`
  width: 40px;
  aspect-ratio: 1/1;
  border: 1px solid var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: azure;
  cursor: pointer;
`;
const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Status = styled.button`
  border-radius: 20px;
  padding: 3px 7px;
  color: green;
  font-weight: 1.1rem;
`;
const Name = styled.h4`
  curosr: pointer;
`;
const UserName = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary-color);
`;
const ContantWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: cneter;
`;
const Button = styled.button`
  width: fit-content;
  background: none;
  cursor: pointer;
`;
