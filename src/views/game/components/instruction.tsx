import { motion } from "framer-motion";
import { Dispatch } from "react";
import { styled } from "styled-components";
import { State } from "..";
import { Button } from "../../../components/button";
import { Container } from "./container";

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
      <motion.p></motion.p>
      <ButtonContainer>
        <Button
          text="Dalej"
          onClick={() => setState({ step: "game", gameResult: null })}
        />
      </ButtonContainer>
    </Container>
  );
};
