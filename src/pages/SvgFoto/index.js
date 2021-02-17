import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from '../../assests/image/pict.svg';

const SvgFoto = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contoh SVG Image</Text>
      <View style={styles.poto}>
        <Logo width={100} height={100}></Logo>
      </View>
    </View>
  );
};

export default SvgFoto;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10
  },
  poto: {
      alignItems: 'center'
  }
});
