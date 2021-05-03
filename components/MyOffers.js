import React from 'react';
import {ScrollView} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Header from './Header';
import ActionBarHome from './ActionBar';
import TabOffers from './TabOffers';


export default class MyOffers extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <Header></Header>
                <View style={{ flexDirection:'row', marginTop: 30}}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft:20, marginRight:30}}>
                        My Offers
                    </Text>
                </View>
                <TabOffers></TabOffers>
                <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}
