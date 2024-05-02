import styled from "styled-components";

interface Props {
  isTextFirst: boolean;
}

export const Container = styled.div<Props>`
  height: 75vh;
  position: relative;
  background-color: #000;
  flex-direction: ${(props) => (props.isTextFirst ? "row" : "row-reverse")};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    background-color: #8d8c8c;
    bottom: 0;
    left: 0;
    filter: brightness(0.4);
  }
`;

export const TextWrapper = styled.div`
  height: 100%;
  flex-direction: column;
  padding: 0 10%;
  align-items: flex-start;
  flex: 0.5;

  & h1 {
    font-size: 3rem;
    line-height: 1.4;
    letter-spacing: 2px;
  }

  & p {
    font-size: 1.3rem;
    letter-spacing: 2px;
    margin-top: 15px;
    font-weight: 600;
  }
`;

export const MediaWrapper = styled.div`
  height: 100%;
  padding: 4%;
  flex: 0.5;
`;

export const TvWrapper = styled.div`
  height: 100%;
  position: relative;

  & img {
    position: absolute;
    z-index: 2;
  }

  & div {
    position: absolute;
    top: 20.5%;
    left: 13%;
    height: calc(100% - 44.6%);
    width: calc(100% - 26.9%);

    & video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const MobileWrapper = styled.div`
  height: 100%;
  position: relative;

  & > div {
    position: absolute;
    left: 20%;
    height: 90px;
    top: 70%;
    border: 1px solid red;
    width: 60%;
    border: 2px solid gray;
    border-radius: 6px;
    background-color: #000;
    justify-content: space-between;
    padding: 5px;
    overflow: hidden;

    & div {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 20px;
    }

    & h1 {
      font-size: 1rem;
      text-transform: capitalize;
    }

    & span {
      color: blue;
      letter-spacing: 1.1px;
    }

    & img:first-child {
      width: 100px;
    }

    & img:last-child {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
  }
`;

export const DeviceWrapper = styled(TvWrapper)`
  & div {
    left: 19%;
    top: 10%;
    width: calc(100% - 39.5%);
    height: calc(100% - 57.8%);
  }
`;
