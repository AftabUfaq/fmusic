import React,{useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import MainStackScreen from './src/router/MainNavigator';
import {store} from './src/store/index';
import { navigationRef } from './src/router/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
  const App = () => {
    const  _cacheResourcesAsync = async () =>  {
      const images = [require('./assets/logo.png')];

      const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
      });
      return Promise.all(cacheImages);
    }

    const [isReady, setisReady] = useState(false)

    if (!isReady) {
      return (
        <AppLoading
          startAsync={_cacheResourcesAsync}
          onFinish={() => setisReady(true)}
          onError={console.warn}
        />
      );

    }
      return (
        <NavigationContainer ref={navigationRef}>
            <MainStackScreen />
        </NavigationContainer>
      )
  }

const ReduxApp = () => {
  useEffect(() => {

  },[])
  return(
    <SafeAreaView style={{flex:1, backgroundColor:"rgba(0,0,0,.5)" }} >
        <SafeAreaProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </SafeAreaProvider>
    </SafeAreaView>
  )
}

export default ReduxApp;