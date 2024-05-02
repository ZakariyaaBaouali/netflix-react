import { useRef, useState } from "react";
import { QuestionsData } from "../../../mockData";
import { Container, Content, Header, Wrapper } from "./Qs.style";
import { FiPlus, FiX } from "react-icons/fi";

const Qs = () => {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showBox, setShowBox] = useState<boolean[]>([false]);

  const handleHeaderClick = (element: HTMLDivElement | null, index: number) => {
    wrapperRefs.current.map((ele) => {
      if (ele) {
        ele.style.maxHeight = "0";
      }
    });
    if (element) {
      console.log(showBox[index]);
      if (showBox[index]) {
        element.style.maxHeight = "0";
        element.style.padding = "0";
        setShowBox((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = !newValues[index];
          return newValues;
        });
      } else {
        element.style.maxHeight = "600px";
        element.style.padding = "20px 2rem";
        setShowBox((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = !newValues[index];
          return newValues;
        });
      }
    }
  };

  return (
    <Container>
      <h1>Frequently Asked Questions</h1>
      <Content>
        <ul>
          {QuestionsData &&
            QuestionsData.map((qs, index) => {
              return (
                <li key={index}>
                  <Header
                    onClick={(e) => {
                      e.preventDefault();
                      handleHeaderClick(wrapperRefs.current[index], index);
                    }}
                  >
                    <h3>{qs.title}</h3>
                    <span>{showBox[index] ? <FiX /> : <FiPlus />}</span>
                  </Header>
                  <Wrapper
                    ref={(element) => (wrapperRefs.current[index] = element)}
                  >
                    {qs.body}
                  </Wrapper>
                </li>
              );
            })}
        </ul>
      </Content>
    </Container>
  );
};

export default Qs;
