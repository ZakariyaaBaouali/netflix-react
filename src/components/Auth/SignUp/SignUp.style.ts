import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  border: 1px solid #fff;
  color: #000;
  position: relative;
`;

export const Header = styled.nav`
  height: 12vh;
  //border: 1px solid #000;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 4rem;

  & img {
    width: 200px;
  }

  & button {
    height: 60px;
    background-color: transparent;
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Wrapper = styled.div`
  height: calc(100% - 12vh);
  //border: 1px solid red;
  position: absolute;
  bottom: 0;
  left: 0;
  color: #000;
`;
