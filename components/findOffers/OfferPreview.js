import React from 'react';
import { TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Header from '../global/Header';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ActionBarHome from '../global/ActionBar';
import OfferTabs from './OfferTabs';
import {navigate} from '../helpers';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { getOfferPreview } from '../../actions/offers';

const routes = [
    { key: 'tasks', title: 'Tasks' },
    { key: 'rewards', title: 'Rewards' },
    { key: 'accounts', title: 'Available Accounts' }
];

export default class OfferPreview extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            offer: null
        };
    }

    componentDidMount() {
        getOfferPreview(this.props.route.params.offerId)
            .then(offer => {
                this.setState({offer: offer})
            })
    }

    renderTasks() {
        return (
            null
        )
    }

    renderRewards() {
        return (
            null
        )
    }

    renderAccounts() {
        return (
            null
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <View style={{ flexDirection:'row', marginTop: 30}}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft: 20, marginRight: 30}}>
                        Chase | $150 Savings
                    </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
                <Button
                        backgroundColor="#25315C"
                        label="Start Offer"
                        labelStyle={{ fontWeight: '600', fontSize: 20, color: 'white' }}
                        style={{ width: 180, marginTop: 20}}
                        borderRadius={10}
                        outlineColor='white'
                        onPress={() => this.props.navigation.navigate(
                            'Offers',
                            {screen: 'StartOffer', params: {offerId: this.props.route.params.offerId}}
                        )}
                />
                </View>

                <TabView
                    navigationState={{ index: this.state.index, routes: routes }}
                    renderScene={
                      SceneMap({
                          tasks: this.renderTasks.bind(this),
                          rewards: this.renderRewards.bind(this),
                          accounts: this.renderAccounts.bind(this),
                      })
                    }
                    onIndexChange={(index) => this.setState({index: index})}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    style = {{ marginTop: 20 }}
                    renderTabBar={(props) => (
                      <TabBar
                          {...props}
                          indicatorStyle={{ backgroundColor: '#4C49C3' }}
                          style={{ backgroundColor: '#25315C' }}
                      />
                    )}
                />


            <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}
