import React, { Component, useContext } from 'react';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Header from './Header';
import ActionBarHome from './ActionBar';

export default class Accounts extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <Header></Header>
                <View style={{ flexDirection:'row', marginTop: 30}}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft:20, marginRight:30}}>   
                        My Accounts
                    </Text> 
                </View>


                    <View style={{ flex: 1, backgroundColor: '#25315C', marginTop: 50, marginLeft: 20}}>
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#C4C4C4'}} onPress={() => navigate('AccountInfo')}>
                        <View style={{flexDirection:'row', marginTop: 20}}>
                            <Image
                                style={{ width: 50,
                                    height: 50, marginLeft: 20}}
                                source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
                            />
                            <View style={{flexDirection:'column', marginLeft: 20}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Chase Bank</Text>
                                <Text style={{fontSize: 15, marginTop: 5}}>Regular Checking</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', marginTop: 30, marginLeft: 20, marginBottom: 10}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Balance:</Text>
                            <Text style={{fontSize: 20, color: '#3F518F', marginLeft: 2}}>-$100.00</Text>
                        </View>
                        </Card>
                    </View>

                <ActionBarHome></ActionBarHome>
            </View>

        )
    }
}