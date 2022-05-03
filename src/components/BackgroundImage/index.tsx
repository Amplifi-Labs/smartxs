import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  View,
} from 'react-native';

import {TailwindFn} from 'twrnc';

type Props = {
  tw: TailwindFn;
  image: ImageSourcePropType;
  children?: React.ReactElement;
  bottomColor?: string;
  mask?: string;
};

const BackgroundImage = ({
  tw,
  image,
  children,
  bottomColor,
  mask = 'bg-white/90',
}: Props) => {
  return (
    <View style={tw`flex-1`}>
      <ImageBackground source={image} resizeMode="cover" style={tw`flex-1`}>
        <SafeAreaView style={tw`flex-1 justify-between ${mask}`}>
          {children}
        </SafeAreaView>
        {bottomColor && (
          <SafeAreaView style={{flex: 0, backgroundColor: bottomColor}} />
        )}
      </ImageBackground>
    </View>
  );
};

export default BackgroundImage;
