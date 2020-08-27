import '../modules/defaults.js';
import { event } from '../modules/manipFuncs.js';
import DOMElems from '../modules/DOMElems.js';
import { switchToSettings, saveSettings } from '../modules/settings.js';

const { settingsBtn, saveSettingsBtn } = DOMElems;

event(settingsBtn, 'click', switchToSettings);
event(saveSettingsBtn, 'click', saveSettings);
