/* eslint-disable no-undef */
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
    gameContainer,
} = DOMElems;

event(settingsBtn, 'click', switchToSettings);
event(saveSettingsBtn, 'click', saveSettings);

$_SwipeJS(gameContainer).addSwipeListener('swipeleft', () => {
    if (noAlert()) {
        playGame(moveLeft);
    }
});

$_SwipeJS(gameContainer).addSwipeListener('swipeup', () => {
    if (noAlert()) {
        playGame(moveUp);
    }
});

$_SwipeJS(gameContainer).addSwipeListener('swiperight', () => {
    if (noAlert()) {
        playGame(moveRight);
    }
});

$_SwipeJS(gameContainer).addSwipeListener('swipedown', () => {
    if (noAlert()) {
        playGame(moveDown);
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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('../cache_app_v1.js');
    });
}
