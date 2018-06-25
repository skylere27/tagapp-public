/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/logo2.png')} style={{width: 300, height: 150}}/>
        <Text>TAG Public Version</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  formInput: {
        height: 10,
        width: 200,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
  },
  button: {
        height: 30,
        width: 200,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
  },
  buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
  }
});
