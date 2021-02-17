import React, {useState} from 'react';
import {View} from 'react-native';
import Product from '../../component/Product';
import Cart from '../../component/Cart';

const Communication = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Cart number={number}></Cart>
      <Product click={() => setNumber(number + 1)}></Product>
    </View>
  );
};

export default Communication;
