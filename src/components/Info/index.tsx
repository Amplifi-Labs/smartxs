import React from 'react';
import {Text} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';
import tw from '../../lib/tailwind';

type Props = {
  style?: Style;
  children: string;
};

const Info = ({style, children}: Props) => {
  const defaultStyles = tw`font-inter font-medium text-base text-gray-500`;
  return <Text style={{...defaultStyles, ...style}}>{children}</Text>;
};

export default Info;
