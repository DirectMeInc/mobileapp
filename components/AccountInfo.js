import React, { Component, useContext } from 'react';
import {StyleSheet, Alert, FlatList, ScrollView} from 'react-native';
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

    renderRow(row, id) {
    
        return (
          <View>
            <ListItem
              activeOpacity={0.3}
              height={77.5}
            >
              <ListItem.Part left>
                <Image
                  source={{uri: row.mediaUrl}}
                  style={styles.image}
                />
              </ListItem.Part>
              <ListItem.Part middle column containerStyle={[styles.border, {paddingRight: 17}]}>
                <ListItem.Part containerStyle={{marginBottom: 3}}>
                  <Text style={{flex: 1, marginLeft: 10, fontWeight: 'bold', color: 'darkblue'}} numberOfLines={1}>{row.name}</Text>
                  <Text style={{marginTop: 2, fontSize: 12, color: 'red'}}>{row.amount}</Text>
                </ListItem.Part>
                <ListItem.Part>
                  <Text style={{flex: 1, marginLeft: 10}} text90 dark40 numberOfLines={1}>{row.time}</Text>
                </ListItem.Part>
              </ListItem.Part>
            </ListItem>
          </View>
        );
      }
    render() {
        let orders = [
            {
                name: 'Netflix',
                amount: '-$100.00',
                time: 'Just now',
            },
            {
                name: 'Spotify',
                amount: '-$30.00',
                time: '3 hrs',
            }
        ]
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
            <View style={{ flexDirection: 'column', marginBottom: 0, paddingBottom: 0 }}>
            <ScrollView style={{ marginBottom: 80, paddingTop: 10 }}>
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

                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#6F8CF6', marginTop: 30, marginLeft:20}}>Transactions</Text>

                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#dcdcdc', marginTop: 30, marginLeft:20}}>Today</Text>

{/*                 <View style={{flexDirection:'row', marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <ListItem
                        activeOpacity={0.3}
                        height={60}
                        containerStyle={{backgroundColor: '#e6f3ff', borderRadius: 30, width: '80%'}}
                    >
                    <View>
                        <View style={{marginTop: 5}}>
                            <ListItem.Part>
                                <Text style={{marginLeft: 20, color: '#004480', fontWeight: 'bold', fontSize: 15}}>Merchant</Text>
                                <Text style={{marginLeft: 150, color: '#009900', fontWeight: 'bold', fontSize: 15}}>-$100.00</Text>
                            </ListItem.Part>
                        </View>
                        <View style={{marginTop: 2}}>
                            <ListItem.Part>
                                <Text style={{marginLeft: 20, color: '#004480', fontWeight: 'bold', fontSize: 12}}>Just now</Text>
                            </ListItem.Part>
                        </View>
                    </View>

                    </ListItem>
                </View> */}

{/*                 <ListItem
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
                            </ListItem.Part>
                        </View>

                        <View style={{marginTop: 50}}>
                            <ListItem.Part>
                                <Text style={{marginLeft: 5}}>Description: <Text style={{fontWeight: 'bold'}}>Credit</Text></Text>
                                <Text style={{marginLeft: 100, fontWeight: 'bold', color: '#2EA849'}}>+ $100.00</Text>
                            </ListItem.Part>
                        </View>
                    </View>

                </ListItem> */}

            <View style={{marginTop: 10}}>
                  <FlatList
                        data={orders}
                        renderItem={({item, index}) => this.renderRow(item, index)}
                  />
            </View>

            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#dcdcdc', marginTop: 30, marginLeft:20}}>30 April 2021</Text>

            <View style={{marginTop: 10}}>
                  <FlatList
                        data={orders}
                        renderItem={({item, index}) => this.renderRow(item, index)}
                  />
            </View>




            </ScrollView>
            </View>
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