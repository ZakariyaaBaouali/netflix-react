import { Container, Content, Header, Main, Sidebar } from "./Dashboard.style";

const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        <Header>
          <img
            src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg"
            alt="header logo"
          />
          <h1>Zakaria baouali</h1>
        </Header>
        <Content>
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
          <div className="box">6</div>
          <div className="box">7</div>
          <div className="box">8</div>
          <div className="box">9</div>
        </Content>
      </Sidebar>
      <Main></Main>
    </Container>
  );
};

export { Dashboard };
