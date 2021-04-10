import React, { Component, useContext } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, Avatar } from 'react-native-ui-lib';
import Header from './Header';
import ActionBarHome from './ActionBar';
import { FontAwesome } from '@expo/vector-icons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements';

export default class MyOfferInfoRewards extends React.Component {

    constructor(props){
        super(props);
        this.state  = {
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

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
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#ffece6'}}>
                        <View style={{flexDirection:'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Card containerStyle={{width: 50, height: 50, backgroundColor:'#ffdacc', marginLeft: 10}}>
                                    <Icon type='font-awesome-5' name={'trophy'} size={30} color="#ff571a" style={{textAlign: 'center', marginTop: 10}}/>
                                </Card>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#ff571a', marginLeft: 20}}>Reward of $300.00</Text>
                            </View>
                        </View>
                        </Card>
                    </View> 

                    <TouchableOpacity onPress={this.handleBackButtonClick}>
                        <Icons name='arrow-back-ios' size={30} color='#fff' style={{marginLeft: '3%', marginTop: 230, marginLeft: 20}}/>
                    </TouchableOpacity>

                <ActionBarHome></ActionBarHome>

            </View>
        )
    }
}