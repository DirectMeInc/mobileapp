import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActionBar, View, Text, Button } from 'react-native-ui-lib';
import { Icon } from 'react-native-elements';

export default function ActionBarHome() {

    const navigation = useNavigation(); 
    
    return (
        <View style={styles.bar}>
            <View style={styles.iconRow}>
                <Icon type='font-awesome-5' name={'coins'} size={24} color="white" onPress={() => navigation.navigate('MyOffers')}/>
                <Icon type='font-awesome-5' name={'chart-bar'} size={24} color="white" onPress={() => navigation.navigate('Accounts')}/>
                <Icon type='font-awesome-5' name={'search-dollar'} size={24} color="white" onPress={() => navigation.navigate('FindOffers')}/>
                <Icon type='font-awesome-5' name={'question-circle'} size={24} color="white" onPress={() => navigation.navigate('FAQ')} />
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
        height: 70,
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
        marginBottom: 20,
    }
});