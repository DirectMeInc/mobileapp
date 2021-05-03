import React, { Component, useContext, useState } from 'react';
import { useWindowDimensions, ScrollView } from 'react-native';
import { View, Image, Text, Card } from 'react-native-ui-lib';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icons from 'react-native-vector-icons/MaterialIcons';

const FirstRoute = () => (
    <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
        <Card containerStyle={{width: '95%', borderRadius: 10, backgroundColor:'white', marginTop: 10}}>
        <View style={{flexDirection:'row', marginTop: 20}}>
            <Icons name='account-balance' style={{ fontSize: 40, color: '#000099', marginLeft: 20 }}></Icons>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft:10, marginTop: 2}}>Savings</Text>
        </View>
        <View style={{flexDirection:'column', marginTop: 20, marginLeft: 20}}>
            <Text style={{fontSize: 15}}>Maintain savings of at least $15,000.</Text>
            <Text style={{fontSize: 15, marginTop: 10}}>Status: Start date must be set to before Sun, Feb. 14.</Text>
            <Text style={{fontSize: 15, marginTop: 10, marginBottom: 15}}>Duration: Until Sun, Feb. 14.</Text>
        </View>
        </Card>
    </View>
);

const SecondRoute = () => (
    <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
        <Card containerStyle={{width: '95%', borderRadius:10, backgroundColor:'white', marginTop: 10}}>
        <View style={{flexDirection:'row', marginTop: 20}}>
            <Image
                style={{ width: 50,
                    height: 50, marginLeft: 20}}
                source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
            />
            <View style={{flexDirection:'column', marginLeft: 20}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Chase Bank</Text>
                <Text style={{fontSize: 15, marginTop: 5}}>Savings</Text>
                <Text style={{fontSize: 15, marginTop: 15}}>Interest Rate: 0.0%</Text>
                <Text style={{fontSize: 15, marginTop: 10}}>Minimum Opening Balance: None!</Text>
                <Text style={{fontSize: 15, marginTop: 10, marginBottom: 15}}>Monthly fee of $5.</Text>

            </View>
        </View>
        </Card>
    </View>
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }} />
);

export default function OfferTabs() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Tasks' },
        { key: 'second', title: 'Available Accounts' },
        { key: 'third', title: 'Rewards' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#4C49C3' }}
            style={{ backgroundColor: '#25315C' }}
        />
    );

    return (
          <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style = {{ marginTop: 20 }}
          renderTabBar={renderTabBar}
          />
    );
  }
