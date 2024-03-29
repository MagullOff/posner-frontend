import { motion } from "framer-motion";
import { Dispatch } from "react";
import { styled } from "styled-components";
import { Step } from "..";
import { Button } from "../../../components/button";

type IntroProps = {
  setStep: Dispatch<Step>;
};

export const Intro = ({ setStep }: IntroProps) => {
  return (
    <Container>
      <motion.h1>Let's test!</motion.h1>
      <motion.p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat
        consequat mauris nunc congue nisi. Nam at lectus urna duis. Leo urna
        molestie at elementum eu. Massa sed elementum tempus egestas sed sed
        risus pretium. Eget aliquet nibh praesent tristique magna sit amet.
        Tortor at auctor urna nunc id cursus metus aliquam. Ut etiam sit amet
        nisl purus in mollis nunc. Netus et malesuada fames ac turpis. Sit amet
        massa vitae tortor condimentum lacinia quis. Vitae proin sagittis nisl
        rhoncus. Erat pellentesque adipiscing commodo elit. Ut sem nulla
        pharetra diam sit amet nisl suscipit adipiscing. Eu volutpat odio
        facilisis mauris sit. Morbi tincidunt augue interdum velit. Ipsum
        faucibus vitae aliquet nec ullamcorper sit amet risus. Nisi vitae
        suscipit tellus mauris a diam maecenas. Mi bibendum neque egestas
        congue.
      </motion.p>
      <ButtonContainer>
        <Button text="Play!" onClick={() => setStep("game")} />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  padding: 3vh;
`;

const ButtonContainer = styled(motion.div)`
  padding: 0 250px 0 250px;
`;
