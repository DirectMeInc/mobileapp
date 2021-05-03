import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/user/Login';
import LandingScreen from './components/Landing';
import RegisterScreen from './components/user/Register';
import ActionBarScreen from './components/ActionBar'
import FindOffersScreen from './components/FindOffers';
import OfferPageScreen from './components/OfferPage';
import FAQScreen from './components/FAQ';
import MyOffersScreen from './components/MyOffers';
import AccountsScreen from './components/Accounts';
import AccountInfoScreen from './components/AccountInfo';
import StartOfferScreen from './components/StartOffer';
import OnboardingScreen from './components/Onboarding';
import ProfileScreen from './components/user/Profile';
import MyOfferInfoScreen from './components/MyOfferInfo';
import MyOfferInfoTasksScreen from './components/MyOfferInfoTasks';
import MyOfferInfoAccountsScreen from './components/MyOfferInfoAccounts';
import MyOfferInfoRewardsScreen from './components/MyOfferInfoRewards';
const Stack = createStackNavigator()

function MainStackNavigator(startingScreen) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={startingScreen}
                screenOptions={{
                gestureEnabled: true,
                headerStyle: {
                    backgroundColor: '#101010'
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTintColor: '#ffd700',
                headerBackTitleVisible: false
                }}
                headerMode='float'
            >
                <Stack.Screen
                    name='Landing'
                    component={LandingScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='Register'
                    component={RegisterScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='ActionBar'
                    component={ActionBarScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='FindOffers'
                    component={FindOffersScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='OfferPage'
                    component={OfferPageScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='StartOffer'
                    component={StartOfferScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='Onboarding'
                    component={OnboardingScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='FAQ'
                    component={FAQScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOffers'
                    component={MyOffersScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='Accounts'
                    component={AccountsScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='AccountInfo'
                    component={AccountInfoScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOfferInfo'
                    component={MyOfferInfoScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOfferInfoTasks'
                    component={MyOfferInfoTasksScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOfferInfoAccounts'
                    component={MyOfferInfoAccountsScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Stack.Screen
                    name='MyOfferInfoRewards'
                    component={MyOfferInfoRewardsScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator
