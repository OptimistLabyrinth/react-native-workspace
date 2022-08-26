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
  Button,
  GestureResponderEvent,
} from 'react-native';

function App() {
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
        <View style={styles.subViewAbove}>
          <Text>{number}</Text>
        </View>
        <View style={styles.subViewBelow}>
          <View style={styles.eachButton} />
          <View style={styles.eachButton}>
            <Button onPress={onPressIncrease} title="+" />
          </View>
          <View style={styles.eachButton}>
            <Button onPress={onPressReset} title="reset" />
          </View>
          <View style={styles.eachButton}>
            <Button onPress={onPressDecrease} title="-" />
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
  },
});

export default App;
