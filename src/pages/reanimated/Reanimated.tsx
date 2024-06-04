import React, {FC, useEffect, useState} from 'react';
import {LayoutChangeEvent, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';

interface ReanimatedI {}

export const Reanimated: FC<ReanimatedI> = () => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const verticalMovement = useSharedValue<number>(0);
  const horizontalMovement = useSharedValue<number>(0);

  const {top, bottom, left, right} = useSafeAreaInsets();

  const reanimatedStyles = styles(top, bottom, left, right);

  const styleVerticalMovement = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: verticalMovement.value,
      },
      {translateX: horizontalMovement.value},
    ],
  }));

  useEffect(() => {
    verticalMovement.value = withRepeat(
      withTiming(height - 60 - top - bottom, {
        duration: 5000,
        easing: Easing.bounce,
      }),
      1,
      false,
    );

    horizontalMovement.value = withRepeat(
      withTiming(width - 60, {
        duration: 5000,
        easing: Easing.inOut(Easing.ease),
      }),
      1,
      false,
    );
  }, [verticalMovement, height, horizontalMovement, width, top, bottom]);

  const onLayout = (event: LayoutChangeEvent) => {
    const {height, width} = event.nativeEvent.layout;
    setHeight(height);
    setWidth(width);
  };

  return (
    <View style={reanimatedStyles.container} onLayout={onLayout}>
      <Animated.View style={[reanimatedStyles.circle, styleVerticalMovement]} />
    </View>
  );
};
