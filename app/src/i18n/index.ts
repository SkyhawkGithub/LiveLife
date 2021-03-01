import I18n from 'i18n-js';
//import * as RNLocalize from 'react-native-localize';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// English language is the main language for fall back:
I18n.translations = {
  en: require('./locales/en.json'),
};

/*
// All other translations for the app goes to the respective language file:
const locales = RNLocalize.getLocales();
if (Array.isArray(locales)) {
  const {languageTag} = locales[0];
  I18n.locale = languageTag;
  switch (languageTag) {
    case 'af':
      I18n.translations.af = require('./locales/af.json');
      break;
  }
}
*/

// The method we'll use instead of a regular string
export function localizeString(name: string, params = {}): string {
  return I18n.t(name, params);
}

export default I18n;
