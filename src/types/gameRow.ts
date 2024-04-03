import { Position } from "./position";
import { ResponseResult } from "./responseResult";

export type GameRow = {
  cuePosition: Position;
  targetPosition: Position;
  isCueValid: boolean;
  responsTimeMs?: number;
  result?: ResponseResult;
};
