import { flatten } from 'flat';
let obj = {
    GAME: {
        LIST: "games",
        CREATE: "create_game",
        DELETE: "delete_game",
        UPDATE: "update_game",
    },
    REPLAY: {
        LIST: "replays",
    },
}
export const API_ENDPOINTS = new Map(flatten(obj)) //as const;