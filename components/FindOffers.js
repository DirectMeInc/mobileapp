import React from 'react';
import {FlatList, ScrollView, StyleSheet, Alert} from 'react-native';
import { View, Image, Text, Button, Colors, PanningProvider, Dialog, Constants, Slider, Card } from 'react-native-ui-lib';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from './Header';
import ActionBarHome from './ActionBar';

const INITIAL_VALUE = 0;
const COLOR = Colors.blue30;

export default class FindOffers extends React.Component {

    constructor(props) {
        super(props);
    
        this.SCROLL_TYPE = {
          NONE: 'none',
          VERTICAL: 'vertical',
          HORIZONTAL: 'horizontal'
        };
    
        this.pannableTitle = {title: 'Filter By'};
        this.title = 'This is a Dialog';
        this.supportedOrientations = ['portrait', 'landscape'];
        this.colors = [
          {value: Colors.red10, label: 'Red10'},
          {value: Colors.red30, label: 'Red30'},
          {value: Colors.red50, label: 'Red50'},
          {value: Colors.red70, label: 'Red70'},
          {value: Colors.blue10, label: 'Blue10'},
          {value: Colors.blue30, label: 'Blue30'},
          {value: Colors.blue50, label: 'Blue50'},
          {value: Colors.blue70, label: 'Blue70'},
          {value: Colors.purple10, label: 'Purple10'},
          {value: Colors.purple30, label: 'Purple30'},
          {value: Colors.purple50, label: 'Purple50'},
          {value: Colors.purple70, label: 'Purple70'},
          {value: Colors.green10, label: 'Green10'},
          {value: Colors.green30, label: 'Green30'},
          {value: Colors.green50, label: 'Green50'},
          {value: Colors.green70, label: 'Green70'},
          {value: Colors.yellow10, label: 'Yellow10'},
          {value: Colors.yellow30, label: 'Yellow30'},
          {value: Colors.yellow50, label: 'Yellow50'},
          {value: Colors.yellow70, label: 'Yellow70'}
        ];
    
        this.state = {
          state: null,
          bank: null,
          panDirection: PanningProvider.Directions.DOWN,
          position: 'bottom',
          scroll: this.SCROLL_TYPE.NONE,
          showHeader: true,
          isRounded: true,
          showDialog: false,
          color: COLOR,
          sliderValue1: INITIAL_VALUE,
          sliderValue2: INITIAL_VALUE,
          sliderValue3: INITIAL_VALUE,

        };

        this.onSliderValueChange1 = this.onSliderValueChange1.bind(this);
        this.onSliderValueChange2 = this.onSliderValueChange2.bind(this);
        this.onSliderValueChange3 = this.onSliderValueChange3.bind(this);
      }

      onSliderValueChange1 = (value) => {
        this.setState({sliderValue1: value});
      }

      onSliderValueChange2 = (value) => {
        this.setState({sliderValue2: value});
      }

      onSliderValueChange3 = (value) => {
        this.setState({sliderValue3: value});
      }
    
      titlePressed = ({title}) => {
        Alert.alert('Pressed on', title);
      };
    
      setPanDirection = panDirection => {
        if (panDirection !== this.state.panDirection) {
          this.setState({panDirection});
        }
      };
    
      setPosition = position => {
        if (position !== this.state.position) {
          this.setState({position});
        }
      };
    
      setScroll = scroll => {
        if (scroll !== this.state.scroll) {
          this.setState({scroll});
        }
      };
    
      toggleShowHeader = () => {
        this.setState({
          showHeader: !this.state.showHeader
        });
      };
    
      toggleIsRounded = () => {
        this.setState({
          isRounded: !this.state.isRounded
        });
      };
    
      showDialog = () => {
        this.setState({showDialog: true});
      };
    
      hideDialog = () => {
        this.setState({showDialog: false});
      };
    
      getWarning = () => {
        const {showHeader, scroll, panDirection} = this.state;
        if (!showHeader && scroll !== this.SCROLL_TYPE.NONE) {
          return <Text color={Colors.red30}>It is recommended to have pannable header with scrollable content</Text>;
        } else if (showHeader && panDirection !== PanningProvider.Directions.DOWN) {
          return <Text color={Colors.red30}>It is recommended to have pannable header with direction=down</Text>;
        }
      };
    
      getMessage = () => {
        const {panDirection, position, scroll} = this.state;
    
        return `Panning direction: ${panDirection ? panDirection : 'none'}
    Position: ${position ? position : 'center'}
    Scroll: ${scroll}`;
      };
    
      renderPannableHeader = props => {
        const {title} = props;
        return (
          <View>
            <View margin-20>
              <Text>{title}</Text>
            </View>
            <View height={2} bg-dark70/>
          </View>
        );
      };
    
      renderPlainContent = () => {
        return (
          <View margin-20 right>
            <Button text70 label="Cancel" link onPress={this.hideDialog}/>
          </View>
        );
      };
    
      keyExtractor = item => {
        return item.value;
      };
    
      renderVerticalItem = ({item: color}) => {
        return (
          <Text text50 margin-20 color={color.value}>
            {color.label}
          </Text>
        );
      };
    
      renderVerticalScroll = () => {
        return (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.verticalScroll}
            data={this.colors}
            renderItem={this.renderVerticalItem}
            keyExtractor={this.keyExtractor}
          />
        );
      };
    
      renderHorizontalItem = ({item: color}) => {
        return <View flex width={100} height={1000} style={{backgroundColor: color.value}}/>;
      };
    
      renderHorizontalScroll = () => {
        return (
          <View marginT-20 pointerEvents="box-none">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.colors}
              renderItem={this.renderHorizontalItem}
              keyExtractor={this.keyExtractor}
            />
            <View row pointerEvents="none" style={styles.horizontalTextContainer}>
              <Text>
                {'\u25c0'} Scroll me {'\u25b6'}
              </Text>
            </View>
          </View>
        );
      };
    
      renderContent = () => {
        const {scroll, showHeader} = this.state;
    
        let content;
        switch (scroll) {
          case this.SCROLL_TYPE.VERTICAL:
            content = this.renderVerticalScroll();
            break;
          case this.SCROLL_TYPE.HORIZONTAL:
            content = this.renderHorizontalScroll();
            break;
          case this.SCROLL_TYPE.NONE:
          default:
            content = this.renderPlainContent();
            break;
        }
    
        const data = (
          <View spread flex={scroll !== this.SCROLL_TYPE.NONE}>
            <View marginT-20 marginH-20>
              {!showHeader && <Text text50>{this.title}</Text>}
            </View>
            <View style={{flexDirection:"row", justifyContent: "space-between", zIndex: 2}}>
                <DropDownPicker
                        items={[
                            {label: 'California', value: 'California'},
                        ]}
                        defaultValue={this.state.state}
                        placeholder="State"
                        containerStyle={{width: 120, height: 40, marginLeft: 20}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            state: item.value
                        })}
                />
                <DropDownPicker
                        items={[
                            {label: 'Chase', value: 'Chase'},
                            {label: 'Wells Fargo', value: 'Wells Fargo'},

                        ]}
                        defaultValue={this.state.bank}
                        placeholder="Bank"
                        containerStyle={{width: 120, height: 40, marginRight: 20}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            bank: item.value
                        })}
                />
            </View>

            <Text style={{marginLeft: 20, marginTop: 25, fontSize: 15}}>Savings Required</Text>
            <View row centerV style={{marginTop: 20}}>
                <Slider 
                    onValueChange={this.onSliderValueChange1} 
                    value={INITIAL_VALUE} 
                    minimumValue={0} 
                    maximumValue={10000} 
                    step={100} 
                    containerStyle={styles.sliderContainer}
                />
                <Text bodySmall grey30 style={styles.text}>${this.state.sliderValue1}</Text>
            </View>

            <Text style={{marginLeft: 20, marginTop: 25, fontSize: 15}}>Monthly Direct Deposits Required</Text>
            <View row centerV style={{marginTop: 20}}>
                <Slider 
                    onValueChange={this.onSliderValueChange2} 
                    value={INITIAL_VALUE} 
                    minimumValue={0} 
                    maximumValue={4000} 
                    step={100} 
                    containerStyle={styles.sliderContainer}
                />
                <Text bodySmall grey30 style={styles.text}>${this.state.sliderValue2}</Text>
            </View>

            <Text style={{marginLeft: 20, marginTop: 25, fontSize: 15}}>Monthly Debit Purchases Required</Text>
            <View row centerV style={{marginTop: 20}}>
                <Slider 
                    onValueChange={this.onSliderValueChange3} 
                    value={INITIAL_VALUE} 
                    minimumValue={0} 
                    maximumValue={100} 
                    step={10} 
                    containerStyle={styles.sliderContainer}
                />
                <Text bodySmall grey30 style={styles.text}>{this.state.sliderValue3}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    backgroundColor="#25315C"
                    label="Apply"
                    labelStyle={{ fontWeight: '600', fontSize: 20, color: 'white' }}
                    style={{ width: 100, marginTop: 20}}
                    borderRadius={10}
                    onPress={this.hideDialog}
                />
            </View>


            {content}
          </View>


        );
    
        return data;
      };
    
      getDialogKey = height => {
        const {position} = this.state;
        return `dialog-key-${position}-${height}`;
      };
    
      renderDialog = () => {
        const {showDialog, panDirection, position, scroll, showHeader, isRounded} = this.state;
        const renderPannableHeader = showHeader ? this.renderPannableHeader : undefined;
        const height = scroll !== this.SCROLL_TYPE.NONE ? '70%' : undefined;
    
        return (
          <Dialog
            migrate
            useSafeArea
            key={this.getDialogKey(height)}
            top={position === 'top'}
            bottom={position === 'bottom'}
            height={height}
            panDirection={panDirection}
            containerStyle={isRounded ? styles.roundedDialog : styles.dialog}
            visible={showDialog}
            onDismiss={this.hideDialog}
            renderPannableHeader={renderPannableHeader}
            pannableHeaderProps={this.pannableTitle}
            supportedOrientations={this.supportedOrientations}
          >
            {this.renderContent()}
          </Dialog>
        );
      };

    render() {
        const { navigate } = this.props.navigation;

        return (
          <View style={{ flex: 1, backgroundColor: '#25315C'}}>
            <View style={{ flexDirection: 'column', marginBottom: 0, paddingBottom: 0 }}>
              <ScrollView style={{ marginBottom: 80, paddingTop: 10 }}>
                <Header></Header>

            <View style={{ display: 'flex', flexDirection:'row', marginTop: 30 }}>
                <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft:20, marginRight:30}}>   
                    Find Offers 
                </Text> 
                <Button
                        backgroundColor="#25315C"
                        label="Filter"
                        labelStyle={{ fontWeight: '600', fontSize: 20, color: 'white' }}
                        style={{ width: 80, marginLeft: 310}}
                        borderRadius={10}
                        outlineColor='white'
                        onPress={this.showDialog}
                />
            </View>
            <View style={{ marginTop: 30, marginLeft:20, marginRight:30}}>
                <DropDownPicker
                        items={[
                            {label: 'Recommended', value: 'Recommended'},
                            {label: 'Bonus', value: 'Bonus'},
                            {label: 'Savings Required', value: 'Savings Required'},
                            {label: 'Monthly Direct Deposits', value: 'Monthly Direct Deposits'},
                            {label: 'Monthly Direct Transactions', value: 'Monthly Direct Transactions'},
                            {label: 'Expiration (Earliest)', value: 'Expiration (Earliest)'},
                            {label: 'Expiration (Latest)', value: 'Expiration (Latest)'},


                        ]}
                        defaultValue={this.state.state}
                        placeholder="Sort By"
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa', width: '100%'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            state: item.value
                        })}
                />
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', textAlign:'center', marginTop:20}}>
                    <Card
                        height={120}
                        width='45%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => navigate('OfferPage')}
                    >

                        <Card.Section imageSource={{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}} imageStyle={{width: 50, height: 50, marginTop: 10}}/>
                        <Card.Section
                            content={[
                            {text: 'Chase', text70: true, grey10: true},
                            {text: '$150 Savings', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10, alignItems: 'center'}}
                        />
                    </Card>

                    <Card
                        height={120}
                        width='45%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 20}}
                    >

                        <Card.Section imageSource={{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}} imageStyle={{width: 50, height: 50, marginTop: 10}}/>
                        <Card.Section
                            content={[
                            {text: 'Chase', text70: true, grey10: true},
                            {text: '$150 Savings', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10, alignItems: 'center'}}
                        />
                    </Card>
                </View>

                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', textAlign:'center', marginTop:20}}>
                    <Card
                        height={120}
                        width='45%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
                    >

                        <Card.Section imageSource={{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}} imageStyle={{width: 50, height: 50, marginTop: 10}}/>
                        <Card.Section
                            content={[
                            {text: 'Chase', text70: true, grey10: true},
                            {text: '$150 Savings', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10, alignItems: 'center'}}
                        />
                    </Card>

                    <Card
                        height={120}
                        width='45%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 20}}
                    >

                        <Card.Section imageSource={{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}} imageStyle={{width: 50, height: 50, marginTop: 10}}/>
                        <Card.Section
                            content={[
                            {text: 'Chase', text70: true, grey10: true},
                            {text: '$150 Savings', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10, alignItems: 'center'}}
                        />
                    </Card>
                </View>

                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', textAlign:'center', marginTop:20}}>
                    <Card
                        height={120}
                        width='45%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
                    >

                        <Card.Section imageSource={{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}} imageStyle={{width: 50, height: 50, marginTop: 10}}/>
                        <Card.Section
                            content={[
                            {text: 'Chase', text70: true, grey10: true},
                            {text: '$150 Savings', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10, alignItems: 'center'}}
                        />
                    </Card>

                    <Card
                        height={120}
                        width='45%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 20}}
                    >

                        <Card.Section imageSource={{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}} imageStyle={{width: 50, height: 50, marginTop: 10}}/>
                        <Card.Section
                            content={[
                            {text: 'Chase', text70: true, grey10: true},
                            {text: '$150 Savings', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10, alignItems: 'center'}}
                        />
                    </Card>
                </View>

                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', textAlign:'center', marginTop:20}}>
                    <Card
                        height={120}
                        width='45%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
                    >

                        <Card.Section imageSource={{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}} imageStyle={{width: 50, height: 50, marginTop: 10}}/>
                        <Card.Section
                            content={[
                            {text: 'Chase', text70: true, grey10: true},
                            {text: '$150 Savings', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10, alignItems: 'center'}}
                        />
                    </Card>

                    <Card
                        height={120}
                        width='45%'
                        containerStyle={{backgroundColor:'#C4C4C4',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 20}}
                    >

                        <Card.Section imageSource={{uri: 'https://i.pinimg.com/originals/70/4a/1e/704a1e534e8dc0138eee3ded449555d5.png'}} imageStyle={{width: 50, height: 50, marginTop: 10}}/>
                        <Card.Section
                            content={[
                            {text: 'Chase', text70: true, grey10: true},
                            {text: '$150 Savings', text80: true}
                            ]}
                            contentStyle={{marginBottom: 10, marginTop: 10, alignItems: 'center'}}
                        />
                    </Card>
                </View>


            </View>

            {this.renderDialog()}
            </ScrollView>
            </View>
            <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dialog: {
      backgroundColor: Colors.white
    },
    roundedDialog: {
      backgroundColor: Colors.white,
      marginBottom: Constants.isIphoneX ? 0 : 20,
      borderRadius: 12
    },
    button: {
      margin: 5,
      alignSelf: 'flex-start'
    },
    verticalScroll: {
      marginTop: 20
    },
    horizontalTextContainer: {
      alignSelf: 'center',
      position: 'absolute',
      top: 10
    },
    slider: {
        marginVertical: 6
    },
    sliderContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    text: {
        width: 50,
    },
});