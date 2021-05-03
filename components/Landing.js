import React from 'react';
import { TextInput } from 'react-native'
import { View, Image, Text, Button, Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Landing extends React.Component {
    render() {
        return (
          <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center', backgroundColor: '#25315C'}}>
              <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 80 }}>
                      <Image style={{ width: 250, height: 30 }} source={require('../images/bankwhite.png')} />
                  </View>
                  <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 110}}>
                      Find, track and complete over $4,000 worth of offers with ease.
                  </Text>

                  <View style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                      <Button
                          backgroundColor="#25315C"
                          label="Create account"
                          labelStyle={{ fontWeight: '600', fontSize: 20, color: '#2BF594' }}
                          style={{ marginTop: 50 }}
                          borderRadius={15}
                          outlineColor='#2BF594'
                          onPress={() => this.props.navigation.navigate("Register")}
                      />
                  </View>
                  <Text
                      style={{
                          fontSize: 16, marginTop: 40, fontWeight: 'bold',
                          color: 'white', textAlign: 'center'
                      }}
                      // onPress={() => this.props.navigation.navigate("Login")}
                  >
                          Already have an account? <Text style={{color: '#2BF594'}} onPress={() => this.props.navigation.navigate("Login")}>Log in</Text>
                  </Text>
              </View>
          </View>
        )
    }
}
