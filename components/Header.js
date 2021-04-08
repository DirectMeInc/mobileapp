import React from 'react';
import { Header } from 'react-native-elements';
import { View, Image } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class OfficialHeader extends React.Component {

    render() {
        return (
            <Header
                placement="left"
                leftComponent={<Image style={{ width: 150, height: 30}} source={require('../images/bankwhite.png')} resizeMode={'center'} /> }
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