import { storeBoard } from './boardsStorage.js';
import { grabNum } from './handyFuncs.js';

const getBoardString = (size) => {
    let boardString = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            boardString += `<div class="tile-cell row-${i} hr-cell-${j} col-${j} vt-cell-${i}"></div>`;
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
    const size = grabNum(boardSize);
    const board = {
        dimen: `${size}x${size}`,
        currBoardState: getBoardString(size),
        prevBoardState: null,
        screenSize: `${String(window.screen.width)[0]}00px`,
        padGap: getPadGap(size),
        grid: size,
        currScore: 0,
        prevCurrScore: null,
        hScore: 0,
        prevHScore: null,
        fSize: 0,
        gWon: false,

        set gameWon(bool) {
            this.gWon = bool;
        },

        get gameWon() {
            return this.gWon;
        },

        set fontSize(fnsize) {
            if (fnsize) {
                this.fSize = fnsize;
            }
        },

        get fontSize() {
            return this.fSize;
        },

        set currentBoardState(boardHtml) {
            this.currBoardState = boardHtml;
        },

        get currentBoardState() {
            return this.currBoardState;
        },

        set previousBoardState(boardState) {
            this.prevBoardState = boardState;
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

        set previousCurrentScore(score) {
            this.prevCurrScore = score;
        },

        get previousCurrentScore() {
            return this.prevCurrScore;
        },

        set highScore(score) {
            this.hScore = score;
        },

        get highScore() {
            return this.hScore;
        },

        set previousHighScore(score) {
            this.prevHScore = score;
        },

        get previousHighScore() {
            return this.prevHScore;
        },

    };
    if (storeBoard(boardSize, board)) return true;

    return false;
};

export default createBoard;
