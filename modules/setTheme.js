import DOMElems from './DOMElems.js';
const {
    gameContainer,
    body,
} = DOMElems;

const setTheme = ({
    topColor,
    gameBgColor,
    tileCell,
    primCol,
}) => {
    body.style.setProperty('--topColor', topColor);
    gameContainer.style.setProperty('--topColor', topColor);
    gameContainer.style.setProperty('--gameBgColor', gameBgColor);
    gameContainer.style.setProperty('--tileCell', tileCell);
    gameContainer.style.setProperty('--primCol', primCol);
};

export default setTheme;
