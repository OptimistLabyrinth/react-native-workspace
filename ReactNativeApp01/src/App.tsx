/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Counter from './Counter';
import Header from './Header';
import UserInput from './UserInput';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Header />
        <Counter />
        <UserInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
  subViewAbove: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subViewBelow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eachButton: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'green',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'green',
  },
});
