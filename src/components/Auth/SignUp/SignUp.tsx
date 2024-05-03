import { useRoutes } from "react-router-dom";
import { Container, Header, Wrapper } from "./SignUp.style";
import Setup from "./Setup";
import Password from "./Password";
import logo from "../../../../public/logo.png";
import Plan from "./Plan";

const SignUp = () => {
  const element = useRoutes([
    { path: "registration", element: <Setup /> },
    { path: "regform", element: <Password /> },
    {
      path: "planform",
      element: <Plan />,
    },
  ]);

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <button>sign in</button>
      </Header>
      <Wrapper>{element}</Wrapper>
    </Container>
  );
};

export { SignUp };
