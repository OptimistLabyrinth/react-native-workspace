import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default function UserInput() {
  const [inputOne, setInputOne] = useState<string>('abc 1234');

  function onChangeTextInputOne(text: string) {
    setInputOne(text);
  }

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.inputTextInputOne}
        value={inputOne}
        onChangeText={onChangeTextInputOne}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  inputTextInputOne: {
    width: '100%',
    padding: 20,
    backgroundColor: 'grey',
    fontSize: 20,
  },
});
