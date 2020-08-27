import DOMElems from './DOMElems.js';
import { setStyle, event, classAction } from './manipFuncs.js';
import { currentBoardSize, currentTheme } from './currents.js';
const { settingsContainer, gameContainer, sizeOptions, checkBoxSize } = DOMElems;
const switchToSettings = () => {
    // hide game
    setStyle(gameContainer, 'display', 'none');
    // display settings
    setStyle(settingsContainer, 'display', 'flex');

    classAction(currentBoardSize, 'add', 'size-option-selected');
    classAction(currentTheme, 'add', 'theme-option-selected');

    for (const elem of checkBoxSize) {
        event(elem, 'click', (ev) => {
            [...checkBoxSize].map((el) => classAction(el, 'remove', 'size-option-selected'));
            classAction(elem, 'add', 'size-option-selected');
        });
    }
};

const saveSettings = () => {

};

export {
    switchToSettings,
    saveSettings,
};
