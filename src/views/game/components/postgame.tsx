import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../../../components/button";
import { Container } from "./container";

export const Postgame = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <motion.h1>Thank you for playing!</motion.h1>
      <motion.p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi. Nam at lectus urna duis. Leo urna
        molestie at elementum eu. Massa sed elementum tempus egestas sed sed
        risus pretium. Eget aliquet nibh praesent tristique magna sit amet.
        Tortor at auctor urna nunc id cursus metus aliquam. Ut etiam sit amet
        nisl purus in mollis nunc. Netus et malesuada fames ac turpis. Sit amet
        massa vitae tortor condimentum lacinia quis. Vitae proin sagittis nisl
        rhoncus.{" "}
      </motion.p>
      <motion.p>
        Click the button bellow to submit your result for the experiment.
      </motion.p>
      <ButtonContainer>
        <Button
          text="Submit"
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
