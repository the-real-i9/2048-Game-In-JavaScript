import DOMElems from './DOMElems.js';
const { gameContainer } = DOMElems;

const setTheme = ({
 topColor, gameBgColor, tileCell, primCol,
}) => {
    // console.log(topColor, gameBgColor, tileCell, primCol);
    gameContainer.style.setProperty('--topColor', topColor);
    gameContainer.style.setProperty('--gameBgColor', gameBgColor);
    gameContainer.style.setProperty('--tileCell', tileCell);
    gameContainer.style.setProperty('--primCol', primCol);
};

export default setTheme;
