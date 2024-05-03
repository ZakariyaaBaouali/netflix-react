import { Menu, Sidebar } from "react-pro-sidebar";
import styled from "styled-components";

export const Container = styled.div`
  height: 99vh;
  justify-content: flex-start;
`;

export const Side = styled.aside`
  width: 20%;
  height: 100%;
  overflow: hidden;
  border-right: 2px solid gray;
`;

export const Main = styled.main`
  height: 100%;
  width: 80%;
  overflow: hidden;
`;

export const Header = styled.div`
  height: 15%;
  justify-content: space-between;
  padding: 0 8%;

  & img {
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  & h1 {
    text-transform: capitalize;
    font-size: 1.2rem;
  }
`;

export const Content = styled.div`
  height: calc(100% - 15%);

  & .css-1wvake5 {
    border: 0px;
  }
`;

export const Wrapper = styled(Sidebar)`
  height: 100%;
  overflow: hidden;

  & div {
    background-color: transparent;
  }
`;

export const List = styled(Menu)`
  height: 100%;

  & ul {
    height: 100%;
    padding: 20px 0;
  }

  & li {
    margin: 10px 0;
  }

  & .ps-menu-button:hover {
    background-color: transparent !important;
  }
`;
