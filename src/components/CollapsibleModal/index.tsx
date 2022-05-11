import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  PanResponderGestureState,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {TailwindFn} from 'twrnc';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const duration = 200;

const iOSVerticalCompensation = 90;

type Props = {
  tw: TailwindFn;
  children: JSX.Element | JSX.Element[];
  maxHeight: number;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

let ref: Animated.LegacyRef<View>;

const DraggableView = ({
  tw,
  children,
  maxHeight,
  show,
  setShow,
}: Props): JSX.Element => {
  let initialPosition = 0;

  const [touched, setTouched] = useState(false);

  const [position, setPosition] = useState(
    show
      ? new Animated.Value(WINDOW_HEIGHT - maxHeight - iOSVerticalCompensation)
      : new Animated.Value(WINDOW_HEIGHT - iOSVerticalCompensation),
  );

  useEffect(() => {
    if (!initialPosition) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      initialPosition = WINDOW_HEIGHT - maxHeight - iOSVerticalCompensation;
    }
  }, []);

  useEffect(() => {
    if (show) {
      setPosition(
        new Animated.Value(WINDOW_HEIGHT - maxHeight - iOSVerticalCompensation),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const isAValidMovement = (dx: number, dy: number) => {
    return Math.abs(dy) > Math.abs(dx) && dy > 2;
  };

  const onUpdatePosition = (position_: number) => {
    const tempPosition = position_ - 100;
    setPosition(tempPosition as unknown as Animated.Value);
  };

  const moveDrawerView = (gesture: PanResponderGestureState) => {
    if (!ref) {
      return;
    }

    const position_ = gesture.moveY;
    onUpdatePosition(position_);
  };

  const startAnimation = (positionY: number) => {
    const position_ = new Animated.Value(
      WINDOW_HEIGHT - positionY - iOSVerticalCompensation,
    );
    position_.removeAllListeners();

    const toValue = !show
      ? WINDOW_HEIGHT - maxHeight - iOSVerticalCompensation + 100
      : WINDOW_HEIGHT - iOSVerticalCompensation + 100;

    const animation = Animated.timing(position_, {
      toValue,
      duration,
      useNativeDriver: true,
    });

    animation.start();

    position_.addListener(position__ => {
      if (!ref) {
        return;
      }
      onUpdatePosition(position__.value);
    });

    setShow(!show);
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
    <>
      {position && (
        <Animated.View
          ref={(ref_: Animated.LegacyRef<View>) => {
            ref = ref_;
          }}
          style={{
            ...tw`absolute left-0 w-full rounded-t-2xl bg-white h-full shadow-2xl`,
            top: position,
          }}
          {..._panGesture.panHandlers}>
          <View>
            <TouchableWithoutFeedback
              onPressIn={() => setTouched(true)}
              onPressOut={() => setTouched(false)}>
              <View style={tw`items-center h-12`}>
                <View
                  style={tw`bg-gray-300 h-1.5 w-14 mt-2 mb-5 rounded-full`}
                />
              </View>
            </TouchableWithoutFeedback>
            {children}
          </View>
        </Animated.View>
      )}
    </>
  );
};

export default DraggableView;
