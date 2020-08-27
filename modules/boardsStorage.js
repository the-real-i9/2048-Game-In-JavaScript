// Different boards and there properties
// High score current score
const boardsDatabase = new Map();

const storeBoard = (key, value) => {
    boardsDatabase.set(key, value);
    return true;
};


export {
    boardsDatabase,
    storeBoard,
};
