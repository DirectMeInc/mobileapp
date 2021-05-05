import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActionBar, View, Text, Button } from 'react-native-ui-lib';
import { Icon } from 'react-native-elements';
import {navigate} from './helpers';

class ActionBarHome extends React.Component {
    render() {
      return (
          <View style={styles.bar}>
              <View style={styles.iconRow}>
                <TouchableOpacity onPress={() => navigate(this, 'MyOffers', {})} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                  <Icon type='font-awesome-5' name={'coins'} size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate(this, 'Accounts', {})} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                  <Icon type='font-awesome-5' name={'chart-bar'} size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate(this, 'FindOffers', {})} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                  <Icon type='font-awesome-5' name={'search-dollar'} size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate(this, 'Profile', {})}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                  <Icon type='font-awesome-5' name={'user-circle'} size={24} color="white" />
                </TouchableOpacity>
              </View>
          </View>
      )
    }
}

export default function(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return <ActionBarHome {...props} route={route} navigation={navigation} />;
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
