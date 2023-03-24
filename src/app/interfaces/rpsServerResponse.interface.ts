export interface RpsServerResponse {
    serverSelection: string,
    gameResult: string
}

export interface rpsGameResult {
    playerSelection: string,
    rpsServerResponse: RpsServerResponse
}