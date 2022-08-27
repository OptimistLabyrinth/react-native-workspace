import React from 'react';
import {Button, GestureResponderEvent, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigationConst/RootStackParams';

export default function GoBack() {
  const navigate = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  function onPressButton(_event: GestureResponderEvent) {
    if (!navigate.canGoBack()) {
      return;
    }
    navigate.goBack();
  }

  return (
    <View style={styles.buttonView}>
      <Button onPress={onPressButton} title="돌아가기" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  oneThird: {
    flex: 1,
    width: '100%',
  },
});
