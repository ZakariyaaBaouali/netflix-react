import { FaArrowRight } from "react-icons/fa";
import {
  BackgroundGrade,
  BackgroundImage,
  Container,
  Content,
  Form,
  Header,
  Wrapper,
} from "./Register.style";

const Register = () => {
  //make dynamic data
  const RegisterData = {
    content: {
      title: "Unlimited Movies, TV Shows, And More",
      subTitle: "Watch Anywhere. Cancel Anytime.",
      description:
        "Ready To Watch? Enter Your Email To Create Or Restart Your Membership.",
    },
  };

  return (
    <Container>
      <BackgroundImage src="auth/login-background.jpg" />
      <BackgroundGrade />
      <Header>
        <img src="logo.png" alt="" />
        <button>sign in</button>
      </Header>
      <Wrapper>
        <Content>
          <h1>{RegisterData.content.title}</h1>
          <h4>{RegisterData.content.subTitle}</h4>
          <p>{RegisterData.content.description}</p>
          <Form>
            <input type="email" placeholder="Email address" required />
            <button>
              get started <FaArrowRight />
            </button>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export { Register };
