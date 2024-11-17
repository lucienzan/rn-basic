import { View, Text, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import CommImage from "@/components/commImge";
import CommCard from "@/components/commCard";
import { COLORS, SIZES } from "@/constants/theme";
import "react-native-gesture-handler";
import CommDrawer, { BottomSheetMethods } from "@/components/commDrawer";
import { useDrawerContext } from "@/context/DrawerContext";

const home = () => {
  const insets = useSafeAreaInsets();
  const { isDrawerToggle } = useDrawerContext();
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const openDrawer = () => {
    isDrawerToggle();
    bottomSheetRef.current?.openTiming();
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={{ paddingTop: insets.top }}>
          <CommImage title={"Daniel"} />
          <CommCard color={COLORS.success} />
          <Text>This is home</Text>
          <Pressable onPress={openDrawer}><Text>Toggle</Text></Pressable>
        </View>
       <CommDrawer ref={bottomSheetRef}>
          <Text style={style.title}>Choose a style</Text>
          <Text style={style.subTtle}>Pop or subtle. Day or night.</Text>
          <Text style={style.subTtle}>Customize your interface.</Text>
      </CommDrawer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: SIZES.large,
    fontWeight: 600,
    marginTop: 40,
    marginBottom: 14,
  },
  subTtle: {
    fontSize: SIZES.medium,
    fontWeight: 500,
    lineHeight: 21
  }
});

export default home;
