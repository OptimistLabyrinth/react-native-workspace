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
      <View style={styles.wrapper}>
        <View style={styles.background}>
          <Text>{number}</Text>
        </View>
        <View style={styles.buttons}>
          <Button onPress={onPressIncrease} title="+" />
          <Button onPress={onPressReset} title="reset" />
          <Button onPress={onPressDecrease} title="-" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
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
