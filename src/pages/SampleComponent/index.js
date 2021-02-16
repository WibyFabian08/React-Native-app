import React from 'react';
import {Image, View, Text, TextInput} from 'react-native';
import Gambar from '../../assests/image/poto.png';

const SampleComponent = () => {
  return (
    <View style={{alignItems: 'center', padding: 4}}>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#0abde3',
          marginBottom: 5,
          alignItems: 'center',
          borderRadius: 40,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>Haloo Dunia Tipu Tipu</Text>
      </View>
      <Text>William</Text>
      <Text>Fabian</Text>
      <Text>Rianto</Text>
      <William></William>
      <Poto></Poto>
      <TextInput style={{borderWidth: 0.5, width: 410}}></TextInput>
      <BoxGreen></BoxGreen>
      <Profile></Profile>
    </View>
  );
};

const William = () => {
  return <Text>Will Chriss Guy Berryman</Text>;
};

const Poto = () => {
  return (
    <Image
      style={{width: 80, height: 80, borderRadius: 40}}
      source={Gambar}
    />
  );
};

class BoxGreen extends React.Component {
  render() {
    return <Text>Haloo</Text>;
  }
}

class Profile extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 80, height: 80}}
          source={Gambar}></Image>
        <Text style={{textDecorationLine: 'underline'}}>
          Wiby Fabian Rianto
        </Text>
      </View>
    );
  }
}

export default SampleComponent;
