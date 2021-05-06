import React from 'react';
import { Text } from 'react-native';

export default class NewText extends React.Component {
    constructor(props) {
      super(props);
      this.style = {
          fontFamily: 'Helvetica'
      }
      if (!!props.style) {
          this.style = {...this.style, ...props.style}
      }
    }
    render() {
      return (
        <Text style={this.style}>
          {this.props.children}
        </Text>
      )
    }
}
