import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../../../components/button";
import { Container } from "./container";

export const Postgame = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <motion.h1>Dziękujemy za udział!</motion.h1>
      <motion.p>
        Dziękujemy za udział w badaniu. Wyniki badania, w którym wzięli Państwo
        udział, będą wykorzystywane w zakresie zajęć na Uniwersytecie
        Warszawskim Psychologia eksperymentalna. Badanie ma na celu wyznaczenia
        czasu reakcji w zależności od poprawności wskazówki. Jeśli mają Państwo
        jakieś pytania, prosimy o kontakt: XXX
      </motion.p>
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
