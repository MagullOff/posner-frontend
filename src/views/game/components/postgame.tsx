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
        Eksperyment ma na celu badanie czasu reakcji przy mylących wskazówkach w
        zależności od tego jak często pokazywana wskazówka jest poprawna.
        Każdemu z badanych na początku losowo przypisywana jest grupa charakteryzująca
        się tym, jaki procent wskazówek pojawi się w tym samym
        miejscu co właściwy bodziec. Jest to wartość od 30 do 70 procent. Po zebraniu wyników,
        sprawdzone zostanie czy liczba mylnych wskazówek miała wpływ na
        skuteczność wykonywania zadań.
      </motion.p>
      <motion.p>
        Jeśli chcesz dowiedzieć się więcej o badaniu Posnera, więcej informacji
        znajdziesz pod poniższym adresem:
        (https://en.wikipedia.org/wiki/Posner_cueing_task)
      </motion.p>
      <motion.p>
        Jeśli masz jakieś pytania, albo chcesz otrzymać raport z wynikami
        badań po ich ukończeniu - prosimy o kontakt pod adresem mailowym:
        a.woznica8@student.uw.edu.pl
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
