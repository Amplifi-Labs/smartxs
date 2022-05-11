import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Style} from 'twrnc/dist/esm/types';

import {TailwindFn} from 'twrnc';

type Props = {
  tw: TailwindFn;
  label?: string;
  placeholder?: string;
  helper?: string;
  style?: Style;
  labelStyle?: Style;
  inputStyle?: Style;
  textInputStyle?: Style;
  helperStyle?: Style;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  inputType?: 'primary' | 'secondary';
  helperType?: 'primary' | 'secondary';
  invisibleIcon: string;
  visibleIcon: string;
  error?: string;
  errorStyle?: Style;
};

const InputPassword: React.FC<Props> = ({
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
  invisibleIcon,
  visibleIcon,
  error,
  errorStyle,
}): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const defaultInputStyle = tw.style(
    'text-sm font-normal text-gray-500 bg-white p-3 rounded-md border-gray-300 border w-full',
  );

  const defaultLabelStyle = tw.style('text-sm font-medium text-gray-700 pb-1x');

  const defaultHelperStyle = tw.style('text-xs font-normal text-gray-500 pt-1');
  const defaultErrorStyle = tw.style('text-xs font-normal text-red-500 pt-1');

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
          <TextInput
            style={tw`w-9/10`}
            onChangeText={onChangeText}
            value={value || undefined}
            placeholder={placeholder?.toString() || undefined}
            secureTextEntry={!visible}
          />
          <SvgXml
            xml={visible ? visibleIcon : invisibleIcon}
            onPress={() => setVisible(!visible)}
          />
        </View>
      </View>
      {helper && !error && (
        <Text
          style={{...defaultHelperStyle, ...typeHelperStyle, ...helperStyle}}>
          {helper}
        </Text>
      )}
      {error && (
        <Text style={{...defaultErrorStyle, ...errorStyle}}>{error}</Text>
      )}
    </View>
  );
};

export default InputPassword;
