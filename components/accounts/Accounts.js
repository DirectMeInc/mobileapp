import React, { Component, useContext } from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Header from '../global/Header';
import ActionBarHome from '../global/ActionBar';
import {navigate} from '../helpers';

export default class Accounts extends React.Component {
    state = {
        refreshing: false
    }

    render() {
        console.log(this.props);
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
            <View style={{ flexDirection: 'column', marginBottom: 0, paddingBottom: 0 }}>
            <ScrollView
                style={{ paddingTop: 5 }}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={() => this.setState(
                      {refreshing: true},
                      () => this.props.refreshAccounts().then(data => this.setState({refreshing: false}))
                    )}
                  />
                }
            >
                    <View style={{ display: 'flex', flexDirection:'column', alignItems: 'center', marginTop: 30, marginLeft:30, marginRight:30, paddingBottom: 125}}>
                      <Card
                          // key={i}
                            containerStyle={{width: '100%', borderRadius:10, backgroundColor:'white', marginTop: 20, paddingBottom: '5%'}}
                            onPress={() => navigate(this, 'AccountInfo', {})}>
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

                </ScrollView>
            </View>
            <ActionBarHome></ActionBarHome>
            </View>

        )
    }
}
