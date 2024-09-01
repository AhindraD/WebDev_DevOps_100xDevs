// how to extract values from a nested object and convert it into a union type in Typescript ?

import { flatten } from 'flat';

export const API_ENDPOINTS = {
    GAME: {
        LIST: "games",
        CREATE: "create_game",
        DELETE: "delete_game",
        UPDATE: "update_game",
    },
    REPLAY: {
        LIST: "replays",
    },
}// as const;

const flatObj = flatten(API_ENDPOINTS) as const;
type ApiEndpoint = typeof flatObj[keyof typeof flatObj];
const a: ApiEndpoint = 1;
// Make it so that above type is derived from and is a union of values of`API_ENDPOINTS`
// -> 'games' | 'create_game' | 'delete_game' | 'update_game' | 'replays'
// const flat = { a: 1, b: 2, c: 3 } as const;