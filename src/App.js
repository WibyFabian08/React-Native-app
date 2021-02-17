import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from '../src/pages/SampleComponent';
import StylingReactNativeComponent from '../src/pages/StylingReactNativeComponent';
import Flexbox from '../src/pages/Felexbox';
import Position from '../src/pages/Position';
import PropsDinamis from '../src/pages/PropsDinamis';
import StateDinamis from '../src/pages/StateDinamis';
import Communication from '../src/pages/Communication';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <Position></Position> */}
        {/* <Flexbox></Flexbox> */}
        {/* <StylingReactNativeComponent></StylingReactNativeComponent> */}
        {/* <SampleComponent></SampleComponent> */}
        {/* <PropsDinamis></PropsDinamis> */}
        {/* <StateDinamis></StateDinamis> */}
        <Communication></Communication>
      </ScrollView>
    </View>
  );
};

export default App;
