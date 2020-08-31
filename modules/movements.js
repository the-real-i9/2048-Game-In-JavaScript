import {
    selectAll,
    setProp,
    classAction,
    select,
} from './manipFuncs.js';
import {
    updateScores,
    declareWin,
} from './gameFuncs.js';
import {
    grabNum,
} from './handyFuncs.js';
import { currentBoardSizeID } from './currents.js';
import { setBoardObjectGameWon } from './updateBoardObject.js';
import { boardsDatabase } from './boardsStorage.js';


let cellIndex = null;
let max = null;

let movementOcurred = false;

const moveToExtreme = (tileRowCol, dir) => {
    const allTileCells = [...selectAll('.tile-cell')];
    const isNegDir = dir === 'left' || dir === 'up';
    const hrORVt = (dir === 'left' || dir === 'right') ? 'hr' : 'vt';
    const minMax = isNegDir ? 0 : max;
    const addOrDiff = isNegDir ? -1 : 1;
    if (cellIndex === minMax) return;
    const currCell = allTileCells
        .find((elem) => elem.classList.contains(tileRowCol) && elem.classList.contains(`${hrORVt}-cell-${cellIndex}`));
    const nextOrPrevCell = allTileCells
        .find((elem) => elem.classList.contains(tileRowCol) && elem.classList.contains(`${hrORVt}-cell-${cellIndex + addOrDiff}`));
    if (nextOrPrevCell.innerHTML === '') {
        setProp(nextOrPrevCell, 'innerHTML', currCell.innerHTML);
        setProp(currCell, 'innerHTML', '');
        movementOcurred = true;
    } else if (nextOrPrevCell.innerHTML) {
        const re = />(\d+)<\//;
        const nextOrPrevCellText = nextOrPrevCell.innerHTML.match(re)[1];
        const currCellText = currCell.innerHTML.match(re)[1];
        if (nextOrPrevCellText === currCellText) {
            const tileSum = Number(nextOrPrevCellText) + Number(currCellText);
            if (tileSum === 262144) return;
            setProp(nextOrPrevCell, 'innerHTML', `<div class="tile tile-${tileSum}">${tileSum}</div>`);
            setProp(currCell, 'innerHTML', '');
            updateScores(tileSum);
            movementOcurred = true;
            const { gameWon } = boardsDatabase.get(currentBoardSizeID);
            if (tileSum === 2048 && gameWon === false) {
                declareWin();
                setBoardObjectGameWon(currentBoardSizeID, true);
            }
        } else {
            return;
        }
    }

    if (isNegDir) {
        cellIndex--;
    } else {
        cellIndex++;
    }
    moveToExtreme(tileRowCol, dir);
};

const moveLeft = () => {
    const allTilesElem = [...selectAll('.tile')];
    const parent = allTilesElem.map((elem) => elem.parentElement);
    const rowHrCell = parent.map((elem) => [
        [...elem.classList][1],
        [...elem.classList][2],
    ]);

    for (const elem of rowHrCell) {
        const row = elem[0];
        const hrCell = elem[1];
        cellIndex = grabNum(hrCell);
        moveToExtreme(row, 'left');
    }

    if (movementOcurred) {
        movementOcurred = false;
        return true;
    }
    return false;
};

const moveRight = (boardSize) => {
    const allTilesElem = [...selectAll('.tile')];
    const parent = allTilesElem.map((elem) => elem.parentElement);
    const rowHrCell = parent.map((elem) => [
        [...elem.classList][1],
        [...elem.classList][2],
    ]);

    for (let elem = rowHrCell.length - 1; elem > -1; elem--) {
        const row = rowHrCell[elem][0];
        const hrCell = rowHrCell[elem][1];
        max = boardSize - 1;
        cellIndex = grabNum(hrCell);
        moveToExtreme(row, 'right');
    }

    if (movementOcurred) {
        movementOcurred = false;
        return true;
    }
    return false;
};

const moveUp = () => {
    const allTilesElem = [...selectAll('.tile')];
    const parent = allTilesElem.map((elem) => elem.parentElement);
    const colVtCell = parent.map((elem) => [
        [...elem.classList][3],
        [...elem.classList][4],
    ]);

    for (const elem of colVtCell) {
        const col = elem[0];
        const vtCell = elem[1];
        cellIndex = grabNum(vtCell);
        moveToExtreme(col, 'up');
    }

    if (movementOcurred) {
        movementOcurred = false;
        return true;
    }
    return false;
};

const moveDown = (boardSize) => {
    const allTilesElem = [...selectAll('.tile')];
    const parent = allTilesElem.map((elem) => elem.parentElement);
    const colVtCell = parent.map((elem) => [
        [...elem.classList][3],
        [...elem.classList][4],
    ]);

    for (let elem = colVtCell.length - 1; elem > -1; elem--) {
        const col = colVtCell[elem][0];
        const vtCell = colVtCell[elem][1];
        max = boardSize - 1;
        cellIndex = grabNum(vtCell);
        moveToExtreme(col, 'down');
    }


    if (movementOcurred) {
        movementOcurred = false;
        return true;
    }
    return false;
};

export {
    moveLeft,
    moveUp,
    moveRight,
    moveDown,
};
