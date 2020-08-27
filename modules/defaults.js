// If no local storage yet
import { classAction } from './manipFuncs.js';
import DOMElems from './DOMElems.js';
import renderTheme from './setTheme.js';
import themes from './themes.js';
import { setCurrentTheme, setCurrentBoardSize } from './currents.js';
const { checkBoxSize4, checkBoxThemeNeon } = DOMElems;

const settings = () => {
    setCurrentTheme(checkBoxThemeNeon.id);
    renderTheme(themes.get(checkBoxThemeNeon.id));

    setCurrentBoardSize(checkBoxSize4.id);
};

settings();
