import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Button,
} from 'react-native';

export default function Counter() {
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
    <>
      <View style={styles.subViewAbove}>
        <Text>{number}</Text>
      </View>
      <View style={styles.subViewBelow}>
        <View style={styles.buttonsContainer}>
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
        <View style={styles.buttonsContainer}>
          <View style={styles.eachButtonWithText} />
          <View style={styles.eachButtonWithText}>
            <Text
              onPress={onPressIncrease}
              style={styles.titleInButtonWithText}>
              +
            </Text>
          </View>
          <View style={styles.eachButtonWithText}>
            <Text onPress={onPressReset} style={styles.titleInButtonWithText}>
              reset
            </Text>
          </View>
          <View style={styles.eachButtonWithText}>
            <Text
              onPress={onPressDecrease}
              style={styles.titleInButtonWithText}>
              -
            </Text>
          </View>
          <View style={styles.eachButtonWithText} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  subViewAbove: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subViewBelow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eachButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eachButtonWithText: {
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
  titleInButtonWithText: {
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
