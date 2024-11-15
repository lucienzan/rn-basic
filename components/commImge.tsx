import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SIZES } from "../constants/theme";

interface Props {
  title?: string | null
}

const CommImage: React.FC<Props> = ({ title }) =>{
    return (
      <View style={style.container}>
        <View>
          <Text style={style.name}>Hi 👋🏻 {title}!</Text>
          <Text style={style.wb}>Welcome Back</Text>
        </View>
        <Image
          source={require("../assets/user/Teamwork-1.png")}
          style={{
            width: 60,
            height: 60,
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </View>
    );
  }

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: SIZES.large,
    letterSpacing: 0.6
  },
  wb: {
    fontSize: SIZES.large,
    letterSpacing: 0.6
  },
});

export default CommImage;
