import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.image1Parent}>
      <Image
        style={[styles.image1Icon, styles.image1IconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.iphone15Pro, styles.image1IconPosition]}
        contentFit="cover"
        source={require("../assets/iphone-15-pro.png")}
      />
      <View style={styles.groupChild} />
      <Text style={styles.kargolarm}>Kargolarım</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconPosition: {
    width: 404,
    left: 0,
    position: "absolute",
  },
  image1Icon: {
    top: 0,
    height: 886,
  },
  iphone15Pro: {
    top: 13,
    height: 859,
  },
  groupChild: {
    top: 342,
    left: 47,
    backgroundColor: Color.graysWhite,
    width: 120,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  kargolarm: {
    top: 347,
    left: 56,
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "500",
    fontFamily: FontFamily.iBMPlexSerifMedium,
    color: Color.labelsPrimary,
    textAlign: "left",
    position: "absolute",
  },
  image1Parent: {
    flex: 1,
    width: "100%",
    height: 886,
  },
});

export default Group;
