import { Dispatch } from "react";
import { Step } from "..";
import { GameResult } from "../../../types/gameResult";
import { Container } from "./container";

type GameProps = {
  setStep: Dispatch<Step>;
  setGameResult: Dispatch<GameResult | null>;
};

export const Game = (_: GameProps) => {
  return <Container>game</Container>;
};
