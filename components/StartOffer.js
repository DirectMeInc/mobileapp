import React from 'react';
import {FlatList, ScrollView, StyleSheet, Alert} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';
import ActionBarHome from './ActionBar';

export default class OfferPage extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
            <View style={{ flexDirection: 'column', marginBottom: 0, paddingBottom: 0 }}>
            <ScrollView style={{ marginBottom: 80, paddingTop: 10 }}>
                <Header></Header>

                <View style={{flexDirection: 'column'}}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft: 20, marginRight: 30, marginTop: 40}}>   
                        Chase | $150 Savings 
                    </Text> 

                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
                    <Card
                        height={120}
                        width='95%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Card.Section
                            content={[
                            {text: 'Qualifications', text70: true, grey10: true},
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10}}
                        />
                        <Card.Section
                            content={[
                            {text: 'Offer available in all states!', text80: true},
                            {text: 'You must not have had an account with this bank in the previous 2 years.', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10}}
                        />
                    </Card>
                </View>

                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                    <Card
                        height={100}
                        width='95%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Card.Section
                            content={[
                            {text: 'Eligible Accounts', text70: true, grey10: true},
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10}}
                        />
                        <Card.Section
                            content={[
                            {text: 'Spend & Save: minimum fee is $1, and minimum to open is $10.', text80: true},
                            ]}
                            contentStyle={{marginBottom: 10}}
                        />
                    </Card>
                </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', position: 'absolute'}}>   
                            How do I start?
                        </Text> 
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', position: 'absolute', width: '80%'}}>   
                            1. Check above to make sure you qualify and select a proper account.
                    </Text> 
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', position: 'absolute', width: '80%'}}>   
                        2. Sign up and take a screenshot of the terms on the bank's website.
                    </Text> 
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', position: 'absolute', width: '80%'}}>   
                        3. Link your account with Chase to BankScout to track your progress!
                    </Text> 
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', position: 'absolute', width: '80%'}}>   
                        4. Let us know if we got anything wrong, or cancel the offer if you no longer want to do it.
                    </Text> 
                    </View>

                </View>
                
            </ScrollView>
                <ActionBarHome></ActionBarHome>
            </View>
            </View>
        )
    }
}