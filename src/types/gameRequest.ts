export type GameRequest = {
  clueInformationLevel: number;
  attempts: Attempt[];
};

export type Attempt = {
  isCueValid: boolean;
  reactionSpeed: number;
  attemptResult: number;
};
