import styled from "styled-components";

export const Container = styled.div`
  height: 99vh;
  border: 1px solid #fff;
  justify-content: flex-start;
`;

export const Sidebar = styled.aside`
  width: 20%;
  height: 100%;
  border: 2px solid #fff;
  overflow: hidden;
`;

export const Main = styled.main`
  height: 100%;
  width: 80%;
  border: 2px solid yellow;
  overflow: hidden;
`;

export const Header = styled.div`
  height: 15%;
  border: 1px solid red;
  justify-content: space-between;
  padding: 0 5%;

  & img {
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  & h1 {
    text-transform: capitalize;
  }
`;

export const Content = styled.div`
  min-height: calc(100% - 15%);
  overflow-y: scroll;
  flex-direction: column;

  .box {
    height: 100px;
    border: 1px solid #fff;
    background-color: #fff;
    margin-bottom: 10px;
    color: #000;
  }
`;
