import React, {PureComponent} from 'react';
import {ScrollView, StyleSheet, Alert} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card, Avatar, ExpandableSection, RadioButton, RadioGroup } from 'react-native-ui-lib';
import Header from '../Header';
import ActionBarHome from '../ActionBar';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import {navigate} from '../helpers';

const COLORS = {
    ORANGE: {name: 'Orange', color: Colors.orange20},
    PURPLE: {name: 'Purple', color: Colors.purple20},
    GREEN: {name: 'Green', color: Colors.green20}
  };

export default class Profile extends PureComponent {

    static colors = COLORS;
    constructor(props) {
      super(props);
      this.state = {
        color: undefined,
        messageType: undefined,
        disabledSelectedValue: true,
        expanded: false,
        top: false,
      };
    }

    renderRadioButton(id, text) {
        return (
          <View row centerV marginB-5>
            <RadioButton value={id} label={text} size={15}/>
          </View>
        );
      }

    onExpand() {
        this.setState({
          expanded: !this.state.expanded
        });
    }

    getChevron() {
        if (this.state.expanded) {
          return this.state.top ? 'sort-down' : 'sort-up';
        }
        return this.state.top ? 'sort-up' : 'sort-down';
    }

    render() {
        const {expanded, top} = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
                <View style={{ ...styles.centering, marginTop: 20 }}>
                    <Avatar size={150} label='JD' labelColor='white' backgroundColor='#44589F' outlineColor="white" />
                    <Text color="white" style={{fontSize:25, marginTop: 12}}>
                        Jane Doe
                    </Text>
                </View>


                <ExpandableSection

                    top={top}
                    expanded={expanded}
                    sectionHeader={
                        <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'center'}}>
                            <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#e8effc'}} onPress={this.showDialog}>
                            <View style={{flexDirection:'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Card containerStyle={{width: 50, height: 50, backgroundColor:'#e6e6ff', marginLeft: 10}}>
                                        <FontAwesome name="envelope" size={30} color="#0088ff" style={{textAlign: 'center', marginTop: 10}}/>
                                    </Card>
                                    <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#00004d', marginLeft: 20}}>Email</Text>
                                </View>
                                <Icon type='font-awesome-5' name={this.getChevron()} size={40} style={{marginRight: 20}} color="#0088ff"/>
                            </View>
                            </Card>
                        </View>
                    }
                    onPress={() => this.onExpand()}
                >
                        <View style={{marginTop: -12, flexDirection: 'row', justifyContent: 'center'}}>
                            <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#e8effc'}} onPress={this.showDialog}>
                            <View style={{flexDirection:'column'}}>
                                <RadioGroup style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>
                                    {this.renderRadioButton(1, 'Receive all emails.')}
                                    {this.renderRadioButton(2, 'Receive only critical emails.')}
                                    {this.renderRadioButton(3, 'Receive no emails.')}
                                </RadioGroup>
                            </View>
                            </Card>
                        </View>
                </ExpandableSection>

                <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
                        <Card containerStyle={{width: '93%', borderRadius:10, backgroundColor:'#eff5ef'}} onPress={() => Alert.alert('We have sent an email to user@email.com')}>
                        <View style={{flexDirection:'row', marginTop: 20, marginBottom: 20, justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Card containerStyle={{width: 50, height: 50, backgroundColor:'#cfe2cf', marginLeft: 10}}>
                                    <FontAwesome name="lock" size={30} color="#437043" style={{textAlign: 'center', marginTop: 10}}/>
                                </Card>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, color: '#015401', marginLeft: 20}}>Change Password</Text>
                            </View>
                            <Icon type='font-awesome-5' name="sort-down" size={40} style={{marginRight: 20}} color="#437043"/>
                        </View>
                        </Card>
                </View>



                <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centering: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    icon: {
        alignSelf: 'center',
        color:"white",
        marginTop: 15,
        marginRight: 20,
      },

      card: {
          marginTop: 60,
          backgroundColor: '#5165AA',
          width: '90%',
          borderRadius: 10,
          height: 60,
          marginLeft: 20,
      },
      text: {
          color: 'white',
          marginTop: 20,
          marginLeft: 20,
          fontSize: 17,
          fontWeight: 'bold'
      },

      expandedCard: {
          backgroundColor: '#5165AA',
          width: '90%',
          height: 110,
          borderRadius: 10,
          marginTop: -20,
          marginLeft: 20,
      },

      expandedText: {
          color: 'white',
          marginTop: 30,
          fontSize: 17,
          textAlignVertical: 'center',
          marginLeft: 20,
          marginRight: 20,
      },
});
