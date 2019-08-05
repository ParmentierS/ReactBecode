import i18n from '../services/i18n/i18n';

export function changeLanguage(selectedLanguage) {
  i18n.changeLanguage(selectedLanguage);
  return {
    type: 'LANGUAGE_CHANGED',
    payload: selectedLanguage
  };
}