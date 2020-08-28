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

const {
    settingsBtn,
    saveSettingsBtn,
} = DOMElems;

event(settingsBtn, 'click', switchToSettings);
event(saveSettingsBtn, 'click', saveSettings);

event(document, 'keyup', (ev) => {
    if (ev.keyCode === 37) {
        playGame(moveLeft);
    } else if (ev.keyCode === 38) {
        playGame(moveUp);
    } else if (ev.keyCode === 39) {
        playGame(moveRight);
    } else if (ev.keyCode === 40) {
        playGame(moveDown);
    }
});
