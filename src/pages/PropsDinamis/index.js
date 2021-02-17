import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Poto from '../../assests/image/poto.png';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20, maxWidth: 50}}>
      <Image
        style={{width: 60, height: 60, borderRadius: 60 / 2}}
        source={props.Poto}></Image>
      <Text>{props.Nama}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
      <View>

      <Text style={{textAlign: 'center'}}>InstaSory</Text>
    <View style={{padding: 15, flexDirection: 'row'}}>
      <ScrollView horizontal>
        <Story Poto={Poto} Nama="Wiby"></Story>
        <Story Poto={Poto} Nama="Fabian"></Story>
        <Story Poto={Poto} Nama="Rianto"></Story>
        <Story Poto={Poto} Nama="Prawito"></Story>
        <Story Poto={Poto} Nama="Hudoro"></Story>
        <Story Poto={Poto} Nama="Chriss"></Story>
        <Story Poto={Poto} Nama="Will"></Story>
      </ScrollView>
    </View>
      </View>
  );
};

export default PropsDinamis;
