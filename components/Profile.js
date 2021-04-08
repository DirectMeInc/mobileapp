import React, { Component, useContext } from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, Avatar } from 'react-native-ui-lib';
import Header from './Header';
import ActionBarHome from './ActionBar';
import { FontAwesome } from '@expo/vector-icons';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <Header></Header>
                <View style={{ ...styles.centering, marginTop: 20 }}>
                    <Avatar size={150} label='JD' labelColor={Colors.orange30} backgroundColor='#ffdfc2' />
                    <Text text40 color='white' marginT-20>
                        Jane Doe
                    </Text>
                </View>

                <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'center'}}>
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#e8effc'}}>
                        <View style={{flexDirection:'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Card containerStyle={{width: 50, height: 50, backgroundColor:'#e6e6ff', marginLeft: 10}}>
                                    <FontAwesome name="envelope" size={30} color="#0088ff" style={{textAlign: 'center', marginTop: 10}}/>
                                </Card>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#00004d', marginLeft: 20}}>Email</Text>
                            </View>
                            <FontAwesome name="chevron-right" size={30} color="#0088ff" style={{marginTop: 10, marginRight: 20}}/>
                        </View>
                        </Card>
                </View>

                <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#eff5ef'}}>
                        <View style={{flexDirection:'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Card containerStyle={{width: 50, height: 50, backgroundColor:'#cfe2cf', marginLeft: 10}}>
                                    <FontAwesome name="lock" size={30} color="#437043" style={{textAlign: 'center', marginTop: 10}}/>
                                </Card>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#00004d', marginLeft: 20}}>Password</Text>
                            </View>
                            <FontAwesome name="chevron-right" size={30} color="#437043" style={{marginTop: 10, marginRight: 20}}/>
                        </View>
                        </Card>
                </View>



                <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centering: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
});