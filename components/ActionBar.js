import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActionBar, View, Text, Button } from 'react-native-ui-lib';
import { Icon } from 'react-native-elements';

export default function ActionBarHome() {

    const navigation = useNavigation();

    return (
        <View style={styles.bar}>
            <View style={styles.iconRow}>
              <TouchableOpacity onPress={() => navigation.navigate('MyOffers')} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Icon type='font-awesome-5' name={'coins'} size={24} color="white"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Accounts')} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Icon type='font-awesome-5' name={'chart-bar'} size={24} color="white"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('FindOffers')} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Icon type='font-awesome-5' name={'search-dollar'} size={24} color="white"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('FAQ')} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Icon type='font-awesome-5' name={'question-circle'} size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Icon type='font-awesome-5' name={'user-circle'} size={24} color="white" />
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        position: 'absolute',
        backgroundColor: '#44589F',
        borderColor: 'white',
        borderRadius: 5,
        shadowOpacity: 0.2,
        bottom: 0,
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    iconRow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-evenly',
        marginBottom: 30,
    }
});
