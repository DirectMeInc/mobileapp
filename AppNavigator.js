import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/user/Login';
import LandingScreen from './components/user/Landing';
import Header from './components/global/Header';
import RegisterScreen from './components/user/Register';
import ActionBar from './components/global/ActionBar'
import FindOffersScreen from './components/findOffers/FindOffers';
import OfferPreviewScreen from './components/findOffers/OfferPreview';
import FAQScreen from './components/profile/FAQ';
import MyOffersScreen from './components/offers/MyOffers';
import AccountsScreen from './components/accounts/Accounts';
import AccountInfoScreen from './components/accounts/AccountInfo';
import StartOfferScreen from './components/offers/StartOffer';
import OnboardingScreen from './components/offers/Onboarding';
import ProfileScreen from './components/profile/Profile';
import MyOfferInfoScreen from './components/offers/MyOfferInfo';
import MyOfferInfoTasksScreen from './components/offers/MyOfferInfoTasks';
import MyOfferInfoAccountsScreen from './components/offers/MyOfferInfoAccounts';
import MyOfferInfoRewardsScreen from './components/offers/MyOfferInfoRewards';
import PlaidLinking from './components/offers/PlaidLinking';


const BaseStack = createStackNavigator();
const OfferStack = createStackNavigator();
const FindStack = createStackNavigator();
const AccountStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function AccountNavigator(props) {
    return (
        <AccountStack.Navigator
            screenOptions={({route, navigation}) => ({
                gestureEnabled: true,
                headerStyle: {
                    backgroundColor: '#101010'
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTintColor: '#ffd700',
                header: navProps => <Header
                    route={route}
                    navigation={navigation}
                />,
                headerBackTitleVisible: false
            })}
            headerMode='screen'
            initialRouteName='MyAccounts'
        >
            <AccountStack.Screen
                name='MyAccounts'
                options={{ headerShown: true, animationEnabled: false }}
            >
                {navProps => <AccountsScreen refreshAccounts={props.refreshAccounts} accounts={props.accounts} {...navProps} />}
            </AccountStack.Screen>
            <AccountStack.Screen
                name='AccountInfo'
                component={AccountInfoScreen}
                options={{ headerShown: true, animationEnabled: false }}
            />
        </AccountStack.Navigator>
    )
}

function OfferNavigator(props) {
    return (
        <OfferStack.Navigator
            screenOptions={({route, navigation}) => ({
                gestureEnabled: true,
                headerStyle: {
                    backgroundColor: '#101010'
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTintColor: '#ffd700',
                header: navProps => <Header
                    route={route}
                    navigation={navigation}
                />,
                headerBackTitleVisible: false
            })}
            headerMode='screen'
            initialRouteName='MyOffers'
        >
            <OfferStack.Screen
                name='MyOffers'
                options={{ headerShown: true, animationEnabled: false }}
            >
                {navProps => <MyOffersScreen userOffers={props.userOffers} {...navProps} />}
            </OfferStack.Screen>
            <OfferStack.Screen
                name='StartOffer'
                component={StartOfferScreen}
                options={{ headerShown: true, animationEnabled: false }}
            />
            <OfferStack.Screen
                name='MyOfferInfo'
                component={MyOfferInfoScreen}
                options={{ headerShown: true, animationEnabled: false }}
            />
            <OfferStack.Screen
                name='MyOfferInfoTasks'
                component={MyOfferInfoTasksScreen}
                options={{ headerShown: true, animationEnabled: false }}
            />
            <OfferStack.Screen
                name='MyOfferInfoAccounts'
                component={MyOfferInfoAccountsScreen}
                options={{ headerShown: true, animationEnabled: false }}
            />
            <OfferStack.Screen
                name='MyOfferInfoRewards'
                component={MyOfferInfoRewardsScreen}
                options={{ headerShown: true, animationEnabled: false }}
            />
            <OfferStack.Screen
                name="PlaidLinking"
                component={PlaidLinking}
                options={{ headerShown: false, animationEnabled: false }}
            />
        </OfferStack.Navigator>
    )
}

function FindOffersNavigator(props) {
    return (
        <FindStack.Navigator
            // initialRouteName={props.}
            screenOptions={({route, navigation}) => ({
                gestureEnabled: true,
                headerStyle: {
                    backgroundColor: '#101010'
                },
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerTintColor: '#ffd700',
                header: navProps => <Header
                    route={route}
                    navigation={navigation}
                />,
                headerBackTitleVisible: false
            })}
            headerMode='screen'
            initialRouteName='FindOffersBase'
        >
            <FindStack.Screen name="FindOffersBase" options={{ headerShown: true, animationEnabled: false }}>
                {tabProps => <FindOffersScreen
                    refreshAvailableOffers={props.refreshAvailableOffers}
                    availableOffers={props.availableOffers}
                    {...tabProps}
                  />
                }
            </FindStack.Screen>
            <FindStack.Screen
                name="OfferPreview"
                component={OfferPreviewScreen}
                options={{ headerShown: true, animationEnabled: false }}
            />
      </FindStack.Navigator>
  )
}

function TabNavigator(props) {
    return (
        <Tab.Navigator
          tabBar={tabProps => <></>}
          initialRouteName="FindOffers"
        >
            <Tab.Screen name="Offers" component={OfferNavigator} />
            <Tab.Screen name="AccountsTab">
                {tabProps => <AccountNavigator
                    refreshAccounts={props.refreshAccounts}
                    accounts={props.accounts}
                    {...tabProps}
                  />
                }
            </Tab.Screen>
            <Tab.Screen name="FindOffers">
                {tabProps => <FindOffersNavigator
                    refreshAvailableOffers={props.refreshAvailableOffers}
                    availableOffers={props.availableOffers}
                    {...tabProps}
                  />
                }
            </Tab.Screen>
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{ headerShown: true, animationEnabled: true }}
            />
        </Tab.Navigator>
    )
}

export default function BaseNavigator(props) {
    return (
        <NavigationContainer>
            <BaseStack.Navigator initialRouteName={props.startingScreen}>
                <BaseStack.Screen
                    name='Landing'
                    component={LandingScreen}
                    options={{ headerShown: false, animationEnabled: true }}
                />
                <BaseStack.Screen
                    name='Login'
                    options={{ headerShown: false, animationEnabled: true }}
                >
                    {navProps => <LoginScreen
                        {...navProps}
                        refreshAvailableOffers={props.refreshAvailableOffers}
                      />
                    }
                </BaseStack.Screen>
                <BaseStack.Screen
                    name='Register'
                    component={RegisterScreen}
                    options={{ headerShown: false, animationEnabled: true }}
                />
                <BaseStack.Screen
                    name='Tabs'
                    options={{ headerShown: false, animationEnabled: true }}
                >
                    {baseProps => <TabNavigator
                        availableOffers={props.availableOffers}
                        refreshAvailableOffers={props.refreshAvailableOffers}
                        accounts={props.accounts}
                        refreshAccounts={props.refreshAccounts}
                        {...baseProps}
                      />
                    }
                </BaseStack.Screen>
            </BaseStack.Navigator>
        </NavigationContainer>
    )
}
