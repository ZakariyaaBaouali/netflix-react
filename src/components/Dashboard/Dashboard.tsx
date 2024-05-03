import { MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Container,
  Content,
  Header,
  List,
  Main,
  Side,
  Wrapper,
} from "./Dashboard.style";

const Dashboard = () => {
  return (
    <Container>
      <Side>
        <Header>
          <img
            src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg"
            alt="header logo"
          />
          <h1>Zakaria baouali</h1>
        </Header>
        <Content>
          <Wrapper>
            <List>
              <SubMenu label="Assets">
                <MenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("images");
                  }}
                >
                  Images
                </MenuItem>
                <MenuItem> Videos </MenuItem>
              </SubMenu>
              <MenuItem> Accounts </MenuItem>
              <MenuItem> Movies </MenuItem>
              <MenuItem> Tv Shows </MenuItem>
            </List>
          </Wrapper>
        </Content>
      </Side>
      <Main></Main>
    </Container>
  );
};

export { Dashboard };
