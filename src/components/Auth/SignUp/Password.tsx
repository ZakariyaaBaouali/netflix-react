import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Password = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/signup/planform");
  };

  return (
    <Container>
      <Content>
        <span>STEP 1 OF 3</span>
        <h1>Create a password to start your membership</h1>
        <p>Just a few more steps and you're done! We hate paperwork, too.</p>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Add a password" required />
          <button onClick={handleRegisterClick}>next</button>
        </form>
      </Content>
    </Container>
  );
};

export default Password;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  flex-direction: column;
  //border: 1px solid red;
  height: calc(100% - 16% * 2);
  width: calc(100% - 36% * 2);
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;

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
    line-height: 1.5;
    font-size: 1.9rem;
  }

  & p {
    color: #000;
    font-size: 1.1rem;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 1.4;
  }

  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & input {
      width: 100%;
      background-color: transparent;
      border: 1px solid #000;
      color: #000;
    }

    & button {
      width: 100%;
      height: 60px;
      font-size: 1.5rem;
      letter-spacing: 2px;
    }
  }
`;
