import React, { Component, useContext } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, Avatar } from 'react-native-ui-lib';
import Header from './Header';
import ActionBarHome from './ActionBar';
import { FontAwesome } from '@expo/vector-icons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements';

export default class MyOfferInfoRewards extends React.Component {

    render() {
        return(
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <Header></Header>
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
                        <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Rewards</Text>
                    </View>

                    <View style={{marginTop: 25, flexDirection: 'row', justifyContent: 'center'}}>
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#C4C4C4', height: 80}}>
                        <View style={{flexDirection:'row', marginTop: 20}}>
                                <Icon type='font-awesome-5' name={'trophy'} size={30} style={{textAlign: 'center', marginLeft: 20}} color={'#c8981e'}/>
                                <Text style={{fontSize: 20,  marginTop: 5, marginLeft: 20, fontWeight: 'bold'}}>Reward of $300.00</Text>
                        </View>
                        </Card>
                    </View> 

                <ActionBarHome></ActionBarHome>

            </View>
        )
    }
}