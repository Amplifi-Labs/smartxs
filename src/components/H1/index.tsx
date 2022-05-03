import React from 'react';
import {Text} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';

import tw from '../../services/tailwind';

type Props = {
  style?: Style;
  children: string;
};

const H1 = ({style, children}: Props) => {
  const defaultStyles = tw`font-inter font-medium text-2xl text-gray-700`;
  return <Text style={{...defaultStyles, ...style}}>{children}</Text>;
};

export default H1;
