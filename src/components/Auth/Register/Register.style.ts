import styled from "styled-components";

export const Container = styled.div`
  height: 99vh;
  position: relative;
  margin-bottom: 400px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 8px;
    background-color: #8d8c8c;
    bottom: -8px;
    left: 0;
    filter: brightness(0.5);
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

export const BackgroundGrade = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.75), transparent),
    linear-gradient(to left, rgba(0, 0, 0, 0.75), transparent);
  mix-blend-mode: multiply;
`;

export const Header = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 80px;

  & img {
    width: 150px;
    object-fit: cover;
  }

  & button {
    height: 40px;
    font-weight: 600;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: calc(100% - 12vh);
  padding: 5% 20%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 25px;

  & h1 {
    font-size: 3.1rem;
  }

  & h4 {
    font-size: 2.2rem;
    font-weight: 400;
  }

  & p {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

export const Form = styled.form`
  width: 76%;
  height: fit-content;
  justify-content: space-between;

  & input {
    flex: 0.74;
  }

  & button {
    height: 60px;
    flex: 0.23;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 1px;
    justify-content: space-between;
    padding: 0 10px;
  }
`;
