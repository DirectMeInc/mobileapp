import React from 'react';
import {ScrollView} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Header from '../global/Header';
import ActionBarHome from '../global/ActionBar';
import TabOffers from './TabOffers';
import {navigate} from '../helpers';


export default class MyOffers extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <View style={{ flexDirection:'row', marginTop: 30}}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft:20, marginRight:30}}>
                        My Offers
                    </Text>
                </View>
                <TabOffers navigation={this.props.navigation} route={this.props.route}></TabOffers>
                <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}
