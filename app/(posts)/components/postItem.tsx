import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SIZES } from "@/constants/theme";
import { Skeleton } from "moti/skeleton";
import Animated, { FadeIn, Layout } from "react-native-reanimated";

type Props = {
  item: Post;
  loading: boolean;
};

const SkeletonCommonProp = {
  colorMode: "light",
  transition: {
    type: "timing",
    duration: 2000,
  },
  backgroundColor: "#D4D4D4",
} as const;

const PostItem: React.FC<Props> = ({ item, loading }) => {
  return (
    <View style={style.container}>
      <Skeleton.Group show={loading}>
        <View style={style.itemMain}>
          <Skeleton {...SkeletonCommonProp}>
            <Animated.Text layout={Layout} entering={FadeIn.duration(1500)} style={style.title}>{item.title}</Animated.Text>
          </Skeleton>
          <Skeleton {...SkeletonCommonProp}>
            <Animated.Text layout={Layout} entering={FadeIn.duration(1500)} style={style.body}>{item.body.substring(0, 80) + "..."}</Animated.Text>
          </Skeleton>
        </View>
      </Skeleton.Group>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemMain: {
    gap: 10,
    backgroundColor: "rgba(258, 258, 258, 0.7)",
    borderRadius: 20,
    padding: 20,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: 600,
  },
  body: {
    fontSize: SIZES.medium,
    letterSpacing: 0.45,
  },
});

export default PostItem;
