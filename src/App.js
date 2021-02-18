import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from '../src/pages/SampleComponent';
import StylingReactNativeComponent from '../src/pages/StylingReactNativeComponent';
import Flexbox from '../src/pages/Felexbox';
import Position from '../src/pages/Position';
import PropsDinamis from '../src/pages/PropsDinamis';
import StateDinamis from '../src/pages/StateDinamis';
import Communication from '../src/pages/Communication';
import BasicJavascript from '../src/pages/BasicJavascript';
import SvgFoto from '../src/pages/SvgFoto';
import CallAPIVanilla from '../src/pages/CallAPIVanilla';
import CallAPIAxios from '../src/pages/CalAPIAxios';
import Crud from '../src/pages/Crud';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <PropsDinamis></PropsDinamis> */}
        {/* <Flexbox></Flexbox> */}
        {/* <Position></Position> */}
        {/* <StylingReactNativeComponent></StylingReactNativeComponent> */}
        {/* <SampleComponent></SampleComponent> */}
        {/* <StateDinamis></StateDinamis> */}
        {/* <Communication></Communication> */}
        {/* <BasicJavascript></BasicJavascript> */}
        {/* <SvgFoto></SvgFoto> */}
        {/* <CallAPIVanilla></CallAPIVanilla> */}
        {/* <CallAPIAxios></CallAPIAxios> */}
        <Crud></Crud>
      </ScrollView>
    </View>
  );
};

export default App;
