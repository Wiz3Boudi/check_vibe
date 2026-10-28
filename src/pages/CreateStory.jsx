import { X, Files, Upload, Smartphone, Trash, RefreshCw } from "lucide-react";
import { useRef, useState } from "react";
import styled from "styled-components";

export default function CreateStory() {
  const [category, setCategory] = useState("feed");
  const [isUploaded, setUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [onFileError, setFileError] = useState(null);
  const [visualLiveUrl, setVisualLiveUrl] = useState(null);
  const [inputValues, setInputValues] = useState({
    location: "",
    caption: "",
  });
  const hiddenInputRef = useRef(null);

  function handleImageUrl(e) {
    setVisualLiveUrl(URL.createObjectURL(e));
  }
  const handleFile = (e) => {
    setFile(null);
    if (e.type.split("/")[0] != "image") {
      setUploaded(false);
      return setFileError("*PDF is not allowed Please provide an iamge");
    }
    handleImageUrl(e);
    setFile(e);
    setUploaded(true);
  };
  function handleRemoveFile(e) {
    e.stopPropagation();
    setFile(null);
    setUploaded(false);
  }
  function handleInputRef(e) {
    setFileError(null);
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click();
    }
  }
  function handleInputGroup({ id, value }) {
    setInputValues((prev) => {
      return { ...prev, [id]: value };
    });
  }

  return (
    <SoryWrapper>
      <Content>
        <Header>
          <Head>
            {`Create New `}
            <span>{category === "feed" ? "Feed Post" : "Vibe Story"}</span>
          </Head>
          <Close onClick={() => navigation.back()}>
            <X />
          </Close>
        </Header>
        <Categories>
          <Button
            className={category === "feed" ? "active" : ""}
            onClick={() => setCategory("feed")}
          >
            Feed Post
          </Button>
          <Button
            className={category === "story" ? "active" : ""}
            onClick={() => setCategory("story")}
          >
            24h Story
          </Button>
        </Categories>
        <Body>
          <FileWrapper>
            <FileHeader>
              {isUploaded && !onFileError ? (
                <FileStatusSelection>
                  <Smartphone size={12} /> <span>Device photo loaded</span>
                </FileStatusSelection>
              ) : onFileError ? (
                <FileStatusSelection style={{ color: "red" }}>
                  {onFileError}
                </FileStatusSelection>
              ) : (
                <FileTitle>Select Photo or Upload</FileTitle>
              )}
            </FileHeader>
            <FileBody onClick={handleInputRef} $isActive={file ? true : false}>
              {file && (
                <RemoveFileButton onClick={handleRemoveFile}>
                  <Trash />
                </RemoveFileButton>
              )}
              <input
                ref={hiddenInputRef}
                type="file"
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
              />
              <Main>
                <button>{file ? <Smartphone /> : <Upload />}</button>
                <Text>
                  <div>
                    <p>Choose from device </p>
                    <button>Phone/PC</button>
                  </div>
                  <p>
                    {file
                      ? file.name
                      : "Click to browse files or drag && drop photo here"}
                  </p>
                </Text>
              </Main>
              <BrowseFilesButton>
                {isUploaded ? <RefreshCw size={15} /> : <Files size={15} />}
                {isUploaded ? "Change" : "Browse files"}
              </BrowseFilesButton>
            </FileBody>
          </FileWrapper>
          {file && (
            <LiveImageWrapper>
              <Image src={visualLiveUrl} alt={file.name} loading="lazy" />
              <OverlayText> Live Visual</OverlayText>
            </LiveImageWrapper>
          )}
          <Label htmlFor="location"> Location </Label>
          <Input
            id="location"
            type="text"
            placeholder="Tokyo, Japan"
            value={inputValues.location}
            onChange={(e) =>
              handleInputGroup({
                id: e.currentTarget.id,
                value: e.target.value,
              })
            }
          />
          <Label htmlFor="caption"> CAPTION </Label>
          <Caption
            id="caption"
            type="text"
            placeholder="What is your vibe today? Express your mood..."
            value={inputValues.caption}
            onChange={(e) =>
              handleInputGroup({
                id: e.currentTarget.id,
                value: e.target.value,
              })
            }
          />
        </Body>
      </Content>
    </SoryWrapper>
  );
}

const SoryWrapper = styled.div`
  background-color: rgb(0, 0, 0, 0.7);
  padding: 2rem 0;
  position: fixed;
  z-index: 1004;
  inset: 0;
`;
const Content = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px 0;
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
`;
const Head = styled.h3`
  span {
    color: var(--primary);
  }
`;
const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 3px;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    border-bottom: 2px solid var(--primary);
    background-color: #f3f9fc;
    color: var(--primary);
  }
`;
const Button = styled.button`
  text-align: center;
  cursor: pointer;
  width: 50%;
  height: 60px;
  border-top: 1px solid #c4c7c9;
  border-bottom: 2px solid #c4c7c9;
  font-size: 1.02rem;
  font-weight: 600;
  background: none;
  color: #494454;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
  height: 64vh;
  overflow-y: auto;
  scrollbar-width: none;
`;
const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const FileHeader = styled.div`
  display: flex;
  justify-content: center;
`;
const FileTitle = styled.p`
  text-transform: uppercase;
  color: var(--text-muted);
  font-size: 0.8rem;
  padding: 5px;
`;
const FileStatusSelection = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  background-color: #f1eef7;
  padding: 5px;
  border-radius: 10px;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`;
const FileBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border: 2px solid
    ${(props) => (props.$isActive ? "var(--primary)" : "var(--text-muted)")};
  border-style: dashed;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  cursor: pointer;
  background-color: #f8fafc;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    gap: 2px;
    border-radius: 10px;
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
  & > div > button {
    background-color: ${(props) =>
      props.$isActive ? "var(--primary)" : "white"};
    border: 1px solid #e2dfe7;
    svg {
      color: ${(props) => (props.$isActive ? "white" : "var(--primary)")};
    }
  }
  &:hover {
    border-color: var(--primary);
    & > div > button {
      background-color: var(--primary);
      svg {
        color: white;
      }
    }
  }
`;
const RemoveFileButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 20px;
  &:hover {
    svg {
      color: red;
    }
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin: 10px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    line-break: anywhere;
    p {
      font-size: 1.2rem;
      color: #000000;
    }
    button {
      background-color: #e9e3f8;
      font-weight: 600;
      font-size: 0.7rem;
      color: var(--primary);
    }
  }
  & > p {
    font-size: 0.9rem;
    color: var(--text-secondary-color);
    line-break: anywhere;
  }
`;
const BrowseFilesButton = styled.button`
  width: fit-content;
  background-color: var(--primary);
  color: white;
  margin: auto;
`;
const Pragraph = styled.p`
  text-transform: uppercase;
  color: var(--text-secondary-color);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
const Label = styled.label`
  text-transform: uppercase;
`;
const Input = styled.input`
  outline: none;
  min-height: 35px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  color: var(--text-secondary-color);
  padding: 0 10px;
  font-size: 16px;
  &:focus {
    border: 2px solid var(--primary);
  }
`;
const LiveImageWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  border-radius: 10px;
`;
const OverlayText = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 10px;
`;
const Caption = styled.textarea`
  outline: none;
  min-height: 60px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  color: var(--text-secondary-color);
  padding: 0 10px;
  font-size: 16px;
  &:focus {
    border: 2px solid var(--primary);
  }
`;
const TagsWrapper = styled.div``;
const Publish = styled.button``;
