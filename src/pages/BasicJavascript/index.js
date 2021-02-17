import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BasicJavascript = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic JavaScript di React Native</Text>
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
  },
});
