/* eslint-disable import/no-mutable-exports */
let currentThemeID = null;
let currentBoardSizeID = null;
let isPlaySound = true;

const playSound = (bool) => {
    isPlaySound = bool;
    localStorage.setItem('play-sound', JSON.stringify(bool));
};

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
    isPlaySound,
    playSound,
};
