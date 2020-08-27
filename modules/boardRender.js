import {
    boardsDatabase,
} from './boardsStorage.js';
import createBoard from './createBoard.js';
import { setProp, selectAll } from './manipFuncs.js';
import initTiles from './initTiles.js';
import DOMElems from './DOMElems.js';

const { tileBoard, scoreValue, highScoreValue } = DOMElems;

const renderBoardInUI = ({
    currentBoardState,
    screenSize,
    padGap,
    grid,
    currentScore,
    highScore,
}) => {
    setProp(scoreValue, 'textContent', currentScore);
    setProp(highScoreValue, 'textContent', highScore);
    tileBoard.style.setProperty('--screenSize', screenSize);
    tileBoard.style.setProperty('--padGap', padGap);
    tileBoard.style.setProperty('--grid', grid);
    setProp(tileBoard, 'innerHTML', currentBoardState);

    /* return new Promise((resolve) => {
        setProp(tileBoard, 'innerHTML', currentBoardState);

        resolve(selectAll('.tileCell'));
    }); */
    return true;
};


const renderBoard = (boardSize) => {
    if (!boardsDatabase.has(boardSize)) {
        if (createBoard(boardSize)) {
            if (renderBoardInUI(boardsDatabase.get(boardSize))) {
                initTiles();
                return;
            }
        }
    }
    renderBoardInUI(boardsDatabase.get(boardSize));
};

export default renderBoard;
