import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native-ui-lib';

export default function SplashScreen() {
    return (
        <View style={styles.container} >
            <Image style={{ width: 50, height: 50}} source={require('../images/hawkbanks.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });