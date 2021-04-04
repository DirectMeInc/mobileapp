import React, { Component, useContext } from 'react';
import {StyleSheet, Alert, FlatList} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, ListItem } from 'react-native-ui-lib';
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
    render() {
        return (
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
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Current Balance: <Text style={{fontSize: 20, color: '#6F8CF6', fontWeight:'normal'}}>-$100.00</Text></Text>
                </View>

                <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 30, marginLeft:20}}>Transactions</Text>

                <ListItem
                    activeOpacity={0.3}
                    height={60.5}
                    containerStyle={{marginTop: 10, backgroundColor: '#C4C4C4'}}
                >
                    <View style={{marginTop: 5}}>
                        <ListItem.Part>
                            <Text style={{marginLeft: 5}}>Posted Date: <Text style={{fontWeight: 'bold'}}>1/15/21</Text></Text>
                            <Text style={{marginLeft: 90}}>Current Balance: <Text style={{fontWeight: 'bold'}}>-$100.00</Text></Text>
                        </ListItem.Part>
                    </View>
                </ListItem>

                <ListItem
                    activeOpacity={0.3}
                    height={120.5}
                    containerStyle={{backgroundColor: '#E5E5E5'}}
                >
                    <View style={{flexDirection: 'column'}}>
                        <View style={{marginTop: 5}}>
                            <ListItem.Part>
                                <Text style={{marginLeft: 5}}>Merchant on <Text style={{fontWeight: 'bold'}}>1/15/21</Text></Text>
                                <Text style={{marginLeft: 100}}>Category:</Text>
                                <DropDownPicker
                                    items={[
                                        {label: 'Other', value: 'Other'},
                                    ]}
                                    defaultValue={this.state.state}
                                    placeholder="Other"
                                    containerStyle={{width: 100, height: 40, marginLeft: 5}}
                                    style={{backgroundColor: '#fafafa'}}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    dropDownStyle={{backgroundColor: '#fafafa'}}
                                    onChangeItem={item => this.setState({
                                        state: item.value
                                    })}
                                />
{/*                                 <ModalDropdown 
                                    options={['Other', 'Other']}
                                    defaultValue='Select'
                                    style={{ alignSelf: 'flex-end',
                                    width: 55,
                                    height: 35,
                                    marginLeft: 10,
                                    borderWidth: 0,
                                    borderRadius: 10,
                                    backgroundColor: 'cornflowerblue',}}
                                    textStyle={{ marginVertical: 10,
                                        marginHorizontal: 6,
                                        fontSize: 12,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        textAlignVertical: 'center'}}
                                    dropdownTextStyle={{textAlign: 'center'}}
                                /> */}
                            </ListItem.Part>
                        </View>

                        <View style={{marginTop: 50}}>
                            <ListItem.Part>
                                <Text style={{marginLeft: 5}}>Description: <Text style={{fontWeight: 'bold'}}>Credit</Text></Text>
                                <Text style={{marginLeft: 100, fontWeight: 'bold', color: '#2EA849'}}>+ $100.00</Text>
                            </ListItem.Part>
                        </View>
                    </View>

                </ListItem>

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