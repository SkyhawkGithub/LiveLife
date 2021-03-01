import { take, call } from 'redux-saga/effects';
import SplashScreen from 'react-native-splash-screen';
//import { GoogleSignin } from '@react-native-community/google-signin';

import { InitialisationActions } from 'src/actions/initialisation';
import configs from 'src/configs';

export default function* initialisation() {
  yield take(InitialisationActions.INITIALISE_APPLICATION);

  // yield call(GoogleSignin.configure, {
  //   webClientId: configs.webClientId,
  // });

  yield call(SplashScreen.hide);
}
