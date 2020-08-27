/* eslint-disable import/no-mutable-exports */
let currentTheme = null;
let currentBoardSize = null;

const setCurrentTheme = (themeId) => {
    currentTheme = themeId;
};

const setCurrentBoardSize = (boardSizeId) => {
    currentBoardSize = boardSizeId;
};


export {
    setCurrentBoardSize,
    setCurrentTheme,
    currentTheme,
    currentBoardSize,
};
