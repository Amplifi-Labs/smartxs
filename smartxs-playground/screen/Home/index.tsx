import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {Card, Checkbox, H1} from '@amplifi-labs/smartxs';
import tw from '../../service/tw';

const Home = () => {
  return (
    <View style={tw`flex-1 bg-gray-200 p-4`}>
      <SafeAreaView>
        <Card tw={tw} style={tw`my-2`}>
          {/* <H1 tw={tw} style={tw`p-4`}>
            Header H1
          </H1> */}
          <Text>Hello world!</Text>
        </Card>
        <Card tw={tw} style={tw`my-2`}>
          <Checkbox
            tw={tw}
            label="This is a checkbox"
            value={false}
            onPress={() => null}
          />
        </Card>
      </SafeAreaView>
    </View>
  );
};

export default Home;
