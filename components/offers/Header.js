import React from 'react';
import { TouchableOpacity, Animated, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { View, Image } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const base = ['MyOffers', 'Profile', 'FindOffersBase', 'MyAccounts']

export default class OfficialHeader extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <Header
                placement="center"
                leftComponent={
                  ((base.indexOf(this.props.route.name) == -1) && !!this.props.navigation.canGoBack())
                      ? <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.goBack();
                          }}
                          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                      >
                          <Icon
                              name='chevron-left'
                              size={22}
                              color='white'
                              style={{marginLeft: 15}}
                          />
                      </TouchableOpacity>
                      : null
                }
                centerComponent={
                    base.indexOf(this.props.route.name) == -1 ? <Image style={{ marginLeft: 5, width: 150, height: 30}} source={require('../../images/bankwhite.png')} resizeMode={'contain'} />
                    : (
                      <Text style={{ fontSize: 23, color: '#2BF594', fontWeight: 'bold'}}>
                        {this.props.route.name == 'MyOffers' ? 'My Offers' : this.props.route.name == 'FindOffersBase' ? 'Find Offers' : this.props.route.name == 'MyAccounts' ? 'My Accounts' : ''}
                      </Text>
                    )
                }
                    // <Image style={{ marginLeft: 5, width: 150, height: 30}} source={require('../../images/bankwhite.png')} resizeMode={'contain'} />
                // }
                rightComponent={<View style={{ flexDirection:'row', marginRight: 15}}>
                        <Icon
                            name='bell'
                            size={22}
                            color='white'
                        />
                    </View>}
                containerStyle={{
                    backgroundColor: '#25315C',
                    justifyContent: 'space-around',
                    alignContent: 'center'
                    // borderBottomWidth:0
                }}
            />
        )
    }
}

// export default function(props) {
//   const prevRoutes = useNavigationState(state => state.routes);
//
//   return <OfficialHeader {...props} prevRoutes={prevRoutes} />;
// }
