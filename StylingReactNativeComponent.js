import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import rumah from './rumah2.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
          marginBottom: 30,
        }}></View>
      <View style={styles.container}>
        <Image style={styles.image} source={rumah}></Image>
        <Text style={styles.title}>Rumah Minimalis</Text>
        <Text style={styles.price}>Rp. 1.000.000.000</Text>
        <Text style={styles.address}>Garut</Text>
        <Text style={styles.beli}>Beli</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  container: {
    width: 212,
    backgroundColor: '#e5e5e5',
    borderRadius: 15,
    overflow: 'hidden',
    padding: 12,
    marginBottom: 10
  },
  image: {
    width: 188,
    height: 107,
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  price: {
    color: 'orange',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    marginTop: 10,
  },
  beli: {
    backgroundColor: 'lightgreen',
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 5,
    paddingVertical: 6,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default StylingReactNativeComponent;
