import * as React from 'react';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  onColor?: string;
  offColor?: string;
  label?: string;
  style?: object;
  isOn?: boolean;
  labelStyle?: Style;
  innerStyle?: Style;
  onToggle: () => void;
  animatedValue?: Animated.Value;
};

const ToggleButton = ({
  animatedValue = new Animated.Value(0),
  tw,
  onColor = '#0369A1',
  offColor = '#ecf0f1',
  label = '',
  style,
  isOn = false,
  labelStyle,
  innerStyle,
  onToggle = () => {},
}: Props): JSX.Element => {
  const moveToggle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 17],
  });

  const color = isOn ? onColor : offColor;

  const defaultLabelStyle = tw`mr-1`;
  const defaultToggleStyle = tw`w-8.5 h-4.5 ml-1 rounded-lg justify-center`;
  const defaultInsideButtonStyle = tw`w-4 h-4 bg-white rounded-lg shadow-black shadow`;

  React.useEffect(() => {
    animatedValue.setValue(isOn ? 0 : 1);
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  return (
    <View>
      {!!label && <Text style={[defaultLabelStyle, labelStyle]}>{label}</Text>}
      <TouchableOpacity
        onPress={() => {
          typeof onToggle === 'function' && onToggle();
        }}>
        <View style={[defaultToggleStyle, style, {backgroundColor: color}]}>
          <Animated.View
            style={[
              defaultInsideButtonStyle,
              innerStyle,
              {
                marginLeft: moveToggle,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
