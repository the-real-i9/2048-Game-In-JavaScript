import { storeBoard } from './boardsStorage.js';

// Board size object
// Props:
    // current Board state
    // pevious Board state
    // board grid
    // padGap
    // size of tile cells div by 2
    // current score
    // high score

const getBoardString = (size) => {
    let boardString = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            boardString += `<div class="tile-cell hr-row-${i}-cell-${j} vt-col-${j}-cell-${i}"></div>`;
        }
    }
    return boardString;
};

const getPadGap = (size) => {
    const boardSizes = [[3, 4], [5, 6], [7, 8], [9, 10], [11, 12]];
    const padGaps = [6, 5, 4, 3, 2];
    const index = boardSizes.findIndex((elem) => elem.includes(size));
    return `${padGaps[index]}px`;
};

const createBoard = (boardSize) => {
    const size = Number(boardSize.slice(-1));
    const board = {
        dimen: `${size}x${size}`,
        currBoardState: getBoardString(size),
        prevBoardState: null,
        screenSize: `${String(window.screen.width)[0]}00px`,
        padGap: getPadGap(size),
        grid: size,
        currScore: 0,
        hScore: 0,

        set currentBoardState(boardHtml) {
            this.currBoardState = boardHtml;
        },

        get currentBoardState() {
            return this.currBoardState;
        },

        set previousBoardState(cbs) {
            this.prevBoardState = cbs;
        },

        get previousBoardState() {
            return this.prevBoardState;
        },

        set currentScore(score) {
            this.currScore = score;
        },

        get currentScore() {
            return this.currScore;
        },

        set highScore(score) {
            this.hScore = score;
        },

        get highScore() {
            return this.hScore;
        },

    };
    if (storeBoard(boardSize, board)) return true;

    return false;
};

export default createBoard;
