import { SideView } from "../../components/sideView";
import { motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";
import { Intro } from "./components/intro";
import { Postgame } from "./components/postgame";
import { Game as GameComponent } from "./components/game";
import { GameResult } from "../../types/gameResult";

export type Step = "intro" | "game" | "postgame";

export const Game = () => {
  const [step, setStep] = useState<Step>("intro");
  const [_, setGameResult] = useState<GameResult | null>(null);

  return (
    <SideView>
      <GameContainer>
        {step === "intro" && <Intro setStep={setStep} />}
        {step === "game" && (
          <GameComponent setGameResult={setGameResult} setStep={setStep} />
        )}
        {step === "postgame" && <Postgame />}
      </GameContainer>
    </SideView>
  );
};

const GameContainer = styled(motion.div)`
  height: 60vh;
  margin-top: 20vh;
  width: 100%;
  border-radius: 10px;
  border: 3px solid ${(props) => props.theme.colors.primary};
`;
