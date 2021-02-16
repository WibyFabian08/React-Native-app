import React from 'react';
import {View, Text, Image} from 'react-native';
import Poto from './poto.png';

class MateriFlexbox extends React.Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View
            style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: '#feca57', width: 50, height: 100}}></View>
          <View
            style={{backgroundColor: '#1dd1a1', width: 50, height: 150}}></View>
          <View
            style={{backgroundColor: '#5f27cd', width: 50, height: 200}}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
          <Text>Beranda</Text>
          <Text>Playlist</Text>
          <Text>Video</Text>
          <Text>Pencarian</Text>
          <Text>Favorit</Text>
          <Text>Channel</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, padding: 10, alignItems: 'center'}}>
            <Image
            source={Poto}
            style={{width: 100, height: 100, borderRadius: 50}}>
            </Image>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Wiby Fabian Rianto</Text>
                <Text style={{fontSize: 16}}>1806127</Text>
            </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexbox;
