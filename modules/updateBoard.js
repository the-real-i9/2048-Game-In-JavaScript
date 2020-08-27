import { storeBoard, boardsDatabase } from './boardsStorage.js';

const updateBoard = (boardSize, boardState, score, highScore, fontSize) => {
    const newBoard = boardsDatabase.get(boardSize);
    newBoard.previousBoardState = newBoard.currentBoardState;
    newBoard.currentBoardState = boardState;
    newBoard.currentScore = score;
    newBoard.highScore = highScore;
    newBoard.fontSize = fontSize;

    storeBoard(boardSize, newBoard);
};

export default updateBoard;
