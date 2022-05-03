import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';

import tw from '../../services/tailwind';

type Props = {
  label?: string;
  placeholder?: string;
  helper?: string;
  style?: Style;
  labelStyle?: Style;
  inputStyle?: Style;
  helperStyle?: Style;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  inputType?: 'primary' | 'secondary';
  helperType?: 'primary' | 'secondary';
};

const InputText = ({
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
}: Props) => {
  const defaultLabelStyle = tw.style('font-sm font-medium text-gray-700 pb-1x');
  const defaultInputStyle = tw.style(
    'font-sm font-normal text-gray-500 bg-white p-3 rounded-md border-gray-300 border w-full',
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
      <TextInput
        style={{...defaultInputStyle, ...typeInputStyle, ...inputStyle}}
        onChangeText={onChangeText}
        value={value || undefined}
        placeholder={placeholder || undefined}
      />
      {helper && (
        <Text
          style={{...defaultHelperStyle, ...typeHelperStyle, ...helperStyle}}>
          {helper}
        </Text>
      )}
    </View>
  );
};

export default InputText;
