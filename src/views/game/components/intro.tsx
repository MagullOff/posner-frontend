import { motion } from "framer-motion";
import { Dispatch } from "react";
import { styled } from "styled-components";
import { State } from "..";
import { Button } from "../../../components/button";
import { Container } from "./container";

type IntroProps = {
  setState: Dispatch<State>;
};

export const Intro = ({ setState }: IntroProps) => {
  return (
    <Container>
      <motion.h1>Eksperyment Posnera!</motion.h1>
      <motion.p>
        Jesteśmy studentami pierwszego roku kognitywistyki na Uniwersytecie
        Warszawskim. Prowadzimy badanie o tym jak bodźce wizualne wpływają na
        procesy uwagi i realizujemy je w ramach przedmiotu “Psychologia
        Eksperymentalna” prowadzona przez Panią doktor Joannę Komorowską-Mach i
        Wiktora Rorota. Badanie jest w pełni anonimowe, można zrezygnować z
        udziału w każdym momencie, a wyniki będą rozpatrywane wyłącznie grupowo.
        Badanie polega na wzięciu udziału w krótkiej grze mierzącej czas reakcji
        (należy to zrobić na komputerze), trwającej ok. 2-3 minuty.
      </motion.p>
      <motion.p>
        Jeśli wyrażają Państwo na udział w badaniu prosze klinkąć “Dalej”,
        jednak jeśli Panstwo nie wyrażają zgody proszę opuścić stronę.
      </motion.p>
      <ButtonContainer>
        <Button
          text="Dalej"
          onClick={() => setState({ step: "instruction", gameResult: null })}
        />
      </ButtonContainer>
    </Container>
  );
};

const ButtonContainer = styled(motion.div)`
  padding: 0 250px 0 250px;
`;
