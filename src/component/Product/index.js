import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import rumah from '../../assests/image/rumah2.jpg';

const Product = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.container}>
        <Image style={styles.image} source={rumah}></Image>
        <Text style={styles.title}>Rumah Minimalis</Text>
        <Text style={styles.price}>Rp. 1.000.000.000</Text>
        <Text style={styles.address}>Garut</Text>
        <TouchableOpacity onPress={props.click}>
          <Text style={styles.beli}>Beli</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
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

export default Product;
