import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Card,
  H1,
  H2,
  H3,
  Paragraph,
  Info,
  HR,
  ToggleButton,
  SwipeCarousel,
  RadioGroup,
} from '@amplifi-labs/smartxs';

import tw from './services/tw';

const transactionTypes = [
  {
    key: 1,
    label: 'Sale',
  },
  {
    key: 2,
    label: 'Auth Only',
  },
  {
    key: 3,
    label: 'AVS Only',
  },
  {
    key: 4,
    label: 'Refund',
  },
];

const App = () => {
  const [toggleValue, setToggleValue] = useState(false);

  const [carouselPosition, setCarouselPosition] = useState(0);

  const selectedCallback = (newSelected: number) => {
    setCarouselPosition(newSelected);
  };

  return (
    <View style={tw`bg-gray-200 flex-1 p-4`}>
      <SafeAreaView>
        <ScrollView>
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
          <Card tw={tw} style={tw`my-2`}>
            <Text style={tw`font-bold text-lg`}>Forms</Text>
            <HR tw={tw} style={tw`my-4 bg-gray-400`} />
            <ToggleButton
              tw={tw}
              onToggle={() => setToggleValue(!toggleValue)}
              isOn={toggleValue}
            />
            <RadioGroup
              tw={tw}
              label="Types of Transaction"
              data={transactionTypes}
              onChangeOption={() => null}
              value={''}
              showRadio={true}
              isHorizontal={false}
              style={tw`mt-4 mb-2`}
            />
          </Card>
          <Card tw={tw} style={tw`my-2`}>
            <View style={tw`flex-col`}>
              <View style={tw`flex-row justify-between w-full my-2`}>
                <TouchableOpacity
                  onPress={() =>
                    setCarouselPosition(
                      carouselPosition - 1 < 0 ? 2 : carouselPosition - 1,
                    )
                  }>
                  <View
                    style={tw`bg-gray-100 w-10 h-10 rounded-full items-center justify-center border-2 border-gray-200`}>
                    {/* <SvgXml xml={CarouselArrowLeft} /> */}
                    <Text>Prev</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    setCarouselPosition(
                      carouselPosition + 1 > 2 ? 0 : carouselPosition + 1,
                    )
                  }>
                  <View
                    style={tw`bg-gray-100 w-10 h-10 rounded-full items-center justify-center border-2 border-gray-200`}>
                    {/* <SvgXml xml={CarouselArrowRight} /> */}
                    <Text>Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <SwipeCarousel
                tw={tw}
                selected={carouselPosition}
                selectedCallback={selectedCallback}>
                <View style={tw`bg-blue-600 h-48 w-full`} />
                <View style={tw`bg-red-600 h-48 w-full`} />
                <View style={tw`bg-green-600 h-48 w-full`} />
              </SwipeCarousel>
            </View>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
