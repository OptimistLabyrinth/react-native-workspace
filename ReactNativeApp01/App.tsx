/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  GestureResponderEvent,
} from 'react-native';
import Header from './src/Header';

export default function App() {
  const [number, setNumber] = useState<number>(0);

  function onPressIncrease(_event: GestureResponderEvent) {
    setNumber(prev => prev + 1);
  }

  function onPressReset(_event: GestureResponderEvent) {
    setNumber(0);
  }

  function onPressDecrease(_event: GestureResponderEvent) {
    setNumber(prev => prev - 1);
  }

  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Header />
        <View style={styles.subViewAbove}>
          <Text>{number}</Text>
        </View>
        <View style={styles.subViewBelow}>
          <View style={styles.eachButton} />
          <View style={styles.eachButton}>
            <Text onPress={onPressIncrease} style={styles.buttonTitle}>
              +
            </Text>
          </View>
          <View style={styles.eachButton}>
            <Text onPress={onPressReset} style={styles.buttonTitle}>
              reset
            </Text>
          </View>
          <View style={styles.eachButton}>
            <Text onPress={onPressDecrease} style={styles.buttonTitle}>
              -
            </Text>
          </View>
          <View style={styles.eachButton} />
        </View>
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
