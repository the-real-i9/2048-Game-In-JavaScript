/* eslint-disable import/no-mutable-exports */
let currentThemeID = null;
let currentBoardSizeID = null;

const setCurrentTheme = (themeId) => {
    currentThemeID = themeId;
};

const setCurrentBoardSize = (boardSizeId) => {
    currentBoardSizeID = boardSizeId;
};


export {
    setCurrentBoardSize,
    setCurrentTheme,
    currentThemeID,
    currentBoardSizeID,
};
