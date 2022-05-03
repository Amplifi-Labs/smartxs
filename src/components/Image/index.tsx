import React from 'react';
import {Image as Image_, ImageSourcePropType, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Style} from 'twrnc/dist/esm/types';
import tw from '../../lib/tailwind';

type Props = {
  svg?: string;
  src?: ImageSourcePropType;
  style?: Style;
  width?: number;
  height?: number;
};

const Image = ({svg, src, style, width, height}: Props) => {
  const defaultStyles = tw``;

  if (svg) {
    return (
      <SvgXml xml={svg} width={width || '100%'} height={height || '100%'} />
    );
  }

  if (src) {
    return <Image_ style={{...defaultStyles, ...style}} source={src} />;
  }

  return <View />;
};

export default Image;
