import DOMElems from './DOMElems.js';
import {
    setStyle,
    event,
    classAction,
    select,
} from './manipFuncs.js';
import {
    currentBoardSizeID,
    currentThemeID,
    setCurrentBoardSize,
    setCurrentTheme,
} from './currents.js';
import renderTheme from './setTheme.js';
import renderBoard from './boardRender.js';
import themes from './themes.js';
const {
    settingsContainer,
    gameContainer,
    checkBoxSize,
    checkBoxTheme,
} = DOMElems;
classAction(select(`#${currentBoardSizeID}`), 'add', 'size-option-selected');
classAction(select(`#${currentThemeID}`), 'add', 'theme-option-selected');
const switchToSettings = () => {
    // hide game
    setStyle(gameContainer, 'display', 'none');
    // display settings
    setStyle(settingsContainer, 'display', 'flex');


    for (const elem of checkBoxSize) {
        event(elem, 'click', (ev) => {
            [...checkBoxSize].map((el) => classAction(el, 'remove', 'size-option-selected'));
            classAction(elem, 'add', 'size-option-selected');
        });
    }

    for (const elem of checkBoxTheme) {
        event(elem, 'click', (ev) => {
            [...checkBoxTheme].map((el) => classAction(el, 'remove', 'theme-option-selected'));
            classAction(elem, 'add', 'theme-option-selected');
        });
    }
};

const saveSettings = () => {
    // display game
    setStyle(gameContainer, 'display', 'block');
    // hide settings
    setStyle(settingsContainer, 'display', 'none');

    const selectedThemeID = [...checkBoxTheme].find((elem) => elem.classList.contains('theme-option-selected')).id;
    const selectedBoardSizeID = [...checkBoxSize].find((elem) => elem.classList.contains('size-option-selected')).id;

    if (selectedThemeID !== currentThemeID) {
        renderTheme(themes.get(selectedThemeID));
        setCurrentTheme(selectedThemeID);
    }

    renderBoard(selectedBoardSizeID);
    setCurrentBoardSize(selectedBoardSizeID);
};

export {
    switchToSettings,
    saveSettings,
};
