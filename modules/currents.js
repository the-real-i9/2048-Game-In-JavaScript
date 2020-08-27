/* eslint-disable import/no-mutable-exports */
let currentTheme = null;
let currentBoardSize = null;

const setCurrentTheme = (theme) => {
    currentTheme = theme;
};

const setCurrentBoardSize = (boardSize) => {
    currentBoardSize = boardSize;
};


export {
    setCurrentBoardSize,
    setCurrentTheme,
    currentTheme,
    currentBoardSize,
};
