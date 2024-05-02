import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 15rem;
  flex-direction: column;

  & h1 {
    font-size: 3.2rem;
    letter-spacing: 2px;
  }
`;

export const Content = styled.div`
  margin-top: 30px;

  ul {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    gap: 20px;
    display: flex;
    flex-direction: column;
  }

  li {
    width: 100%;
    min-height: 90px;
  }
`;

export const Header = styled.div`
  height: 100%;
  background-color: rgb(45, 45, 45);
  justify-content: space-between;
  padding: 0 2rem;
  cursor: pointer;
  height: 90px;

  h3 {
    letter-spacing: 2px;
    font-weight: 500;
  }

  span {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 4px;
  line-height: 2.1;
  letter-spacing: 1px;
  background-color: rgb(45, 45, 45);
  overflow: hidden;
  max-height: 0;
  transition: all 500ms;
`;
