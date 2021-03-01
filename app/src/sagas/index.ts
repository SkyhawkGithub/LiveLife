import {fork, all} from 'redux-saga/effects';
import initialisation from './initialisation';

export default function* sagas() {
  yield all([fork(initialisation)]);
}
