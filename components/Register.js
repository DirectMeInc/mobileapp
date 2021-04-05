import React from 'react';
import { TextInput } from 'react-native'
import { View, Image, Text, Button, Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register({navigation}) {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center', backgroundColor: '#25315C'}}>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
                    <Image style={{ width: 250, height: 30 }} source={require('../images/bankwhite.png')} />
                </View>
                <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 40}}>   
                    Join BankScout!
                </Text> 
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} dark10 marginB-15 marginT-30>
                    Email
                </Text>
                <TextInput 
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{
                        height: 35,
                        width: 240,
                        borderWidth: 1,
                        borderColor: Colors.dark60,
                        borderRadius: 15,
                        paddingLeft: 10,
                        color: 'white'
                    }} 
                />
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} dark10 marginB-15 marginT-30>
                    First Name
                </Text>
                <TextInput 
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{
                        height: 35,
                        width: 240,
                        borderWidth: 1,
                        borderColor: Colors.dark60,
                        borderRadius: 15,
                        paddingLeft: 10,
                        color: 'white'
                    }} 
                />
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} dark10 marginB-15 marginT-30>
                    Last Name
                </Text>
                <TextInput 
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={{
                        height: 35,
                        width: 240,
                        borderWidth: 1,
                        borderColor: Colors.dark60,
                        borderRadius: 15,
                        paddingLeft: 10,
                        color: 'white'
                    }} 
                />
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} dark10 marginB-15 marginT-30>
                    Password
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={{
                            height: 35,
                            width: 240,
                            borderWidth: 1,
                            borderColor: Colors.dark60,
                            borderRadius: 15,
                            color: 'white'
                        }}
                    />
                    <Icon
                        name='eye'
                        size={22}
                        color='white'
                        style={{marginLeft: -32, marginTop: 5}}
                    />
                </View>

                <View style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Button
                        backgroundColor="#25315C"
                        label="Sign up"
                        labelStyle={{ fontWeight: '600', fontSize: 20, color: '#2BF594' }}
                        style={{ width: 145, marginTop: 40 }}
                        borderRadius={15}
                        outlineColor='#2BF594'
                        onPress={() => navigation.navigate('FindOffers')}
                    />
                </View>

                <Icon
                    name='chevron-left'
                    size={22}
                    color='white'
                    style={{marginLeft: -40, marginTop: 15}}
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    )
}