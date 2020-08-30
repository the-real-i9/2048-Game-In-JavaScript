import '../modules/loadGameState.js';
import '../modules/defaults.js';
import {
    event,
} from '../modules/manipFuncs.js';
import DOMElems from '../modules/DOMElems.js';
import {
    switchToSettings,
    saveSettings,
} from '../modules/settings.js';
import playGame from '../modules/playGame.js';
import {
    moveLeft,
    moveUp,
    moveRight,
    moveDown,
} from '../modules/movements.js';

import {
    currentBoardSizeID,
} from '../modules/currents.js';

import {
    noAlert,
    terminateAction,
} from '../modules/handyFuncs.js';

import {
    restartGame,
    displayModal,
    undoGame,
    resetGame,
} from '../modules/gameFuncs.js';

const {
    settingsBtn,
    saveSettingsBtn,
    undoGameBtn,
    restartGameBtn,
    restartModalBtn,
    cancelBtn,
    continueGameBtn,
    newGameBtn,
    undoGameOverBtn,
    restartGameOverBtn,
    resetGameBtn,
} = DOMElems;

event(settingsBtn, 'click', switchToSettings);
event(saveSettingsBtn, 'click', saveSettings);

event(document, 'keyup', (ev) => {
    if (noAlert()) {
        if (ev.keyCode === 37) {
            playGame(moveLeft);
        } else if (ev.keyCode === 38) {
            playGame(moveUp);
        } else if (ev.keyCode === 39) {
            playGame(moveRight);
        } else if (ev.keyCode === 40) {
            playGame(moveDown);
        }
    }
});

event(restartModalBtn, 'click', () => {
    displayModal('restart-cancel');
});

event(restartGameBtn, 'click', () => {
    restartGame(currentBoardSizeID);
});

event(cancelBtn, 'click', terminateAction);

event(undoGameBtn, 'click', () => {
    undoGame(currentBoardSizeID);
});

event(continueGameBtn, 'click', terminateAction);
event(newGameBtn, 'click', () => {
    restartGame(currentBoardSizeID);
});

event(undoGameOverBtn, 'click', () => {
    undoGame(currentBoardSizeID);
});

event(restartGameOverBtn, 'click', () => {
    restartGame(currentBoardSizeID);
});

event(resetGameBtn, 'click', resetGame);
