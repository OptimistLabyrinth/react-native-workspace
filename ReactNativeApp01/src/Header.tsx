/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  GestureResponderEvent,
} from 'react-native';

export default function Header() {
  function onPressTouchableOpacity(_event: GestureResponderEvent) {
    Alert.alert('Touched Header !!');
  }

  return (
    <TouchableOpacity style={styles.header} onPress={onPressTouchableOpacity}>
      <View>
        <Text>This is a header</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
