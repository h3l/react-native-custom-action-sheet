'use strict'

var React = require('react-native');
var { StyleSheet, Text, TouchableOpacity, View } = React;

var Button = React.createClass({
  render: function() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  buttonText: {
    color: '#223e4d',
    alignSelf: 'center',
    fontSize: 17
  },
  button: {
    height: 36,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    // borderRadius: 6,
    // marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = Button
