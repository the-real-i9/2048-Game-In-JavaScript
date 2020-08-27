import { storeBoard, boardsDatabase } from './boardsStorage';

const updateBoard = (boardSize, boardState, score, highScore) => {
    const newBoard = boardsDatabase.get(boardSize);
    newBoard.previousBoardState = newBoard.currentBoardState;
    newBoard.currentBoardState = boardState;
    newBoard.currentScore = score;
    newBoard.highScore = highScore;

    storeBoard(boardSize, newBoard);
};

export default updateBoard;
