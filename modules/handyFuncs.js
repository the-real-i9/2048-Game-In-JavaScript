import DOMElems from './DOMElems.js';
import { setStyle } from './manipFuncs.js';

const { modals, topSection } = DOMElems;
const noAlert = () => {
    const isThereNoAlert = [...modals].every((elem) => elem.style.display === 'none');
    return isThereNoAlert;
};

const terminateAction = () => {
    [...modals].map((elem) => setStyle(elem, 'display', 'none'));
    topSection.style.setProperty('--display', 'none');
};

const grabNum = (str) => Number(str.slice(str.lastIndexOf('-') + 1));

export { noAlert, grabNum, terminateAction };
