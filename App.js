import React from 'react';
import {LogBox} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import MainNav from './src/navigation';

// ignore warnings
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <MenuProvider>
            <NavigationContainer>
              <MainNav />
            </NavigationContainer>
          </MenuProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
