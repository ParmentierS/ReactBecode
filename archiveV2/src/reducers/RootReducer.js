import {combineReducers} from 'redux';
import AppReducer from './AppReducer';
import LanguageReducer from './LanguageReducer';

const rootReducer = combineReducers({
  app: AppReducer,
  activeLanguage: LanguageReducer
});

export default rootReducer;