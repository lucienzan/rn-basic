import { COLORS } from "@/constants/theme";
import CommBackDrop from "./commBackDrop";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { useDrawerContext } from "@/context/DrawerContext";

type Props = {
  children: React.ReactNode;
};

export interface BottomSheetMethods {
  openTiming: () => void;
  closeTiming: () => void;
}

const CommDrawer = forwardRef<BottomSheetMethods, Props>(({ children }, ref) => {
  const inset = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { isDrawerToggle } = useDrawerContext();
  const [bottomSheetheight, setBottomSheetHeight] = useState<number>(1000);
  const open = 0;
  const close = bottomSheetheight + inset.bottom;

  // Shared values for translateY (vertical position) and opacity (fade effect)
  const translateY = useSharedValue(close);

  // Animated style for both translateY and opacity
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  // Open and close drawer with timing animations
  const openTiming = useCallback(() => {
    translateY.value = withTiming(open);
  }, [translateY]);

  const closeTiming = useCallback(() => {
    translateY.value = withTiming(close);
  }, [close, translateY]);

    // Expose methods to control the drawer externally
    useImperativeHandle(ref, () => ({
      openTiming,
      closeTiming,
    }),[openTiming, closeTiming]);

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY < 0) {
        translateY.value = withSpring(open, { damping: 200, stiffness: 800 });
      } else {
        translateY.value = withSpring(event.translationY, { damping: 100, stiffness: 400 });
      }
    })
    .onEnd(() => {
      if (translateY.value > 50) {
        translateY.value = withSpring(close, { damping: 100, stiffness: 400 });

        // Toggle drawer state after animation
        if (translateY.value <= close) {
          runOnJS(isDrawerToggle)(); // Trigger the context toggle function
        }
      } else {
        translateY.value = withSpring(open, { damping: 100, stiffness: 400 });
      }
    });

  return (
    <>
      <CommBackDrop translateY={translateY} close={closeTiming} openHeight={open} closeHeight={close} />
      <GestureDetector gesture={pan}>
        <Animated.View
          onLayout={({ nativeEvent }) => {
            const { height } = nativeEvent.layout;
            if (height) {
              setBottomSheetHeight(height);
            }
          }}
          style={[
            style.drawerContent,
            { bottom: inset.bottom, width: width * 0.92 },
            animationStyle,
          ]}
        >
          <View style={style.lineBar}></View>
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
});

const style = StyleSheet.create({
  drawerContent: {
    position: "absolute",
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    alignSelf: "center",
  },
  lineBar: {
    backgroundColor: COLORS.grey,
    opacity: 0.8,
    position: "absolute",
    top: 9,
    width: 40,
    height: 6,
    borderRadius: 15,
  },
});

export default CommDrawer;
