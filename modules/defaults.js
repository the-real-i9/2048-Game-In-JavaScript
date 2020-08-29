// If no local storage yet
import { setStyle } from './manipFuncs.js';
import DOMElems from './DOMElems.js';
import renderTheme from './setTheme.js';
import renderBoard from './boardRender.js';
import themes from './themes.js';
import { setCurrentTheme, setCurrentBoardSize } from './currents.js';
const { checkBoxSize4, checkBoxThemeNeon, modals } = DOMElems;

const settings = () => {
    setCurrentTheme(checkBoxThemeNeon.id);
    renderTheme(themes.get(checkBoxThemeNeon.id));

    setCurrentBoardSize(checkBoxSize4.id);
    renderBoard(checkBoxSize4.id);
};

settings();

[...modals].map((elem) => setStyle(elem, 'display', 'none'));
