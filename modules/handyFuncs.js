import DOMElems from './DOMElems.js';

const { modals } = DOMElems;
const noAlert = () => {
    const isThereNoAlert = [...modals].every((elem) => elem.style.display === 'none');
    return isThereNoAlert;
};

const grabNum = (str) => Number(str.slice(str.lastIndexOf('-') + 1));

export { noAlert, grabNum };
