import React, { Component, useContext } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, Avatar } from 'react-native-ui-lib';
import Header from '../global/Header';
import ActionBarHome from '../global/ActionBar';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {navigate} from '../helpers';

export default class MyOfferInfoAccounts extends React.Component {


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
                        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Accounts</Text>
                    </View>

                    <View style={{flexDirection:'row', marginTop: 10 }}>
                        <Card containerStyle={{width: '95%', borderRadius:10, backgroundColor:'white', marginLeft: 10, marginTop: 10}}>
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

                <ActionBarHome></ActionBarHome>

            </View>
        )
    }
}
