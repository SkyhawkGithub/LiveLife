import getStarted from 'src/screens/getStarted';
import signIn from 'src/screens/signIn';

export enum StackRoutes {
  auth = 'authStack',
  main = 'mainStack',
}

export enum ScreenRoutes {
  getStarted = 'getStarted',
  signIn = 'signIn',
}

export const ScreenComponents = {
  getStarted,
  signIn,
};
