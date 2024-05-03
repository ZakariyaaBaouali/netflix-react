import styled from "styled-components";
import logo from "../../../../public/auth/password.png";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/signup/regform");
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="password" />
        <span>step 1 of 3</span>
        <h1>Finish setting up your account</h1>
        <p>
          Netflix is personalized for you. Create a password to watch on any
          device at any time.
        </p>
        <button onClick={handleRegisterClick}>next</button>
      </Content>
    </Container>
  );
};

export default Setup;

const Container = styled.div`
  width: 100%;
  height: 100%;
  //justify-content: flex-start;
`;

const Content = styled.div`
  flex-direction: column;
  //border: 1px solid red;
  height: calc(100% - 18% * 2);
  width: calc(100% - 36% * 2);
  gap: 10px;

  & img {
    height: 50px;
    width: 60%;
  }

  & span {
    text-transform: uppercase;
    font-weight: 600;
  }

  & h1 {
    color: #000;
    text-align: center;
    line-height: 1.5;
  }

  & p {
    color: #000;
    text-align: center;
    font-size: 1.1rem;
    padding: 0 6%;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 1.4;
  }

  & button {
    width: 90%;
    height: 70px;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
`;
