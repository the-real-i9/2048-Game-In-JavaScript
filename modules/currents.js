/* eslint-disable import/no-mutable-exports */
let currentThemeID = null;
let currentBoardSizeID = null;

const setCurrentTheme = (themeId) => {
    currentThemeID = themeId;
    localStorage.setItem('current-theme-ID', themeId);
};

const setCurrentBoardSize = (boardSizeId) => {
    currentBoardSizeID = boardSizeId;
    localStorage.setItem('current-board-size-ID', boardSizeId);
};


export {
    setCurrentBoardSize,
    setCurrentTheme,
    currentThemeID,
    currentBoardSizeID,
};
