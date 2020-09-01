const boardsDatabase = new Map();

const storeBoard = (key, value) => {
    boardsDatabase.set(key, value);
    return true;
};


export {
    boardsDatabase,
    storeBoard,
};
