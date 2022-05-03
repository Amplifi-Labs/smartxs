import React from 'react';
import {View} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';
import Spinner from '../Spinner';

import tw from '../../services/tailwind';

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  style?: Style;
};

const LoadingRound = ({children, style}: Props) => {
  const defaultStyles = tw`items-center justify-center rounded-full w-16 h-16 bg-gray-100`;
  return (
    <View style={{...defaultStyles, ...style}}>
      <Spinner time={3000}>{children}</Spinner>
    </View>
  );
};

export default LoadingRound;
