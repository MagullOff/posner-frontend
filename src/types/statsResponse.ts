export type StatsResponse = {
    linearA: number;
    linearB: number;
    pearsonCorrelation: number;
    gameResults: GameResultResponse[];
}

export type GameResultResponse = {
    clueInformationLevel: number;
    averageSpeed: number;
}