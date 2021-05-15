import React from 'react';
import { TextInput, Alert } from 'react-native';
import { View, Image, Text, Button, Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import {login} from '../../actions/user';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {navigate} from '../helpers';

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        showPassword: false,
        icon: 'eye',
        emailProblem: false,
        passwordProblem: false,
    }

    submit() {
        let emailProblem = null;
        if (!this.state.email) {
            emailProblem = 'valid email address';
        } else {
          var re = /\S+@\S+\.\S+/;
          if (!re.test(this.state.email)) {
            emailProblem = 'valid email address';
          }
        }
        let passwordProblem = !this.state.password ? 'password' : null;

        if (emailProblem || passwordProblem) {
            Alert.alert(
                'Please enter a ' + [emailProblem, passwordProblem].filter(a => !!a).join(' and ') + ' to log in',
                '',
                [
                  {
                    text: "Fix",
                    onPress: () => emailProblem ? this.firstTextInput.focus() : this.secondTextInput.focus()
                  }
                ]
            )
        }

        login(this.state.email, this.state.password)
            .then(data => {
                if (data == 'success') {
                    this.props.refreshAvailableOffers().then(data => {
                        navigate(this, 'Tabs', {});
                    })
                } else if (data == 'incorrect') {
                    Alert.alert(
                        'Incorrect username or password',
                        "Please try again or reset your password",
                        [
                          {
                            text: "Try again",
                            onPress: () => {
                              this.setState({password: '', emailProblem: false, passwordProblem: false}, () => this.secondTextInput.focus());
                            }
                          },
                          {
                            text: "Reset password",
                            onPress: () => alert('TODO: implement')
                          }
                        ]
                    )
                } else if (data == 'inactive') {
                    alert('TODO: implement');
                }
            })

        // login(this.state.email, this.state.password)
        //     .then(data => {
        //         alert(data);
        //     })
    }

    checkEmail() {
        let emailProblem = false;
        if (!this.state.email) {
            emailProblem = true;
        } else {
          var re = /\S+@\S+\.\S+/;
          if (!re.test(this.state.email)) {
            emailProblem = true;
          }
        }
        this.setState({emailProblem: emailProblem})
    }

    checkPassword() {
        this.setState({passwordProblem: !this.state.password})
    }

    render() {
        return (
          <KeyboardAwareScrollView style={{backgroundColor: '#25315C'}}>
          <View style={{ flex: 1, flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
              <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 80 }}>
                      <Icon
                          name='chevron-left'
                          size={22}
                          color='white'
                          style={{marginLeft: -40}}
                          onPress={() => navigate(this, 'Landing', {})}
                      />
                      <Image style={{ width: 250, height: 30 }} source={require('../../images/bankwhite.png')} />
                  </View>
                  <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 40}}>
                      Log In
                  </Text>
                  <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} dark10 marginB-15 marginT-30>
                          Email
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                      <TextInput
                          ref={(input) => { this.firstTextInput = input; }}
                          autoCapitalize='none'
                          autoFocus={true}
                          autoCorrect={false}
                          style={{
                              height: 35,
                              width: 240,
                              borderWidth: 1,
                              borderColor: Colors.dark60,
                              borderRadius: 15,
                              paddingLeft: 10,
                              color: 'white'
                          }}
                          returnKeyType="next"
                          autoCompleteType='email'
                          keyboardType='email-address'
                          enablesReturnKeyAutomatically={true}
                          onChangeText={text => this.setState({email: text}, () => this.state.emailProblem && this.checkEmail())}
                          onSubmitEditing={() => {
                             this.checkEmail();
                             this.secondTextInput.focus();
                          }}
                          onEndEditing={() => this.checkEmail()}
                          value={this.state.email}
                      />
                      {
                          this.state.emailProblem && (
                              <Icon
                                  name='exclamation-triangle'
                                  size={22}
                                  color='red'
                                  style={{marginLeft: -32, marginTop: 5}}
                                  onPress={() => Alert.alert(
                                      'Please enter a valid email address',
                                      '',
                                      [
                                        {
                                          text: "Fix",
                                          onPress: () => this.firstTextInput.focus()
                                        }
                                      ]
                                  )}
                              />
                          )
                      }
                  </View>
                  <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} dark10 marginB-15 marginT-30>
                      Password
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                      <TextInput
                          ref={(input) => { this.secondTextInput = input; }}
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={!this.state.showPassword}
                          enablesReturnKeyAutomatically={true}
                          passwordrules="minlength: 8; required: lower; required: upper; required: digit;"
                          style={{
                              height: 35,
                              width: 240,
                              borderWidth: 1,
                              borderColor: Colors.dark60,
                              borderRadius: 15,
                              paddingLeft: 10,
                              color: 'white'
                          }}
                          autoCompleteType='password'
                          onChangeText={text => this.setState({password: text}, () => this.state.passwordProblem && this.checkPassword())}
                          onSubmitEditing={() => {
                            this.checkPassword();
                            this.submit();
                          }}
                          onEndEditing={() => this.checkPassword()}
                          value={this.state.password}
                      />
                      <Icon
                          name={this.state.icon}
                          size={22}
                          color='white'
                          style={{marginLeft: -32, marginTop: 5}}
                          onPress={() => this.setState(prevState => ({
                              icon: prevState.icon == 'eye' ? 'eye-slash' : 'eye',
                              showPassword: !prevState.showPassword
                          }))}
                      />
                      {
                          this.state.passwordProblem && (
                              <Icon
                                  name='exclamation-triangle'
                                  size={22}
                                  color='red'
                                  style={{marginLeft: -50, marginTop: 5}}
                                  onPress={() => Alert.alert(
                                      'Please enter a password to log in',
                                      '',
                                      [
                                        {
                                          text: "Fix",
                                          onPress: () => this.secondTextInput.focus()
                                        }
                                      ]
                                  )}
                              />
                          )
                      }
                  </View>

                  <View style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                      <Button
                          backgroundColor="#25315C"
                          label="Submit"
                          labelStyle={{ fontWeight: '600', fontSize: 20, color: '#2BF594' }}
                          style={{ width: 145, marginTop: 40 }}
                          borderRadius={15}
                          outlineColor='#2BF594'
                          onPress={() => this.submit()}
                      />
                  </View>
              </View>
          </View>
          </KeyboardAwareScrollView>
        )
    }
}
