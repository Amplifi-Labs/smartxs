import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  PanResponderGestureState,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import tw from '../../lib/tailwind';

const SCREEN_HEIGHT = Dimensions.get('window').height;

let initialPosition: number;
const duration = 200;

type Props = {
  children: JSX.Element | JSX.Element[];
  finalPosition: number;
  onInitialPositionReached?: () => void;
};

let ref: Animated.LegacyRef<View>;

const DraggableView = ({
  children,
  finalPosition,
  onInitialPositionReached,
}: Props) => {
  const [touched, setTouched] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [position, setPosition] = useState(
    new Animated.Value(SCREEN_HEIGHT * (1 - 0.05) - 100),
  );

  useEffect(() => {
    if (!initialPosition) {
      initialPosition = SCREEN_HEIGHT * (1 - 0.05) - 100;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAValidMovement = (dx: number, dy: number) => {
    const isValid = !isOpen
      ? Math.abs(dy) > Math.abs(dx) && dy < 2
      : Math.abs(dy) > Math.abs(dx) && dy > 2;

    return isValid;
  };

  const onUpdatePosition = (position_: number) => {
    const tempPosition = position_ - 100;
    setPosition(tempPosition as unknown as Animated.Value);

    if (
      initialPosition &&
      initialPosition === tempPosition &&
      onInitialPositionReached
    ) {
      onInitialPositionReached();
    }
  };

  const moveDrawerView = (gesture: PanResponderGestureState) => {
    if (!ref) {
      return;
    }
    const position_ = gesture.moveY;
    onUpdatePosition(position_);
  };

  const startAnimation = (positionY: number) => {
    const endPosition = SCREEN_HEIGHT - (finalPosition + 50);

    const position_ = new Animated.Value(SCREEN_HEIGHT - positionY - 200);
    position_.removeAllListeners();

    const toValue = !isOpen ? endPosition : initialPosition + 100;

    Animated.timing(position_, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();

    position_.addListener(position__ => {
      if (!ref) {
        return;
      }
      onUpdatePosition(position__.value);
    });

    setIsOpen(!isOpen);
  };

  const moveFinished = (gesture: PanResponderGestureState) => {
    if (!ref) {
      return;
    }
    startAnimation(gesture.moveY);
  };

  const _panGesture = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => {
      return isAValidMovement(gesture.dx, gesture.dy) && touched;
    },
    onPanResponderMove: (_, gesture) => {
      moveDrawerView(gesture);
    },
    onPanResponderRelease: (_, gesture) => {
      moveFinished(gesture);
    },
  });

  return (
    <Animated.View
      ref={(ref_: Animated.LegacyRef<View>) => {
        ref = ref_;
      }}
      style={{
        ...tw`absolute left-0 w-full rounded-t-2xl bg-white`,
        top: position,
        height: SCREEN_HEIGHT,
      }}
      {..._panGesture.panHandlers}>
      <TouchableWithoutFeedback
        onPressIn={() => setTouched(true)}
        onPressOut={() => setTouched(false)}>
        <View style={tw`items-center h-12`}>
          <View style={tw`bg-gray-300 h-1.5 w-14 mt-2 mb-5 rounded-full`} />
        </View>
      </TouchableWithoutFeedback>
      {children}
    </Animated.View>
  );
};

export default DraggableView;
