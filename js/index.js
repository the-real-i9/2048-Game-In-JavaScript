import { event } from '../modules/manipFuncs.js';
import DOMElems from '../modules/DOMElems.js';
import { switchToSettings } from '../modules/settings.js';

const { settingsBtn } = DOMElems;

event(settingsBtn, 'click', switchToSettings);
