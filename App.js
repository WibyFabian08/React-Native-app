import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';

// functional component
const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}>
        <Text>Haloo Dunia Tipu Tipu</Text>
      </View>
      <Text>William</Text>
      <Text>Fabian</Text>
      <Text>Rianto</Text>
      {/* memanggil komponen */}
      <William></William>
      <Poto></Poto>
      <TextInput style={{borderWidth: 1}}></TextInput>
    </View>
  );
};

const William = () => {
  return <Text>Will Chriss Guy Berryman</Text>
}

const Poto = () => {
  return (
    <Image style={{width: 80, height: 80,}} source={require('./poto.png')} />
  );
};

export default App;