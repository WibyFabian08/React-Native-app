import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampelComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MateriFlexbox from './MateriFlexbox';
import PositionReactNative from './PositionReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        <PositionReactNative></PositionReactNative>
        {/* <MateriFlexbox></MateriFlexbox> */}
        {/* <StylingReactNativeComponent></StylingReactNativeComponent> */}
        {/* <SampleComponent></SampleComponent> */}
      </ScrollView>
    </View>
  );
};

export default App;
