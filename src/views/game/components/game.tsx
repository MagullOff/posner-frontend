import { motion } from "framer-motion";
import { Dispatch, useEffect, useState, useCallback } from "react";
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

  const [activeHit, setActiveHit] = useState<number | null>(null);

  const handleClick = useCallback(
    (clickedBox: "left" | "right", hitTime: number) => {
      const clickTime = Date.now();
      const correctBox = gameState.gameRows[gameState.count].targetPosition;
      const correct: ResponseResult =
        clickedBox === correctBox ? "correct" : "wrong";

      let newGameRows = gameState.gameRows.map((c, i) =>
        i === gameState.count
          ? { ...c, result: correct, responsTimeMs: clickTime - hitTime }
          : c,
      );
      setGameState({ gameRows: newGameRows, count: gameState.count + 1 });
      setBoxState({
        left: "empty",
        right: "empty",
      });
    },
    [gameState],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!activeHit) return;

      if (event.key === "ArrowLeft") {
        handleClick("left", activeHit!);
      } else if (event.key === "ArrowRight") {
        handleClick("right", activeHit!);
      }
      setActiveHit(null);
    },
    [activeHit, handleClick],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const mainLogic = useCallback(() => {
    const isCueLeft =
      gameState.gameRows[gameState.count].cuePosition === "left";
    const isHitLeft =
      gameState.gameRows[gameState.count].targetPosition === "left";
    setTimeout(() => {
      setActiveHit(Date.now());
      setBoxState({
        left: isHitLeft ? "full" : "empty",
        right: isHitLeft ? "empty" : "full",
      });
    }, 200);
    setBoxState({
      left: isCueLeft ? "cue" : "empty",
      right: isCueLeft ? "empty" : "cue",
    });
  }, [gameState]);

  useEffect(() => {
    if (gameState.count === gameNumber) {
      setState({
        step: "postgame",
        gameResult: { attempts: gameState.gameRows },
      });
      return;
    }

    const timeout = setTimeout(mainLogic, 2000);
    return () => clearTimeout(timeout);
  }, [gameState, setState, mainLogic]);

  return (
    <Container>
      <GridContainer>
        <Column>
          <ShowBox state={boxState.left} />
        </Column>
        <Column>
          <motion.h1>+</motion.h1>
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
