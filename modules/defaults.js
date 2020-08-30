import DOMElems from './DOMElems.js';
import renderTheme from './setTheme.js';
import renderBoard from './boardRender.js';
import themes from './themes.js';
import {
    setCurrentTheme,
    setCurrentBoardSize,
} from './currents.js';
import { terminateAction } from './handyFuncs.js';
const {
    checkBoxSize4,
    checkBoxThemeNeon,
} = DOMElems;


const settings = () => {
    setCurrentTheme(checkBoxThemeNeon.id);
    renderTheme(themes.get(checkBoxThemeNeon.id));

    setCurrentBoardSize(checkBoxSize4.id);
    renderBoard(checkBoxSize4.id);

    terminateAction();
};

if (!localStorage.getItem('boards-database')) {
    settings();
}
