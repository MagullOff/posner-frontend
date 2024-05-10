import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../../../components/button";
import { Container } from "./container";

export const Postgame = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <motion.h1>Dziękujemy za udział w badaniu!</motion.h1>
      <motion.p>
        Wyniki badania będą wykorzystywane w ramach zajęć "Psychologia
        Eksperymentalna" na Uniwersytecie Warszawskim Badanie ma na celu
        wyznaczenie czasu reakcji w zależności od poprawności wskazówki.
      </motion.p>
      <motion.p>
        Jeśli chcesz dowiedzieć się więcej o badaniu Posnera, więcej informacji
        znajdziesz pod poniższym adresem:
        (https://en.wikipedia.org/wiki/Posner_cueing_task)
      </motion.p>
      <motion.p>Jeśli masz jakieś pytania, prosimy o kontakt: XXX</motion.p>
      <ButtonContainer>
        <Button
          text="Powrót"
          onClick={() => {
            navigate("..");
          }}
        />
      </ButtonContainer>
    </Container>
  );
};

const ButtonContainer = styled(motion.div)`
  padding: 0 250px 0 250px;
`;
