import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from '../src/pages/SampleComponent';
import StylingReactNativeComponent from '../src/pages/StylingReactNativeComponent';
import Flexbox from '../src/pages/Felexbox';
import Position from '../src/pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Position></Position>
        <Flexbox></Flexbox>
        <StylingReactNativeComponent></StylingReactNativeComponent>
        <SampleComponent></SampleComponent>
      </ScrollView>
    </View>
  );
};

export default App;
