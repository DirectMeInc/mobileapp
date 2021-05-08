import React from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { Header } from 'react-native-elements';
import { View, Image } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const base = ['MyOffers', 'Profile', 'FindOffers', 'Accounts']

class OfficialHeader extends React.Component {
    constructor(props) {
      super(props);
      const startingScreen = !props.route.params?.prevScreen ? props.route.name : props.route.params.prevScreen;
      this.state = {
        bounceValue: new Animated.Value(base.indexOf(startingScreen) != - 1 ? -40 : 0),
        visible: true,
      };
    }

    componentDidMount() {
      this.unsubscribe2 = this.props.navigation.addListener('blur', () => {
          this.setState({visible: false});
      })

      this.unsubscribe1 = this.props.navigation.addListener('focus', () => {
            const prevRoute = this.props.route.params?.prevScreen;
            const newRoute = this.props.route.name;

            if ((prevRoute != undefined) && (prevRoute != newRoute)) {
              if ((base.indexOf(prevRoute) != -1) && (base.indexOf(newRoute) == -1)) {
                this.setState({bounceValue: new Animated.Value(-40), visible: true}, () => {
                  setTimeout(_ => {
                    Animated.spring(
                        this.state.bounceValue,
                        {
                          toValue: 0,
                          velocity: 3,
                          tension: 2,
                          friction: 8,
                          useNativeDriver: false,
                        }
                      ).start(({ finished }) => {
                        !!finished && (
                            this.setState({animationLock: false})
                        )
                      });
                    }, 200);
                })
              } else if ((base.indexOf(prevRoute) == -1) && (base.indexOf(newRoute) != -1)) {
                this.setState({bounceValue: new Animated.Value(0), visible: true}, () => {
                  setTimeout(_ => {
                    Animated.spring(
                        this.state.bounceValue,
                        {
                          toValue: -40,
                          velocity: 3,
                          tension: 2,
                          friction: 8,
                          useNativeDriver: false,
                        }
                      ).start(({ finished }) => {
                        !!finished && (
                            this.setState({animationLock: false})
                        )
                      });
                    }, 200);
                  })
              } else {
                  this.setState({visible: true})
              }
            }
          }
      );
      setTimeout(_ => {
        Animated.spring(
          this.state.bounceValue,
          {
            toValue: base.indexOf(this.props.route.name) == -1 ? 0 : -40,
            velocity: 3,
            tension: 2,
            friction: 8,
            useNativeDriver: false,
          }
        ).start();
      }, 200);
    }

    componentWillUnmount() {
      this.unsubscribe1();
      this.unsubscribe2();
    }

    render() {

        if (['Landing', 'Register', 'Login'].indexOf(this.props.route.name) != -1) {
            return null;
        }
        return (
            <Header
                placement="left"
                leftComponent={
                  <Animated.View
                    style={
                      {transform: [{translateX: this.state.bounceValue}],
                      opacity: !!this.state.visible ? 1 : 0
                    }
                    }
                  >
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity
                          onPress={() => {
                            this.props.params?.updatePrevBack && this.props.params.updatePrevBack(this.props.back != false);
                            // this.props.navigation.goBack();
                            const backScreen = this.props.prevRoutes[this.props.prevRoutes.length - 2].name;
                            this.props.navigation.navigate(backScreen, {prevScreen: this.props.route.name})
                          }}
                          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
                      >
                          <Icon
                              name='chevron-left'
                              size={18}
                              color='white'
                              style={{marginLeft: 10}}
                          />
                      </TouchableOpacity>
                      <Image style={{ marginLeft: 5, width: 150, height: 30}} source={require('../images/bankwhite.png')} resizeMode={'contain'} />
                  </View>
                  </Animated.View>
                }
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
                }}
            />
        )
    }
}

export default function(props) {
  const prevRoutes = useNavigationState(state => state.routes);

  return <OfficialHeader {...props} prevRoutes={prevRoutes} />;
}
