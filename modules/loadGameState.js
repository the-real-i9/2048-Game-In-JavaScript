import renderBoard from './boardRender.js';
import renderTheme from './setTheme.js';
import themes from './themes.js';
import { storeBoard } from './boardsStorage.js';
import { setCurrentTheme, setCurrentBoardSize } from './currents.js';
import { terminateAction, grabNum } from './handyFuncs.js';
import { isGameOver, declareGameOver } from './gameFuncs.js';

terminateAction();

if (localStorage.getItem('boards-database')) {
    const allBoardsDatas = JSON.parse(localStorage.getItem('boards-database'));
    for (const [key, value] of allBoardsDatas) {
        storeBoard(key, value);
    }

    const restoreTheme = localStorage.getItem('current-theme-ID');
    const restoreBoard = localStorage.getItem('current-board-size-ID');

    setCurrentTheme(restoreTheme);
    renderTheme(themes.get(restoreTheme));

    setCurrentBoardSize(restoreBoard);
    renderBoard(restoreBoard);

    if (isGameOver(grabNum(restoreBoard))) {
        declareGameOver();
    }
}
