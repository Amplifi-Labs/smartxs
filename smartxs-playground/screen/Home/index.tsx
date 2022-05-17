import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {
  Card,
  Checkbox,
  H1,
  H2,
  H3,
  Info,
  InputText,
  Paragraph,
} from '@amplifi-labs/smartxs';
import tw from '../../service/tw';

const Home = () => {
  const [inputTextValue, setInputTextValue] = useState('');

  return (
    <View style={tw`flex-1 bg-gray-200 p-4`}>
      <SafeAreaView>
        <Card tw={tw} style={tw`my-2`}>
          <H1 tw={tw}>Header H1</H1>
          <H2 tw={tw}>Header H2</H2>
          <H3 tw={tw}>Header H3</H3>
          <Paragraph tw={tw}>Paragraph</Paragraph>
          <Info tw={tw}>Info</Info>
        </Card>
        <Card tw={tw} style={tw`my-2`}>
          <Checkbox
            tw={tw}
            label="This is a checkbox"
            value={false}
            onPress={() => null}
          />
          <InputText
            tw={tw}
            onChangeText={value => setInputTextValue(value)}
            value={inputTextValue}
            // mask={Masks}
          />
        </Card>
      </SafeAreaView>
    </View>
  );
};

export default Home;
