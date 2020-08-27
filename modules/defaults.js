// If no local storage yet
import { classAction } from './manipFuncs.js';
import DOMElems from './DOMElems.js';
import { setCurrentTheme, setCurrentBoardSize } from './currents.js';
const { checkBoxSize4, checkBoxThemeNeon } = DOMElems;

const settings = () => {
    setCurrentTheme(checkBoxThemeNeon.id);
    setCurrentBoardSize(checkBoxSize4.id);
};

settings();
