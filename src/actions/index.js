import { MOVE_OBJECTS, START_GAME } from "./types";

export const moveObjects = mousePosition =>({
    type: MOVE_OBJECTS,
    mousePosition,
});

export const startGame = ()=>({
    type: START_GAME,
});