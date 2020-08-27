import boards from './boardsStorage.js';
import createBoard from './createBoard.js';

const renderBoard = (boardSize) => {
    if (!boards.has(boardSize)) {
        createBoard(boardSize);
    }
};

export default renderBoard;
