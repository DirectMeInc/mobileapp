import React, {PureComponent} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Card, Text, Image, ListItem, Carousel, Spacings, View, ExpandableSection, Switch} from 'react-native-ui-lib';
import { Icon } from 'react-native-elements';
import Header from './Header';
import ActionBarHome from './ActionBar';

export default class FAQ extends PureComponent {

    state = {
        expanded: false,
        top: false
    };
    
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

    getHeaderElement() {
        return (
            <Card style={styles.card}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}>
                    Why are banks willing to pick me?
                </Text>
                <Icon type='font-awesome-5' name={this.getChevron()} style={styles.icon} color="white"/>
                </View>
            </Card>
        );
    }


    render () {
        const {expanded, top} = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#25315C'}}>
            <View style={{ flexDirection: 'column', marginBottom: 0, paddingBottom: 0 }}>
            <ScrollView style={{ marginBottom: 80, paddingTop: 10 }}>
                <Header></Header>
                <View style={{ display: 'flex', flexDirection:'row', marginTop: 30 }}>
                    <Text style={{ fontSize: 30, color: '#2BF594', fontWeight: 'bold', position: 'absolute', marginLeft: 20}}>   
                        General FAQ
                    </Text> 
                </View>
                <ExpandableSection
                    top={top}
                    expanded={expanded}
                    sectionHeader={
                    <Card style={styles.card}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}>
                            Why are banks willing to pick me?
                        </Text>
                        <Icon type='font-awesome-5' name={this.getChevron()} style={styles.icon} color="white"/>
                        </View>
                    </Card>
                    }
                    onPress={() => this.onExpand()}
                >
                    <Card style={styles.expandedCard}>
                    <Text style={styles.expandedText}>
                        {'Banks love new customers, and they want more of your business. This is why they are willing to pay you directy.'}
                    </Text>
                    </Card>
                </ExpandableSection>

                <ExpandableSection
                    top={top}
                    expanded={expanded}
                    sectionHeader={
                        <Card style={styles.card2}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}>
                            What does BankScout do?
                        </Text>
                        <Icon type='font-awesome-5' name={this.getChevron()} style={styles.icon} color="white"/>
                        </View>
                    </Card>
                    }
                    onPress={() => this.onExpand()}
                >
                    <Card style={styles.expandedCard}>
                    <Text style={styles.expandedText}>
                        {'We provide a bunch of offers on our filtering tool.'}
                    </Text>
                    </Card>
                </ExpandableSection>

                <ExpandableSection
                    top={top}
                    expanded={expanded}
                    sectionHeader={
                        <Card style={styles.card2}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}>
                            What are Direct Deposits?
                        </Text>
                        <Icon type='font-awesome-5' name={this.getChevron()} style={styles.icon} color="white"/>
                        </View>
                    </Card>
                    }
                    onPress={() => this.onExpand()}
                >
                    <Card style={styles.expandedCard}>
                    <Text style={styles.expandedText}>
                        {'Direct deposits are any deposit that comes from a third party.'}
                    </Text>
                    </Card>
                </ExpandableSection>

                <ExpandableSection
                    top={top}
                    expanded={expanded}
                    sectionHeader={
                        <Card style={styles.card2}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}>
                            Can I sign up for any bank I want?
                        </Text>
                        <Icon type='font-awesome-5' name={this.getChevron()} style={styles.icon} color="white"/>
                        </View>
                    </Card>
                    }
                    onPress={() => this.onExpand()}
                >
                    <Card style={styles.expandedCard}>
                    <Text style={styles.expandedText}>
                        {'In most cases, there will be plenty of offers you qualify for.'}
                    </Text>
                    </Card>
                </ExpandableSection>


                <ExpandableSection
                    top={top}
                    expanded={expanded}
                    sectionHeader={
                        <Card style={styles.card2}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}>
                            How much does this cost?
                        </Text>
                        <Icon type='font-awesome-5' name={this.getChevron()} style={styles.icon} color="white"/>
                        </View>
                    </Card>
                    }
                    onPress={() => this.onExpand()}
                >
                    <Card style={styles.expandedCard}>
                    <Text style={styles.expandedText}>
                        {'For now, it is free!'}
                    </Text>
                    </Card>
                </ExpandableSection>

                <ExpandableSection
                    top={top}
                    expanded={expanded}
                    sectionHeader={
                        <Card style={styles.card2}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}>
                            Is this safe?
                        </Text>
                        <Icon type='font-awesome-5' name={this.getChevron()} style={styles.icon} color="white"/>
                        </View>
                    </Card>
                    }
                    onPress={() => this.onExpand()}
                >
                    <Card style={styles.expandedCard}>
                    <Text style={styles.expandedText}>
                        {'Absolutely. Opening a bank account is free and easy. It will also not impact your credit score.'}
                    </Text>
                    </Card>
                </ExpandableSection>

                <ExpandableSection
                    top={top}
                    expanded={expanded}
                    sectionHeader={
                        <Card style={styles.card2}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.text}>
                            Is this safe?
                        </Text>
                        <Icon type='font-awesome-5' name={this.getChevron()} style={styles.icon} color="white"/>
                        </View>
                    </Card>
                    }
                    onPress={() => this.onExpand()}
                >
                    <Card style={styles.expandedCard}>
                    <Text style={styles.expandedText}>
                        {'Absolutely. Opening a bank account is free and easy. It will also not impact your credit score.'}
                    </Text>
                    </Card>
                </ExpandableSection>


            </ScrollView>
            </View>
            <ActionBarHome></ActionBarHome>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

    card2: {
        marginTop: 27,
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