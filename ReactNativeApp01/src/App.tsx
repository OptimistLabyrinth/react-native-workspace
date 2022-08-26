/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationNames from '../navigationConst/navigationNames';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const Stack = createNativeStackNavigator();

export default function App() {
  // prettier-ignore
  return (
    <NavigationContainer>
      <View style={styles.mainView}>
        <StackNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
});

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName={navigationNames.home}>
      <Stack.Screen name={navigationNames.home} component={Home} />
      <Stack.Screen name={navigationNames.page1} component={Page1} />
      <Stack.Screen name={navigationNames.page2} component={Page2} />
      <Stack.Screen name={navigationNames.page3} component={Page3} />
    </Stack.Navigator>
  );
}
