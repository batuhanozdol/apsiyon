import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Group2 = () => {
  return (
    <View style={styles.image1Parent}>
      <Image
        style={[styles.image1Icon, styles.image1IconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.image4Icon, styles.groupItemLayout]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={[styles.iphone15Pro, styles.image1IconPosition]}
        contentFit="cover"
        source={require("../assets/iphone-15-pro.png")}
      />
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Text style={[styles.kargolarm, styles.groupPosition]}>Kargolarım</Text>
      <View style={[styles.groupItem, styles.groupPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconPosition: {
    width: 404,
    left: 34,
    position: "absolute",
  },
  groupItemLayout: {
    height: 623,
    width: 389,
    top: 164,
  },
  groupPosition: {
    display: "none",
    position: "absolute",
  },
  image1Icon: {
    top: 0,
    height: 886,
  },
  image4Icon: {
    left: 36,
    position: "absolute",
  },
  image5Icon: {
    top: 212,
    left: 0,
    width: 461,
    height: 279,
    position: "absolute",
  },
  iphone15Pro: {
    top: 13,
    height: 859,
  },
  groupChild: {
    top: 342,
    left: 81,
    width: 120,
    height: 24,
    overflow: "hidden",
    backgroundColor: Color.graysWhite,
    display: "none",
  },
  kargolarm: {
    top: 347,
    left: 90,
    fontSize: FontSize.m3LabelLarge_size,
    fontWeight: "500",
    fontFamily: FontFamily.iBMPlexSerifMedium,
    color: Color.labelsPrimary,
    textAlign: "left",
  },
  groupItem: {
    overflow: "hidden",
    backgroundColor: Color.graysWhite,
    display: "none",
    height: 623,
    width: 389,
    top: 164,
    left: 34,
  },
  image1Parent: {
    flex: 1,
    width: "100%",
    height: 886,
  },
});

export default Group2;
