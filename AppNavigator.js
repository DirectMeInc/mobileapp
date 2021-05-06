import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/user/Login';
import LandingScreen from './components/Landing';
import Header from './components/Header';
import RegisterScreen from './components/user/Register';
import ActionBarScreen from './components/ActionBar'
import FindOffersScreen from './components/base/FindOffers';
import OfferPageScreen from './components/OfferPage';
import FAQScreen from './components/FAQ';
import MyOffersScreen from './components/base/MyOffers';
import AccountsScreen from './components/base/Accounts';
import AccountInfoScreen from './components/AccountInfo';
import StartOfferScreen from './components/StartOffer';
import OnboardingScreen from './components/Onboarding';
import ProfileScreen from './components/base/Profile';
import MyOfferInfoScreen from './components/MyOfferInfo';
import MyOfferInfoTasksScreen from './components/MyOfferInfoTasks';
import MyOfferInfoAccountsScreen from './components/MyOfferInfoAccounts';
import MyOfferInfoRewardsScreen from './components/MyOfferInfoRewards';
const Stack = createStackNavigator()

function MainStackNavigator(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={props.startingScreen}
                screenOptions={({route, navigation}) => ({
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#101010'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: '#ffd700',
                    header: props => <Header route={route} navigation={navigation} {...props} />,
                    headerBackTitleVisible: false
                })}
                headerMode='float'
            >
                <Stack.Screen
                    name='Landing'
                    component={LandingScreen}
                    options={{ headerShown: false, animationEnabled: true }}
                />
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ headerShown: false, animationEnabled: true }}
                />
                <Stack.Screen
                    name='Register'
                    component={RegisterScreen}
                    options={{ headerShown: false, animationEnabled: true }}
                />
                <Stack.Screen
                    name='ActionBar'
                    component={ActionBarScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='FindOffers'
                    options={{ headerShown: true, animationEnabled: false }}
                >
                    {navProps => <FindOffersScreen
                        {...navProps}
                        refreshAvailableOffers={props.refreshAvailableOffers}
                        availableOffers={props.availableOffers}
                      />
                    }
                </Stack.Screen>
                <Stack.Screen
                    name='OfferPage'
                    component={OfferPageScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='StartOffer'
                    component={StartOfferScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='Onboarding'
                    component={OnboardingScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='FAQ'
                    component={FAQScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOffers'
                    options={{ headerShown: true, animationEnabled: false }}
                >
                    {navProps => <MyOffersScreen userOffers={props.userOffers} {...navProps} />}
                </Stack.Screen>
                <Stack.Screen
                    name='Accounts'
                    options={{ headerShown: true, animationEnabled: false }}
                >
                    {navProps => <AccountsScreen accounts={props.accounts} {...navProps} />}
                </Stack.Screen>
                <Stack.Screen
                    name='AccountInfo'
                    component={AccountInfoScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOfferInfo'
                    component={MyOfferInfoScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOfferInfoTasks'
                    component={MyOfferInfoTasksScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOfferInfoAccounts'
                    component={MyOfferInfoAccountsScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOfferInfoRewards'
                    component={MyOfferInfoRewardsScreen}
                    options={{ headerShown: true, animationEnabled: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator
