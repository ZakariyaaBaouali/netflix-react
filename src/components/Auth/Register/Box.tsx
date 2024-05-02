import {
  Container,
  DeviceWrapper,
  MediaWrapper,
  MobileWrapper,
  TextWrapper,
  TvWrapper,
} from "./Box.style";

interface Props {
  isTextFirst: boolean;
  title: string;
  description: string;
  imagePath?: string;
  videoPath?: string;
  type: string;
  card?: Card;
}

interface Card {
  title: string;
  imagePath: string;
  animeIconPath: string;
}

const Box = ({
  title,
  description,
  imagePath,
  videoPath,
  type,
  card,
  isTextFirst,
}: Props) => {
  return (
    <Container isTextFirst={isTextFirst}>
      <TextWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextWrapper>
      <MediaWrapper>
        {type === "tv" ? (
          <TvWrapper>
            <img src={imagePath} alt={title} />
            <div>
              <video src={videoPath} muted autoPlay loop></video>
            </div>
          </TvWrapper>
        ) : type === "mobile" ? (
          <MobileWrapper>
            <img src={imagePath} alt={title} />
            <div>
              <img src={card?.imagePath} alt={card?.title} />
              <div>
                <h1>{card?.title}</h1>
                <span>Downloading...</span>
              </div>
              <img src={card?.animeIconPath} alt={card?.title} />
            </div>
          </MobileWrapper>
        ) : type === "device" ? (
          <DeviceWrapper>
            <img src={imagePath} alt={title} />
            <div>
              <video src={videoPath} muted autoPlay loop></video>
            </div>
          </DeviceWrapper>
        ) : (
          <img src={imagePath} alt={title} />
        )}
      </MediaWrapper>
    </Container>
  );
};

export default Box;
