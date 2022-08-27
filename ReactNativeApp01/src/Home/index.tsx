import React from 'react';
import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import navigationNames from '../navigationConst/navigationNames';
import {
  RootStackParams,
  RootStackParamsKeyType,
} from '../navigationConst/RootStackParams';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';

export default function Home() {
  const navigate = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  function onPressPage1(_event: GestureResponderEvent) {
    navigate.navigate(navigationNames.page1 as RootStackParamsKeyType, Page1);
  }

  function onPressPage2(_event: GestureResponderEvent) {
    navigate.navigate(navigationNames.page2 as RootStackParamsKeyType, Page2);
  }

  function onPressPage3(_event: GestureResponderEvent) {
    navigate.navigate(navigationNames.page3 as RootStackParamsKeyType, Page3);
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        <Text onPress={onPressPage1}>페이지 1 로 이동</Text>
      </View>
      <View style={styles.subView}>
        <Text onPress={onPressPage2}>페이지 2 로 이동</Text>
      </View>
      <View style={styles.subView}>
        <Text onPress={onPressPage3}>페이지 3 로 이동</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
  subView: {
    width: '80%',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
});
