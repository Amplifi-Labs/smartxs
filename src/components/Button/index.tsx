import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';

import {TailwindFn} from 'twrnc';

type Props = {
  tw: TailwindFn;
  onPress: () => void;
  style?: Style;
  textStyle?: Style;
  children: JSX.Element | JSX.Element[] | string;
  type?: 'primary' | 'secondary';
};

const Button = ({tw, style, textStyle, onPress, children, type}: Props) => {
  const bgColor = `bg-${type || 'indigo'}-700`;

  const defaultStyles = tw.style(
    'items-center px-2 py-3 border border-transparent rounded shadow-sm',
    bgColor,
  );

  const defaultTextStyles = tw.style('text-lg font-medium text-white');

  return (
    <TouchableOpacity style={{...defaultStyles, ...style}} onPress={onPress}>
      <Text style={{...defaultTextStyles, ...textStyle}} onPress={onPress}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
