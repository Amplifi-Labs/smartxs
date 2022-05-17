/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {Card, H1, H2, H3, Paragraph, Info, HR} from '@amplifi-labs/smartxs';

import tw from './services/tw';

const App = () => {
  return (
    <View style={tw`bg-gray-200 flex-1 p-4`}>
      <SafeAreaView>
        <Card tw={tw} style={tw`my-2`}>
          <Text style={tw`font-bold text-lg`}>Texts</Text>
          <HR tw={tw} style={tw`my-4 bg-gray-400`} />
          <H1 tw={tw}>H1 Text</H1>
          <H2 tw={tw}>H2 Text</H2>
          <H3 tw={tw}>H2 Text</H3>
          <Paragraph tw={tw}>Paragraph Text</Paragraph>
          <Info tw={tw}>Info Text</Info>
        </Card>
        <Card tw={tw} style={tw`my-2`}>
          <Text style={tw`font-bold text-lg`}>Buttons</Text>
          <HR tw={tw} style={tw`my-4 bg-gray-400`} />
        </Card>
        <Card tw={tw} style={tw`my-2`}>
          <Text style={tw`font-bold text-lg`}>Charts</Text>
          <HR tw={tw} style={tw`my-4 bg-gray-400`} />
        </Card>
      </SafeAreaView>
    </View>
  );
};

export default App;
