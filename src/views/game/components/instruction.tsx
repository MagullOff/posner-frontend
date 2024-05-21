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
        Na środku ekranu znajdować się będzie punkt skupienia w postaci znaku
        "+". Na lewo i na prawo od niego znajdą się dwa pola. Naciśnij{" "}
        <motion.b>prawą strzałkę</motion.b> jeżeli zauważysz sygnał w prawym
        prostokącie i <motion.b>lewą strzałkę</motion.b> jeżeli
        zauważysz sygnał w lewym prostokącie. Każda próba będzie
        poprzedzona wyświetleniem wskazówki.{" "}
        <motion.b>Nie reaguj na nią</motion.b>. Eksperyment składa się z 50
        prób. Poniżej pokazane są wskazówka i sygnał.
      </motion.p>
      <GridContainer>
        <Column>
          <motion.div>wskazówka</motion.div>
          <ShowBox state={"cue"} />
        </Column>
        <Column>
          <motion.h1>+</motion.h1>
        </Column>
        <Column>
          <motion.div>sygnał</motion.div>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
