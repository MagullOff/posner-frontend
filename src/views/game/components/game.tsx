import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import { Dispatch, useEffect, useState, useCallback, useRef } from "react";
import { styled } from "styled-components";
import { State } from "..";
import { BACKEND_URL } from "../../../BackendUrl";
import { Attempt, GameRequest } from "../../../types/gameRequest";
import { GameRow } from "../../../types/gameRow";
import { ResponseResult } from "../../../types/responseResult";
import { Container as BaseContainer } from "./container";
import { ShowBox, ShowBoxState } from "./showBox";

const gameNumber = 40;

type GameProps = {
  setState: Dispatch<State>;
};

const generateGameRows = (informationLevel: number) => {
  const gameArray: GameRow[] = [];
  const booleanArray: boolean[] = [];
  const informativeCount = Math.ceil((informationLevel / 100) * gameNumber);

  for (let i = 0; i < informativeCount; i++) {
    booleanArray.push(true);
  }

  for (let i = informativeCount; i < gameNumber; i++) {
    booleanArray.push(false);
  }

  for (let i = booleanArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [booleanArray[i], booleanArray[j]] = [booleanArray[j], booleanArray[i]];
  }

  booleanArray.forEach((e) => {
    const cuePosition = Math.random() < 0.5 ? "left" : "right";
    const targetPosition = e
      ? cuePosition
      : cuePosition === "left"
        ? "right"
        : "left";
    gameArray.push({ isCueValid: e, cuePosition, targetPosition });
  });

  return gameArray;
};

type BoxState = {
  left: ShowBoxState;
  right: ShowBoxState;
};

type GameState = {
  gameRows: GameRow[];
  count: number;
  informationLevel: number;
};

export const Game = ({ setState }: GameProps) => {
  const informationLevel = Math.floor((Math.random() * 100) / 2 + 25);
  const timeoutRef = useRef<any>();
  const [gameState, setGameState] = useState<GameState>({
    gameRows: generateGameRows(informationLevel),
    count: 0,
    informationLevel,
  });

  const [boxState, setBoxState] = useState<BoxState>({
    left: "empty",
    right: "empty",
  });

  const [activeHit, setActiveHit] = useState<number | null>(null);

  const sendResults = useCallback(() => {
    fetch(BACKEND_URL + "game", {
      method: "POST",
      body: JSON.stringify({
        clueInformationLevel: gameState.informationLevel,
        attempts: gameState.gameRows.map(
          (a) =>
            ({
              attemptResult:
                a.result! === "wrong" ? 0 : a.result! === "correct" ? 1 : 2,
              isCueValid: a.isCueValid,
              reactionSpeed: a.responsTimeMs,
            }) as Attempt,
        ),
      } as GameRequest),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) return res;
      throw new Error();
    });
  }, [gameState]);

  const handleClick = useCallback(
    (clickedBox: "left" | "right" | "none", hitTime: number) => {
      if (clickedBox !== "none") clearTimeout(timeoutRef.current);

      const clickTime = Date.now();
      const correctBox = gameState.gameRows[gameState.count].targetPosition;
      const correct: ResponseResult =
        clickedBox === "none"
          ? "overtime"
          : clickedBox === correctBox
            ? "correct"
            : "wrong";

      let newGameRows = gameState.gameRows.map((c, i) =>
        i === gameState.count
          ? {
            ...c,
            result: correct,
            responsTimeMs:
              clickedBox === "none" ? undefined : clickTime - hitTime,
          }
          : c,
      );
      setGameState({
        gameRows: newGameRows,
        count: gameState.count + 1,
        informationLevel: gameState.informationLevel,
      });
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
    setBoxState({
      left: isCueLeft ? "cue" : "empty",
      right: isCueLeft ? "empty" : "cue",
    });
    timeoutRef.current = setTimeout(() => {
      handleClick("none", 0);
    }, 200 + 500);
    setTimeout(() => {
      setActiveHit(Date.now());
      setBoxState({
        left: isHitLeft ? "full" : "empty",
        right: isHitLeft ? "empty" : "full",
      });
    }, 200);
  }, [gameState, handleClick]);

  useEffect(() => {
    if (gameState.count === gameNumber) {
      sendResults();
      setState({
        step: "postgame",
        gameResult: {
          attempts: gameState.gameRows,
          clueInformationLevel: gameState.informationLevel,
        },
      });
      console.log(gameState);
      return;
    }

    const timeout = setTimeout(mainLogic, 2000);
    return () => clearTimeout(timeout);
  }, [gameState, setState, mainLogic, sendResults]);

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
      <BarContainer>
        <ProgressBar completed={Math.fround((gameState.count / gameNumber) * 100)} bgColor={"black"} isLabelVisible={false} />
      </BarContainer>
    </Container >
  );
};

const BarContainer = styled(motion.div)`
  margin-top: 150px;
  flex 1;
`

const GridContainer = styled(motion.div)`
  margin-top: 170px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Column = styled(motion.div)`
  flex: 1;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
