import { storeBoard, boardsDatabase } from './boardsStorage.js';

const updateBoardObject = (boardSize, boardState, score, highScore, fontSize) => {
    const newBoard = boardsDatabase.get(boardSize);
    newBoard.previousBoardState = newBoard.currentBoardState;
    newBoard.currentBoardState = boardState;
    newBoard.currentScore = Number(score);
    newBoard.highScore = Number(highScore);
    newBoard.fontSize = fontSize;

    storeBoard(boardSize, newBoard);
};

export default updateBoardObject;
