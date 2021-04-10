import React, { Component, useContext, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
  
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }} />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#25315C' }} />
);
  
export default function TabOffers() {
    const layout = useWindowDimensions();
    const navigation = useNavigation();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Current' },
        { key: 'second', title: 'Completed' },
        { key: 'third', title: 'Cancelled' },
    ]);
  
    const renderScene = SceneMap({
        first: () =>
        (<View style={{ flex: 1, backgroundColor: '#25315C' }}>
            <Card containerStyle={{width: '95%', borderRadius: 10, backgroundColor:'#C4C4C4', marginLeft: 10, marginTop: 10}} onPress={() => navigation.navigate('MyOfferInfo')}>
            <View style={{flexDirection:'row', marginTop: 20}}>
                <Image
                    style={{ width: 50,
                        height: 50, marginLeft: 20}}
                    source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
                />
                <View style={{flexDirection:'column', marginLeft: 20}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Chase Bank</Text>
                    <Text style={{fontSize: 15, marginTop: 5}}>$150 Savings</Text>
                    <ProgressBar progress={0.5} color={'#5EA365'} style={{marginTop: 15}} />
                    <Text style={{fontSize: 15, marginTop: 10}}>1 of 2 tasks completed</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop: 30, marginLeft: 10, marginBottom: 10}}>
                <Text style={{fontSize: 15}}>Bank Phone Number:</Text>
                <Text style={{fontSize: 15, color: '#3F518F', marginLeft: 2}}>1-123-456-7890</Text>
            </View>
            </Card>
        </View>)
        ,
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
            style = {{ marginTop: 50 }}
            renderTabBar={renderTabBar}
          />
    );
  }