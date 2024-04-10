import { SideView } from "../../components/sideView";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { styled } from "styled-components";
import { Intro } from "./components/intro";
import { Postgame } from "./components/postgame";
import { Game as GameComponent } from "./components/game";
import { GameResult } from "../../types/gameResult";

export type Step = "intro" | "game" | "postgame";

export type State = {
  step: Step;
  gameResult: GameResult | null;
};

export const Game = () => {
  const [state, setState] = useState<State>({
    step: "intro",
    gameResult: null,
  });

  return (
    <SideView>
      <GameContainer>
        <AnimatePresence mode="wait">
          {state.step === "intro" && <Intro key="intro" setState={setState} />}
          {state.step === "game" && (
            <GameComponent key="game" setState={setState} />
          )}
          {state.step === "postgame" && (
            <Postgame
              key="post"
              sendResults={() => {
                console.log(state.gameResult);
              }}
            />
          )}
        </AnimatePresence>
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
