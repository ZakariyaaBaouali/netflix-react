import { FaArrowRight } from "react-icons/fa";
import {
  BackgroundGrade,
  BackgroundImage,
  Banner,
  Container,
  Content,
  Form,
  Header,
  Wrapper,
} from "./Register.style";
import { RegisterData } from "../../../mockData";
import Box from "./Box";

const Register = () => {
  return (
    <Container>
      <Banner>
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
      </Banner>
      <Box
        title={RegisterData.tv.title}
        description={RegisterData.tv.description}
        imagePath={RegisterData.tv.imagePath}
        videoPath={RegisterData.tv.videoPath}
        type="tv"
        isTextFirst={false}
      ></Box>
      <Box
        title={RegisterData.mobile.title}
        description={RegisterData.mobile.description}
        imagePath={RegisterData.mobile.imagePath}
        card={RegisterData.mobile.card}
        type="mobile"
        isTextFirst={true}
      ></Box>
      <Box
        title={RegisterData.device.title}
        description={RegisterData.device.description}
        imagePath={RegisterData.device.imagePath}
        videoPath={RegisterData.device.videoPath}
        type="device"
        isTextFirst={false}
      ></Box>
      <Box
        title={RegisterData.kids.title}
        description={RegisterData.kids.description}
        imagePath={RegisterData.kids.imagePath}
        type="kids"
        isTextFirst={true}
      ></Box>
    </Container>
  );
};

export { Register };
