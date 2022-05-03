import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';
import currenciesArray from './currencies-table';

import {TailwindFn} from 'twrnc';

type Currency = {
  abbreviation: string;
  symbol: string;
};

type Props = {
  tw: TailwindFn;
  label?: string;
  placeholder?: number;
  helper?: string;
  style?: Style;
  labelStyle?: Style;
  inputStyle?: Style;
  helperStyle?: Style;
  onChangeText: (arg: string) => void;
  value: string;
  inputType?: 'primary' | 'secondary';
  helperType?: 'primary' | 'secondary';
  currency?: 'USD';
};

const InputCurrency = ({
  tw,
  label,
  placeholder,
  helper,
  style,
  labelStyle,
  inputStyle,
  helperStyle,
  onChangeText,
  value,
  inputType,
  helperType,
  currency = 'USD',
}: Props): JSX.Element => {
  const [symbol, setSymbol] = useState('');

  useEffect(() => {
    const currencyObj = (currenciesArray as Currency[]).find(
      currency_ => currency_.abbreviation === currency,
    );
    if (currencyObj) {
      setSymbol(currencyObj?.symbol);
    }
  }, [currency]);

  const defaultLabelStyle = tw.style('font-sm font-medium text-gray-700 pb-1x');
  const defaultInputStyle = tw.style(
    'font-sm font-normal text-gray-500 bg-white p-3 rounded-md border-gray-300 border w-full flex-row',
  );
  const defaultHelperStyle = tw.style(
    /* font-xs */ 'font-normal text-gray-500 pt-1',
  );

  const typeInputStyle = inputType
    ? tw`border-${inputType}-700 ${
        inputType === 'primary' ? 'border-2' : 'border'
      }`
    : tw``;

  const typeHelperStyle = helperType ? tw`text-${helperType}-700` : tw``;

  return (
    <View style={style}>
      {label && (
        <Text style={{...defaultLabelStyle, ...labelStyle}}>{label}</Text>
      )}
      <View style={{...defaultInputStyle, ...typeInputStyle, ...inputStyle}}>
        <View style={tw`flex-row justify-between flex-grow`}>
          <View style={tw`flex-row`}>
            <Text style={tw`pr-2 text-gray-500`}>{symbol}</Text>
            <TextInput
              onChangeText={onChangeText}
              value={value || undefined}
              placeholder={placeholder?.toString() || undefined}
            />
          </View>
          <Text style={tw`pl-2 text-gray-500`}>{currency}</Text>
        </View>
      </View>
      {helper && (
        <Text
          style={{...defaultHelperStyle, ...typeHelperStyle, ...helperStyle}}>
          {helper}
        </Text>
      )}
    </View>
  );
};

export default InputCurrency;
