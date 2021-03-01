import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Header from './header';
import { StackRoutes, ScreenRoutes, ScreenComponents } from './routes';

import R from 'src/res';
import { localizeString } from 'src/i18n';

const Stack = createStackNavigator();

const AuthStack = (props: any) => {
  const { initialRouteName } = props;

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      headerMode="none"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name={ScreenRoutes.getStarted}
        component={ScreenComponents.getStarted}
        options={{
          title: localizeString('getStarted.title'),
        }}
      />
      <Stack.Screen
        name={ScreenRoutes.signIn}
        component={ScreenComponents.signIn}
        options={{
          title: localizeString('signIn.title'),
        }}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name={ScreenRoutes.signIn}
        component={ScreenComponents.signIn}
        options={{
          title: localizeString('signIn.title'),
        }}
      />
    </Stack.Navigator>
  );
};

const Root: React.FC<any> = (props: Readonly<any>) => {
  const { initialiseApplication, getStarted } = props;

  useEffect(() => {
    initialiseApplication && initialiseApplication();
  }, []);

  const isLoggedIn = false;

  const initialRouteName = getStarted.showGetStarted
    ? ScreenRoutes.getStarted
    : ScreenRoutes.signIn;

  return (
    <PaperProvider theme={R.themes.defaultTheme}>
      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen name={StackRoutes.main} component={MainStack} />
        ) : (
          <Stack.Screen
            name={StackRoutes.auth}
            options={{
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}>
            {(props) => (
              <AuthStack {...props} initialRouteName={initialRouteName} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </PaperProvider>
  );
};

export default Root;
