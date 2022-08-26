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
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  Modal,
  Button,
} from 'react-native';

export default function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);

  function onPressTouchableOpacity(_event: GestureResponderEvent) {
    setShowModal(true);
  }

  function onPressModalButton(_event: GestureResponderEvent) {
    setShowModal(false);
  }

  return (
    <>
      <TouchableOpacity style={styles.header} onPress={onPressTouchableOpacity}>
        <View>
          <Text>This is a header</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modal}>
          <Text>This is a Modal</Text>
        </View>
        <View>
          <Button onPress={onPressModalButton} title="돌아가기" />
        </View>
      </Modal>
    </>
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
  modal: {
    marginTop: 60,
    backgroundColor: 'red',
  },
});
