import DOMElems from './DOMElems.js';
import { setStyle } from './manipFuncs.js';
const { settingsContainer, gameContainer } = DOMElems;
const switchToSettings = () => {
    // hide game
    setStyle(gameContainer, 'display', 'none');
    // display settings
    setStyle(settingsContainer, 'display', 'flex');
};

const saveSettings = () => {

};

export {
    switchToSettings,
    saveSettings,
};
