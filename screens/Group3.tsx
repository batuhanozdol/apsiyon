import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group3 = () => {
  return (
    <View style={styles.img99971Parent}>
      <Image
        style={[styles.img99971Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/img-9997-1.png")}
      />
      <Image
        style={[styles.image2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={[styles.iphone15Pro, styles.iphone15ProPosition]}
        contentFit="cover"
        source={require("../assets/iphone-15-pro1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  iphone15ProPosition: {
    top: 0,
    height: 859,
  },
  img99971Icon: {
    width: 400,
    top: 0,
    height: 859,
  },
  image2Icon: {
    top: 201,
    width: 396,
    height: 577,
  },
  iphone15Pro: {
    left: 4,
    width: 404,
    position: "absolute",
    top: 0,
  },
  img99971Parent: {
    flex: 1,
    width: "100%",
    height: 859,
  },
});

export default Group3;
