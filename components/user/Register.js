import React from 'react';
import { TextInput, Alert } from 'react-native';
import { View, Image, Text, Button, Colors } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Register extends React.Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        showPassword: false,
        icon: 'eye',
        emailProblem: false,
        firstNameProblem: false,
        lasttNameProblem: false,
        passwordProblem: false,
    }

    register() {
        let emailProblem = null;
        let firstNameProblem = null;
        let lastNameProblem = null;
        let passwordProblem = null;

        if (!this.state.email) {
            emailProblem = 'An email address is required. '
        } else {
          var re = /\S+@\S+\.\S+/;
          if (!re.test(this.state.email)) {
            emailProblem = this.state.email + ' is not a valid email address. '
          }
        }
        if (!this.state.firstName) {
            firstNameProblem = 'A first name is required. '
        }
        if (!this.state.lastName) {
            lastNameProblem = 'A last name is required. '
        }
        if (!this.state.password) {
            passwordProblem = 'A password is required. '
        } else {
          const password = this.state.password;
          let sufficientLength = null;
          let hasCapital = null;
          let hasLower = null;
          let hasNumber = null;
          if (password.length < 8) {
              sufficientLength = "8 characters"
          }
          if (password === password.toLowerCase()) {
              hasCapital = "1 uppercase letter"
          }
          if (password === password.toUpperCase()) {
              hasLower = "1 lowercase letter"
          }
          if (!(/\d/.test(password))) {
              hasNumber = "1 number"
          }

          const errors = [sufficientLength, hasCapital, hasLower, hasNumber].filter(a => !!a)
          if (errors.length == 1) {
              passwordProblem = "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number. Your password does not have at least " + errors[0];
          }
          if (errors.length > 0) {
              const totalString = errors.slice(0, -1).join(', ') + ', and ' + errors.slice(-1);
              passwordProblem = "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number. Your password does not have at least " + totalString;
          }
        }

        let problems = [emailProblem, firstNameProblem, lastNameProblem, passwordProblem].filter(a => !!a);
        if (problems.length > 0) {
          Alert.alert(
            "There are issues with the information provided",
            problems.join('\n'),
            [
              {
                text: "Fix",
                onPress: () =>
                    !!emailProblem ? this.firstTextInput.focus()
                  : !!firstNameProblem ? this.secondTextInput.focus()
                  : !!lastNameProblem ? this.thirdTextInput.focus()
                  : this.fourthTextInput.focus()
              }
            ]
          );
        } else {
          alert('success');
          // this.props.navigation.navigate('FindOffers');
        }
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

    checkFirstName() {
        this.setState({firstNameProblem: !this.state.firstName});
    }

    checkLastName() {
        this.setState({lastNameProblem: !this.state.lastName});
    }

    checkPassword() {
        let passwordProblem = false;
        const password = this.state.password;
        if (
          (password.length < 8) ||
          (password === password.toLowerCase()) ||
          (password === password.toUpperCase()) ||
          (!(/\d/.test(password)))
        ) {
            passwordProblem = true;
        }
        this.setState({passwordProblem: passwordProblem});
    }

    // componentDidMount() {
    //     this.firstTextInput.focus();
    // }

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
                          onPress={() => this.props.navigation.navigate('Landing')}
                      />
                      <Image style={{ width: 250, height: 30 }} source={require('../../images/bankwhite.png')} />
                  </View>
                  <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontWeight: 'bold', marginTop: 40}}>
                      Join BankScout!
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
                      First Name
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                      <TextInput
                          ref={(input) => { this.secondTextInput = input; }}
                          autoCorrect={false}
                          autoCompleteType='name'
                          enablesReturnKeyAutomatically={true}
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
                          onChangeText={text => this.setState({firstName: text}, () => this.state.firstNameProblem && this.checkFirstName())}
                          onSubmitEditing={() => {
                            this.checkFirstName();
                            this.thirdTextInput.focus();
                          }}
                          onEndEditing={() => this.checkFirstName()}
                          value={this.state.firstName}
                      />
                      {
                          this.state.firstNameProblem && (
                              <Icon
                                  name='exclamation-triangle'
                                  size={22}
                                  color='red'
                                  style={{marginLeft: -32, marginTop: 5}}
                                  onPress={() => Alert.alert(
                                      'Please enter a first name',
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
                  <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} dark10 marginB-15 marginT-30>
                      Last Name
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                      <TextInput
                          ref={(input) => { this.thirdTextInput = input; }}
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
                          autoCompleteType='name'
                          enablesReturnKeyAutomatically={true}
                          returnKeyType="next"
                          onSubmitEditing={() => this.fourthTextInput.focus()}
                          onSubmitEditing={() => {
                            this.checkLastName();
                            this.fourthTextInput.focus();
                          }}
                          onEndEditing={() => this.checkLastName()}
                          onChangeText={text => this.setState({lastName: text}, () => this.state.lastNameProblem && this.checkLastName())}
                          value={this.state.lastName}
                      />
                      {
                          this.state.lastNameProblem && (
                              <Icon
                                  name='exclamation-triangle'
                                  size={22}
                                  color='red'
                                  style={{marginLeft: -32, marginTop: 5}}
                                  onPress={() => Alert.alert(
                                      'Please enter a last name',
                                      '',
                                      [
                                        {
                                          text: "Fix",
                                          onPress: () => this.thirdTextInput.focus()
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
                          ref={(input) => { this.fourthTextInput = input; }}
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
                            this.register();
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
                                      'Please enter a password containing at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.',
                                      '',
                                      [
                                        {
                                          text: "Fix",
                                          onPress: () => this.fourthTextInput.focus()
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
                          label="Sign up"
                          labelStyle={{ fontWeight: '600', fontSize: 20, color: '#2BF594' }}
                          style={{
                            width: 145,
                            marginTop: 40
                          }}
                          borderRadius={15}
                          outlineColor='#2BF594'
                          onPress={() => this.register()}
                      />
                  </View>
              </View>
          </View>
          </KeyboardAwareScrollView>
      )
    }
}
