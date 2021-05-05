import React, { Component, useContext } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, Avatar } from 'react-native-ui-lib';
import Header from './Header';
import ActionBarHome from './ActionBar';
import { FontAwesome } from '@expo/vector-icons';
import MyOfferInfoTaskTabs from './MyOfferInfoTaskTabs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {navigate} from './helpers';

export default class MyOfferInfoTasks extends React.Component {

    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>

                    <View style={{flexDirection:'row', marginTop: 30, marginLeft: 20}}>
                            <Image
                                style={{ width: 60,
                                    height: 60}}
                                source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
                            />
                            <View style={{flexDirection:'column', marginLeft: 30}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Chase Bank</Text>
                                <Text style={{fontSize: 15, color: 'white', marginTop: 5}}>$150 Savings</Text>
                            </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 15, color: '#2BF594'}}>Waiting for 1 task to be completed.</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop: 30, marginLeft: 20}}>
                        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Tasks</Text>
                    </View>
                    <MyOfferInfoTaskTabs/>

                <ActionBarHome></ActionBarHome>

            </View>
        )
    }
}
