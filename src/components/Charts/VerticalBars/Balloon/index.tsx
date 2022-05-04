import React from 'react';
import {View, Text} from 'react-native';
import {Style, TailwindFn} from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  transactions: number;
  amount: number;
  currencySymbol: string;
  position: [number, number];
  style?: Style;
  fontStyle?: Style;
};

const Balloon = ({
  tw,
  transactions,
  amount,
  currencySymbol,
  position,
  style,
  fontStyle,
}: Props) => {
  const defaultStyle = tw`p-1 bg-gray-600 rounded-md absolute`;
  const defaultFontStyle = tw`font-inter text-xs `;

  return (
    <View
      style={{...defaultStyle, ...style, top: position[0], left: position[1]}}>
      <Text style={{...defaultFontStyle, ...fontStyle}}>
        Transactions: {transactions}
      </Text>
      <Text
        style={{
          ...defaultFontStyle,
          ...fontStyle,
        }}>{`Amount: ${currencySymbol}${amount}`}</Text>
    </View>
  );
};

export default Balloon;
