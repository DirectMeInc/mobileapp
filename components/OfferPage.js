import React from 'react';
import { TouchableOpacity } from 'react-native';
import Header from './Header';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ActionBarHome from './ActionBar';
import OfferTabs from './OfferTabs';

export default class OfferPage extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <Header></Header>

                <View style={{ flexDirection:'row', marginTop: 40}}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft: 20, marginRight: 30}}>   
                        Chase | $150 Savings 
                    </Text> 
                </View>

                <View style={{ flexDirection:'row', marginTop: 40, justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                    <View style={{ flexDirection:'column', marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                    <Icons name='account-balance' style={{ fontSize: 40, color: 'white' }}/>
                        <Text style={{ fontSize: 15, color: 'white'}}>   
                            Savings
                        </Text> 
                    </View>
                    <View style={{ flexDirection:'column', marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                    <Icons name='arrow-right-alt' style={{ fontSize: 60, color: 'white'}}></Icons>
                    </View>
                    <View style={{ flexDirection:'column', marginTop: 30, justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                    <Icons name='emoji-events' style={{ fontSize: 40, color: 'white'}}></Icons>
                        <Text style={{ fontSize: 15, color: 'white'}}>   
                            $300.00
                        </Text> 
                    </View>
                </View>

                <View style={{ flexDirection:'row', marginTop: 20, justifyContent: 'center', alignItems: 'center', textAlign:'center'}}>
                    <Text style={{ fontSize: 15, color: '#2BF594'}}>   
                        Reward of $300.00
                    </Text> 
                </View>

                <OfferTabs></OfferTabs>

                <TouchableOpacity onPress={this.handleBackButtonClick}>
                    <Icons name='arrow-back-ios' size={30} color='#fff' style={{marginLeft: '3%', marginBottom: 100, marginLeft: 20}}/>
                </TouchableOpacity>

                <ActionBarHome></ActionBarHome>


                
            </View>
        )
    }
}