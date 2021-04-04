import React, { Component, useContext } from 'react';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Header from './Header';
import ActionBarHome from './ActionBar';

export default class AccountInfo extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <Header></Header>
                <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}