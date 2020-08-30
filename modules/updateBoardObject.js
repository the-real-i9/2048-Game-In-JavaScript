import {
    boardsDatabase,
} from './boardsStorage.js';
import { select } from './manipFuncs.js';
import DOMElems from './DOMElems.js';
const { tileBoard } = DOMElems;

const updateBoardObject = ({
    boardSize,
    boardState,
    score,
    highScore,
}) => {
    const fontSize = select('.tile-cell').getBoundingClientRect().width;
    tileBoard.style.setProperty('--font', `${fontSize}px`);

    const board = boardsDatabase.get(boardSize);
    board.previousBoardState = board.currentBoardState;
    board.previousCurrentScore = board.currentScore;
    board.previousHighScore = board.highScore;
    board.currentBoardState = boardState;
    board.currentScore = Number(score);
    board.highScore = Number(highScore);
    board.fontSize = fontSize;

    const allBoardDatas = JSON.stringify([...boardsDatabase], null, 4);
    localStorage.setItem('boards-database', allBoardDatas);
};

const updatePreviousBoardObject = ({
    boardSize,
    boardState,
    currentScore,
    highScore,
}) => {
    const board = boardsDatabase.get(boardSize);
    board.previousBoardState = boardState;
    board.previousCurrentScore = currentScore;
    board.previousHighScore = highScore;

    const allBoardDatas = JSON.stringify([...boardsDatabase], null, 4);
    localStorage.setItem('boards-database', allBoardDatas);
};

const undoBoardObject = (boardSize) => {
    const board = boardsDatabase.get(boardSize);
    board.currentBoardState = board.previousBoardState;
    board.currentScore = board.previousCurrentScore;
    board.highScore = board.previousHighScore;

    const allBoardDatas = JSON.stringify([...boardsDatabase], null, 4);
    localStorage.setItem('boards-database', allBoardDatas);
};

export {
    updateBoardObject,
    updatePreviousBoardObject,
    undoBoardObject,
};
