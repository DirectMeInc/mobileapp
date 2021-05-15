import React from 'react';
import {FlatList, ScrollView, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ActionBarHome from '../global/ActionBar';
import { FontAwesome } from '@expo/vector-icons';
import {navigate} from '../helpers';
import PlaidLink from '@burstware/expo-plaid-link';
import {getLinkToken} from '../../actions/link';


export default class PlaidLinking extends React.Component {

    constructor(props){
        super(props);
        this.state  = {
            linkToken: null
        }
    }

    componentDidMount() {
        console.log('linking params');
        console.log(this.props.route.params);
        getLinkToken()
            .then(token => {
                this.setState({linkToken: token})
            })
    }

    render() {
        const { navigate } = this.props.navigation;

        if (!this.state.linkToken) {
            return null;
        }
        console.log(this.state.linkToken);

        return (
            <PlaidLink
              linkToken={this.state.linkToken}
              onEvent={(event) => console.log(event)}
              onExit={(exit) => this.props.navigation.goBack()}
              onSuccess={(success) => console.log(success.publicToken)}
            />
        )
    }
}
