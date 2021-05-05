import React, { useCallback, useEffect, useState } from 'react';
import MainStackNavigator from './AppNavigator';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {login, getUser} from './actions/user';
import * as SecureStore from 'expo-secure-store';
import {save, getValue, deleteValue} from './actions/secureStore';
import { Asset } from 'expo-asset';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [startingScreen, setStartingScreen] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        let tryNewToken = true;
        let alreadySet = false;

        const token = await SecureStore.getItemAsync('token');
        if (!!token) {
            getUser(token)
                .then(data => {
                    if (!!data) {
                        setStartingScreen('MyOffers');
                        setUser(data);
                        tryNewToken = false;
                        alreadySet = true;
                    }
                })
        }

        if (!!tryNewToken) {
            const email = await SecureStore.getItemAsync('email');
            const password = await SecureStore.getItemAsync('password');

            if (!!email && !!password) {
                alreadySet = true;
                login(email, password)
                    .then(data => {
                        if (!data || !data.user) {
                          setStartingScreen('WelcomeBack');
                        }
                        if (!!data.user) {
                            setStartingScreen('MyOffers');
                            setUser(data);
                        }
                    })
            }
        }

        if (!alreadySet) {
            setStartingScreen('Landing');
        }

        const imageAssets = cacheImages([
          require('./images/hawkbanks.png'),
          require('./images/bankwhite.png'),
        ]);

        await Promise.all([...imageAssets]);

      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  if (!appIsReady) {
    return null;
  } else {
      async function hide() {
          await SplashScreen.hideAsync();
      }

      hide();
  }

  return (
    // <View  onLayout={onLayoutRootView}>
    <MainStackNavigator startingScreen={startingScreen}/>
    // </View>
  )
}
