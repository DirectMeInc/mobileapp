import React, { Component, useContext } from 'react';
import {StyleSheet, Alert, FlatList, ScrollView} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, ListItem, ActionBar } from 'react-native-ui-lib';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from './Header';
import ActionBarHome from './ActionBar';

export default class AccountInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            state: null,
        };
    }

    renderRow(row, id) {
    
        return (
            <ListItem
              height={60.5}
              containerStyle={{backgroundColor:"#25315C"}}
            >
              <ListItem.Part left>
              </ListItem.Part>
              <ListItem.Part middle column containerStyle={[styles.border, {paddingRight: 17}]}>
                <ListItem.Part containerStyle={{marginBottom: 3}}>
                  <Text style={{flex: 1, marginLeft: 10, fontWeight: 'bold', color: 'white'}} numberOfLines={1}>{row.name}</Text>
                  <Text style={{marginTop: 2, fontSize: 13, color: 'white'}}>{row.amount}</Text>
                </ListItem.Part>
                <ListItem.Part>
                  <Text style={{flex: 1, marginLeft: 10}} text90 dark40 numberOfLines={1}>{row.time}</Text>
                </ListItem.Part>
              </ListItem.Part>
            </ListItem>
        );
      }
    render() {
        let orders = [
            {
                name: 'Netflix',
                amount: '-$100.00',
                time: '09:12',
            },
            {
                name: 'Spotify',
                amount: '-$30.00',
                time: '16:27',
            },
            {
                name: 'Target',
                amount: '-$100.00',
                time: '15:12',
            },
        ]
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <FlatList
                ListHeaderComponent={
                    <View style={{ flexDirection: 'column', marginBottom: 0, paddingBottom: 0 }}>
                    <Header></Header>

                    <View style={{flexDirection:'row', marginTop: 30, marginLeft: 20}}>
                        <Image
                            style={{ width: 60,
                                height: 60}}
                            source= {{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}}
                        />
                        <View style={{flexDirection:'column', marginLeft: 30}}>
                            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>Chase Bank</Text>
                            <Text style={{fontSize: 15, color: 'white', marginTop: 5}}>Regular Checking</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection:'column', marginTop:15}}>
                            <Text style={{fontSize: 15, color: 'white'}}>Monthly direct deposits of at least $500.</Text>
                            <Text style={{fontSize: 15, color: 'white', marginTop: 10}}>Used for: $300 Account Package.</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Current Balance: <Text style={{fontSize: 20, color: '#6F8CF6', fontWeight:'bold'}}>-$100.00</Text></Text>
                    </View>

                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#6F8CF6', marginTop: 30, marginLeft:20}}>Transactions</Text>

                    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#2BF594', marginTop: 30, marginLeft:20, marginBottom: 15}}>Today</Text>

                    <View
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 0.2,
                        }}
                    />
                </View>
                }
                data={orders}
                renderItem={({item, index}) => this.renderRow(item, index)}
                keyExtractor={(item, index) => index.toString()}
                />
                <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    border: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.dark70
    }
});