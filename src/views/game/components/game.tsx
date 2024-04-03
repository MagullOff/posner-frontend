import { motion } from "framer-motion";
import { Dispatch, useEffect, useState } from "react";
import { styled } from "styled-components";
import { State } from "..";
import { GameRow } from "../../../types/gameRow";
import { ResponseResult } from "../../../types/responseResult";
import { Container as BaseContainer } from "./container";
import { ShowBox, ShowBoxState } from "./showBox";

const gameNumber = 5;

type GameProps = {
  setState: Dispatch<State>;
};

const generateGameRows = () => {
  const gameArray: GameRow[] = [];

  for (let i = 0; i < gameNumber; i++) {
    const cue = Math.random() < 0.5;
    const hit = Math.random() < 0.5;

    gameArray.push({
      cuePosition: cue ? "right" : "left",
      targetPosition: hit ? "right" : "left",
      isCueValid: cue === hit,
    });
  }

  return gameArray;
};

type BoxState = {
  left: ShowBoxState;
  right: ShowBoxState;
};

type GameState = {
  gameRows: GameRow[];
  count: number;
};

export const Game = ({ setState }: GameProps) => {
  const [gameState, setGameState] = useState<GameState>({
    gameRows: generateGameRows(),
    count: 0,
  });
  const [boxState, setBoxState] = useState<BoxState>({
    left: "empty",
    right: "empty",
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handleClick("left");
      } else if (event.key === "ArrowRight") {
        handleClick("right");
      }
    };

    const handleClick = (clickedBox: "left" | "right") => {
      const clickTime = new Date().getTime();
      const correctBox = gameState.gameRows[gameState.count].targetPosition;
      const correct: ResponseResult =
        clickedBox === correctBox ? "correct" : "wrong";

      console.log("full", correctBox);
      console.log("clicked", clickedBox);
      console.log(correct, clickTime, gameState.count);

      window.removeEventListener("keydown", handleKeyDown);
      let newGameRows = gameState.gameRows.map((c, i) =>
        i === gameState.count ? { ...c, result: correct } : c,
      );
      setGameState({ gameRows: newGameRows, count: gameState.count + 1 });
      setBoxState({
        left: "empty",
        right: "empty",
      });
    };

    if (gameState.count === gameNumber) {
      console.log(gameState);
      setState({
        step: "postgame",
        gameResult: { attempts: gameState.gameRows },
      });
    } else {
      setTimeout(() => {
        const timer = setTimeout(() => {
          const isCueLeft =
            gameState.gameRows[gameState.count].cuePosition === "left";
          const isHitLeft =
            gameState.gameRows[gameState.count].targetPosition === "left";
          setTimeout(() => {
            setBoxState({
              left: isHitLeft ? "full" : "empty",
              right: isHitLeft ? "empty" : "full",
            });
          }, 200);
          setBoxState({
            left: isCueLeft ? "cue" : "empty",
            right: isCueLeft ? "empty" : "cue",
          });
          window.addEventListener("keydown", handleKeyDown);
        }, 2000);
        return () => clearTimeout(timer);
      }, 1000);
    }
  }, [gameState, setState]);

  return (
    <Container>
      <GridContainer>
        <Column>
          <ShowBox state={boxState.left} />
        </Column>
        <Column>
          <motion.h1 >+</motion.h1>
        </Column>
        <Column>
          <ShowBox state={boxState.right} />
        </Column>
      </GridContainer>
    </Container>
  );
};

const GridContainer = styled(motion.div)`
  margin-top: 170px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled(motion.div)`
  flex: 1;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(BaseContainer)``;
