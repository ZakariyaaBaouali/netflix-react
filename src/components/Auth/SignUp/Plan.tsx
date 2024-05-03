import styled from "styled-components";
import { PlansData } from "../../../mockData";
import { FaCheckCircle } from "react-icons/fa";
import { useRef, useState } from "react";

const Plan = () => {
  const planRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const showBox = [false, false, false];
  const [plan, setPlan] = useState(0);

  const handlePlanClick = (
    element: HTMLDivElement | null,
    index: number,
    icon: HTMLSpanElement | null
  ) => {
    setPlan(index);
    planRefs.current.map((preElement) => {
      if (preElement) {
        preElement.style.transform = "scale(1)";
        preElement.style.boxShadow = "none";
      }
    });

    iconRefs.current.map((preElement) => {
      if (preElement) {
        preElement.style.opacity = "0";
      }
    });

    if (element && icon) {
      if (showBox[index] && iconRefs.current[index]) {
        element.style.transform = "scale(1)";
        element.style.boxShadow = "none";
        icon.style.opacity = "0";
        showBox[index] = false;
      } else {
        element.style.transform = "scale(1.03)";
        element.style.boxShadow = "1px 1px 2px gray, -1px -1px 2px gray";
        icon.style.opacity = "1";
        showBox[index] = true;
      }
    }
  };

  return (
    <Container>
      <Content>
        <span>STEP 2 OF 3</span>
        <h1>Choose the plan that’s right for you</h1>
        <Wrapper>
          {PlansData &&
            PlansData.map((plan, index) => {
              return (
                <PlanElement
                  key={index}
                  ref={(element) => (planRefs.current[index] = element)}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePlanClick(
                      planRefs.current[index],
                      index,
                      iconRefs.current[index]
                    );
                  }}
                >
                  <PlanHeader>
                    <h2>{plan.title}</h2>
                    <span>{plan.subTitle}</span>
                    <span
                      className="icon"
                      ref={(element) => (iconRefs.current[index] = element)}
                    >
                      <FaCheckCircle />
                    </span>
                  </PlanHeader>
                  <Box>
                    <h2>Monthly price</h2>
                    <span>DOLLAR {plan.price}</span>
                  </Box>
                  <Box>
                    <h2>Video and sound quality</h2>
                    <span>{plan.qaulity}</span>
                  </Box>
                  <Box>
                    <h2>Resolution</h2>
                    <span>{plan.resoluation}</span>
                  </Box>
                </PlanElement>
              );
            })}
        </Wrapper>
        <BtnWrapper>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(plan);
            }}
          >
            next
          </button>
        </BtnWrapper>
      </Content>
    </Container>
  );
};

export default Plan;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 15%;
`;

const Content = styled.div`
  flex-direction: column;
  height: 100%;
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
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.div`
  flex: 0.85;
  justify-content: space-between;
  gap: 0 30px;
`;

const BtnWrapper = styled.div`
  height: 60px;
  margin-top: 10px;

  & button {
    width: 40%;
    height: 100%;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
`;

const Box = styled.div`
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid gray;
  padding-bottom: 4px;

  & h2 {
    color: gray;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  & span {
    color: #5d5a5a;
  }
`;

const PlanElement = styled.div`
  height: 100%;
  border-radius: 8px;
  padding: 10px 12px;
  cursor: pointer;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  border: 1px solid gray;
  transition: all 300ms;

  & ${Box}:last-child {
    border-bottom: 0px;
  }
`;

const PlanHeader = styled.div`
  border-radius: 8px;
  padding: 5px 10px;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  background-image: linear-gradient(125deg, #2d6df7, #f72d5f);
  position: relative;

  & h2 {
    text-transform: capitalize;
  }

  & .icon {
    position: absolute;
    bottom: 0;
    right: 10px;
    opacity: 0;
  }
`;
