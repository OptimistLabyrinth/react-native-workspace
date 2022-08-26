import React from 'react';
import {StyleSheet, View} from 'react-native';
import GoBack from '../component/GoBack';
import Counter from './Counter';
import Header from './Header';
import UserInput from './UserInput';

export default function Page1() {
  return (
    <View style={styles.mainView}>
      <GoBack />
      <Header />
      <Counter />
      <UserInput />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
  buttonView: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  oneThird: {
    flex: 1,
    width: '100%',
  },
});
