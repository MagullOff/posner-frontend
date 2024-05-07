import { motion } from "framer-motion";
import { Dispatch } from "react";
import { styled } from "styled-components";
import { State } from "..";
import { Button } from "../../../components/button";
import { Container } from "./container";
import { ShowBox } from "./showBox";

const ButtonContainer = styled(motion.div)`
  padding: 0 250px 0 250px;
`;

type IntroProps = {
  setState: Dispatch<State>;
};

export const Instruction = ({ setState }: IntroProps) => {
  return (
    <Container>
      <motion.h1>Instrukcja</motion.h1>
      <motion.p>
        Na ekranie znajdować się będzie punkt skupienia między dwoma
        prostokątami. Naciśnij prawą strzałkę jeżeli zauważysz sygnał w prawym
        prostokącie i lewą strzałkę jeżeli zauważysz sygnał w lewym prostokącie.
        Każda próba będzie poprzedzona wyświetleniem znaku "x", który jest
        wskazówką. Nie reaguj na niego. Eksperyment składa się ze 100 prób.
        Poniżej znajduje się scena z eksperymentu gdzie po lewej stronie
        znajdziemy wskazówkę, a po prawej sygnał.
      </motion.p>
      <GridContainer>
        <Column>
          <ShowBox state={"cue"} />
        </Column>
        <Column>
          <motion.h1>+</motion.h1>
        </Column>
        <Column>
          <ShowBox state={"full"} />
        </Column>
      </GridContainer>
      <ButtonContainer>
        <Button
          text="Dalej"
          onClick={() => setState({ step: "game", gameResult: null })}
        />
      </ButtonContainer>
    </Container>
  );
};

const GridContainer = styled(motion.div)`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
