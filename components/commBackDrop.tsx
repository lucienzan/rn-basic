import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { useDrawerContext } from "@/context/DrawerContext";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  openHeight: number;
  closeHeight: number;
  translateY: SharedValue<number>;
  close: () => void;
};

const CommBackDrop: React.FC<Props> = ({
  openHeight,
  closeHeight,
  translateY,
  close
}) => {
  const { isDrawerToggle } = useDrawerContext();
  const backdropAnimate = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [closeHeight, openHeight],
      [0, 0.5]
    );
    const display = opacity === 0 ? "none" : "flex";
    return {
      opacity,
      display,
    };
  });

  const closeDrawer = () => {
    isDrawerToggle();
    close();
  }

  return (
    <TouchableWithoutFeedback onPress={closeDrawer}>
      <Animated.View style={[style.backdrop, backdropAnimate]} />
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject, // Fill the entire screen
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Backdrop with opacity
    display: "none"
  },
});

export default CommBackDrop;
