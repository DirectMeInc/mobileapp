import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import { ActionBar, View, Text, Button } from 'react-native-ui-lib';
import { Icon } from 'react-native-elements';
import {navigate} from '../helpers';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const offerScreens = [
    'MyOffers',
    'MyOfferInfo',
    'MyOfferInfoTasks',
    'MyOfferInfoAccounts',
    'MyOfferInfoRewards',
    'StartOffer',

]

const accountScreens = [
    'MyAccounts',
    'AccountInfo'
]

const findOffersScreens = [
    'FindOffersBase',
    'OfferPreview'
]

class ActionBarHome extends React.Component {
    render() {
      return (
          <View style={styles.bar}>
              <View style={styles.iconRow}>
                <TouchableOpacity
                    onPress={() => offerScreens.indexOf(this.props.route.name) == -1 ? this.props.navigation.navigate('Offers') : this.props.navigation.navigate('MyOffers')}
                    hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                  >
                  <View style={{backgroundColor:offerScreens.indexOf(this.props.route.name) != -1 ? '#323C56' : '#44589F' , borderRadius: 100, height: 50, width: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Icon style={{}} type='font-awesome-5' name={'coins'} size={24} color="white"/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => accountScreens.indexOf(this.props.route.name) == -1 ? this.props.navigation.navigate('AccountsTab') : this.props.navigation.navigate('MyAccounts')}
                    hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                  <View style={{backgroundColor: accountScreens.indexOf(this.props.route.name) != -1 ? '#323C56' : '#44589F', borderRadius: 100, height: 50, width: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Icon type='font-awesome-5' name={'wallet'} size={24} color="white"/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => findOffersScreens.indexOf(this.props.route.name) == -1 ? this.props.navigation.navigate('FindOffers') : this.props.navigation.navigate('FindOffersBase')}
                    hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                >
                  <View style={{backgroundColor: findOffersScreens.indexOf(this.props.route.name) != -1 ? '#323C56' : '#44589F', borderRadius: 100, height: 50, width: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Icon type='font-awesome-5' name={'search-dollar'} size={24} color="white"/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate(this, 'Profile', {})}  hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                  <View style={{backgroundColor: this.props.route.name == 'Profile' ? '#323C56' : '#44589F', borderRadius: 100, height: 50, width: 50, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Icon type='font-awesome-5' name={'user-circle'} size={24} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
          </View>
      )
    }
}

export default function(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return <ActionBarHome route={route} navigation={navigation} />;
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
