/**
 * LiveLife
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import { NavigationContainer } from 'src/hocs/withAnalytics';
import AppContainer from 'src/navigation';
import configureStore from 'src/store/configureStore';
import R from 'src/res';

const { store, persistor } = configureStore();

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor!}>
        <SafeAreaProvider>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor={R.colors.transparent}
          />
          <NavigationContainer>
            <AppContainer />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
