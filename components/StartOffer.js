import React from 'react';
import {FlatList, ScrollView, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';
import ActionBarHome from './ActionBar';
import { FontAwesome } from '@expo/vector-icons';
import {navigate} from './helpers';

export default class OfferPage extends React.Component {

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
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
            <View style={{ flexDirection: 'column', marginBottom: 0, paddingBottom: 0 }}>
            <ScrollView style={{ marginBottom: 145, paddingTop: 10 }}>


                <View style={{flexDirection: 'column'}}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft: 20, marginRight: 30, marginTop: 40}}>
                        Chase | $150 Savings
                    </Text>

                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
                    <Card
                        key={1}
                        style={{ marginBottom: 20, width: '90%' }}
                        containerStyle={{backgroundColor:'#e8effc'}}
                        borderRadius={20}
                        marginH-19
                    >
                        <View padding-20 borderRadius={20}>
                            <Text text40 color={Colors.grey10} marginV-8>
                                Qualifications  <FontAwesome name="file-text-o" size={24} color="black" />
                        </Text>

                            <Text text70 color='#0d3172' marginT-5>
                                Offer available in all states!
                            </Text>
                            <Text text70 color='#0d3172' marginT-5>
                                You must not have had an account with this bank in the previous 2 years.
                            </Text>
                        </View>
                    </Card>
                </View>













                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
                    <Card
                        key={1}
                        style={{ marginBottom: 20, width: '90%' }}
                        containerStyle={{backgroundColor:'#e8effc'}}
                        borderRadius={20}
                        marginH-19
                    >
                        <View padding-20 borderRadius={20}>
                            <Text text40 color={Colors.grey10} marginV-8>
                                Eligible Accounts  <FontAwesome name="user-circle" size={24} color="black" />
                        </Text>

                            <Text text70 color='#0d3172' marginT-5>
                                Spend and Save: minimum fee is $1, and minimum to open is $10.
                            </Text>
                        </View>
                    </Card>
                </View>

{/*                     <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
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
                    </View> */}

                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                        <Button
                            backgroundColor="#25315C"
                            outlineColor='white'
                            label="How do I start?"
                            marginR-5
                            labelStyle={{ fontWeight: '600', fontSize: 20, color: 'white' }}
                            style={{ width: 200 }}
                            borderRadius={10}
                            onPress={() => push('Onboarding')}
                        />
                    </View>

                </View>

            </ScrollView>
                <ActionBarHome></ActionBarHome>
            </View>
            </View>
        )
    }
}
