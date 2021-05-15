import React, { useCallback, useEffect, useState } from 'react';
import MainStackNavigator from './AppNavigator';
import { View, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {login, getUser} from './actions/user';
import { getAvailableOffers, getUserOffers } from './actions/offers';
import { getAccounts } from './actions/accounts';
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
  const [availableOffers, setAvailableOffers] = useState(null);
  const [userOffers, setUserOffers] = useState(null);
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        let tryNewToken = true;
        let alreadySet = false;
        let makeRequests = false;

        const token = await SecureStore.getItemAsync('token');

        if (!!token) {
            let userData = await getUser();
            if (!!userData && !!userData.email) {
                setStartingScreen('Tabs');
                setUser(userData);
                tryNewToken = false;
                alreadySet = true;
                makeRequests = true;
            }
        }

        if (!!tryNewToken) {
            const email = await SecureStore.getItemAsync('email');
            const password = await SecureStore.getItemAsync('password');

            if (!!email && !!password) {
                alreadySet = true;
                let loginStatus = await login(email, password);
                if (loginStatus == 'success') {
                    let userData = await getUser();
                    if (!!userData && !!userData.email) {
                        setStartingScreen('Tabs');
                        setUser(userData);
                        alreadySet = true;
                        makeRequests = true;
                    } else {
                        setStartingScreen('WelcomeBack');
                    }
                } else {
                    setStartingScreen('WelcomeBack');
                }
            }
        }

        if (!alreadySet) {
            setStartingScreen('Landing');
        }

        if (!!makeRequests) {
            await setUserOffers(await getUserOffers());
            await setAvailableOffers(await getAvailableOffers());
            await setAccounts(await getAccounts());

            const imageAssets = cacheImages([
              require('./images/hawkbanks.png'),
              require('./images/bankwhite.png'),
            ]);

            await Promise.all([...imageAssets]);
        } else {
            const imageAssets = cacheImages([
              require('./images/hawkbanks.png'),
              require('./images/bankwhite.png'),
            ]);
            await Promise.all([...imageAssets]);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady || !startingScreen) {
    return null;
  } else {
      async function hide() {
          await setTimeout(() => SplashScreen.hideAsync(), 2000);
      }

      hide();
  }

  const refreshAvailableOffers = () => {
      return getAvailableOffers()
        .then(data => {
            setAvailableOffers(data);
            return data
        })
  }

  const refreshAccounts = () => {
      return getAccounts()
        .then(data => {
            setAccounts(data);
            return data
        })
  }

  return (
    <>
    <StatusBar barStyle="light-content" translucent={true} />
    <MainStackNavigator
        startingScreen={startingScreen}
        availableOffers={availableOffers}
        userOffers={userOffers}
        accounts={accounts}
        refreshAccounts={refreshAccounts}
        refreshAvailableOffers={refreshAvailableOffers}
    />
    </>
  )
}
