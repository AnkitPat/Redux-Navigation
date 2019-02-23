/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import {connect} from "react-redux";
import {DECREMENT_VALUE, INCREMENT_VALUE} from "./actions";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class Home extends Component<Props> {
  render() {
    if (this.props.count === 10) {
      Alert.alert('ankit');
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to HOme!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={[styles.instructions, {fontSize: 30}]}>{this.props.count}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title={'Click here'} onPress={() => {
          this.props.navigation.navigate('Details', {value: 'hello suraj'});
        }}/>

        <Button title={'increment here'} onPress={() => {
          this.props.incrementValue(this.props.count);
        }}/>
        <Button title={'Decrement here'} onPress={() => {
          this.props.decrementValue(this.props.count);
        }}/>
      </View>
    );
  }
}

function mapState (state) {
  return { count: state.count }
}

// Maps `dispatch` to `props`:
function mapDispatch (dispatch) {
  return {
    incrementValue (count) {
      dispatch({ type: INCREMENT_VALUE, count })
    },
    decrementValue (count) {
      dispatch({ type: DECREMENT_VALUE, count })
    }
  }
}

// Connect them:
export default connect(mapState, mapDispatch)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
