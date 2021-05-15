import React from 'react';
import { TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, TabBar } from 'react-native-ui-lib';
import Header from '../global/Header';
import ActionBarHome from '../global/ActionBar';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {navigate} from '../helpers';

export default class MyOfferInfo extends React.Component {
    render() {
        return (
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

                 <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'center'}}>
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#e8effc'}} onPress={() => navigate(this, 'MyOfferInfoTasks', {})}>
                        <View style={{flexDirection:'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Card containerStyle={{width: 50, height: 50, backgroundColor:'#e6e6ff', marginLeft: 10}}>
                                    <FontAwesome name="tasks" size={30} color="#0088ff" style={{textAlign: 'center', marginTop: 10}}/>
                                </Card>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#00004d', marginLeft: 20}}>Tasks</Text>
                            </View>
                            <FontAwesome name="chevron-right" size={30} color="#0088ff" style={{marginTop: 10, marginRight: 20}}/>
                        </View>
                        </Card>
                </View>

                <View style={{marginTop: 25, flexDirection: 'row', justifyContent: 'center'}}>
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#eff5ef'}} onPress={() => navigate(this, 'MyOfferInfoAccounts', {})}>
                        <View style={{flexDirection:'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Card containerStyle={{width: 50, height: 50, backgroundColor:'#cfe2cf', marginLeft: 10}}>
                                    <Icon type='font-awesome-5' name={'coins'} size={30} color="#437043" style={{textAlign: 'center', marginTop: 10}}/>
                                </Card>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#015401', marginLeft: 20}}>Accounts</Text>
                            </View>
                            <FontAwesome name="chevron-right" size={30} color="#437043" style={{marginTop: 10, marginRight: 20}}/>
                        </View>
                        </Card>
                </View>

                <View style={{marginTop: 25, flexDirection: 'row', justifyContent: 'center'}}>
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#ffece6'}} onPress={() => navigate(this, 'MyOfferInfoRewards', {})}>
                        <View style={{flexDirection:'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Card containerStyle={{width: 50, height: 50, backgroundColor:'#ffdacc', marginLeft: 10}}>
                                    <Icon type='font-awesome-5' name={'trophy'} size={30} color="#ff571a" style={{textAlign: 'center', marginTop: 10}}/>
                                </Card>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#ff571a', marginLeft: 20}}>Rewards</Text>
                            </View>
                            <FontAwesome name="chevron-right" size={30} color="#ff4500" style={{marginTop: 10, marginRight: 20}}/>
                        </View>
                        </Card>
                </View>

                <ActionBarHome></ActionBarHome>
            </View>
        )
    }

}
