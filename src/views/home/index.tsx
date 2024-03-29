import { motion } from "framer-motion";
import { styled } from "styled-components";
import { Title } from "../../components/mainTitle";
import { ViewContainer } from "../../components/view";
import { Button } from "../../components/button";

const Container = styled(motion.div)`
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: min(90vw, 1000px);
`;

const OutsideContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;

export const Home = () => {
  return (
    <ViewContainer isHomeView>
      <OutsideContainer>
        <Container>
          <Title>Posner's Experiment</Title>
          <ButtonContainer>
            <Button text="Play" />
            <Button text="About" />
            <Button text="Stats" />
          </ButtonContainer>
        </Container>
      </OutsideContainer>
    </ViewContainer>
  );
};
