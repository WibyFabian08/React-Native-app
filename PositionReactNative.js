import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Poto from './poto.png';

const PositionReactNative = () => {
  return (
    <View style={styles.container}>
      <Text>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image style={styles.poto} source={Poto}></Image>
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default PositionReactNative;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  poto: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'lightblue',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 15,
  },
  text: {
    fontSize: 12,
    marginTop: 10,
  },
  notif: {
    backgroundColor: '#6fcf97',
    padding: 4,
    color: '#fff',
    borderRadius: 25,
    fontSize: 12,
    height: 24,
    width: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
