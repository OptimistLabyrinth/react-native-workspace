import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GoBack from '../component/GoBack';

export default function Page2() {
  return (
    <>
      <GoBack />
      <View style={styles.mainView}>
        <Text>페이지 2</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
});
