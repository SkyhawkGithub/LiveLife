import { combineReducers } from 'redux';

import session from './session';
import getStarted from './getStarted';
import signIn from './signIn';

export default combineReducers({
  session,
  getStarted,
  signIn,
});
