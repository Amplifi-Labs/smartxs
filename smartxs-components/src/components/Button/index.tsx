import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';

import {TailwindFn} from 'twrnc';
import {SvgXml} from 'react-native-svg';

type Props = {
  tw: TailwindFn;
  onPress: () => void;
  style?: Style;
  textStyle?: Style;
  children: string;
  type?: 'primary' | 'secondary';
  iconLeft?: string;
  iconRight?: string;
};

const Button = ({
  tw,
  style,
  textStyle,
  onPress,
  children,
  type,
  iconLeft,
  iconRight,
}: Props): JSX.Element => {
  const bgColor = `bg-${type || 'indigo'}-700`;

  const defaultStyles = tw.style(
    'items-center px-2 py-3 border border-transparent rounded shadow',
    bgColor,
  );

  const defaultTextStyles = tw.style('text-lg font-medium text-white');

  return (
    <TouchableOpacity style={{...defaultStyles, ...style}} onPress={onPress}>
      <View style={tw`flex-row items-center`}>
        {iconLeft && (
          <View style={tw`mr-4`}>
            <SvgXml xml={iconLeft} />
          </View>
        )}
        <Text style={{...defaultTextStyles, ...textStyle}}>
          {children}
        </Text>
        {iconRight && (
          <View style={tw`ml-4`}>
            <SvgXml xml={iconRight} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
