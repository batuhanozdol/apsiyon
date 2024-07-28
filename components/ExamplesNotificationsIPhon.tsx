import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

const ExamplesNotificationsIPhon = () => {
  return (
    <View style={[styles.examplesnotificationsIphon, styles.bezelIconLayout]}>
      <View style={[styles.lockScreen, styles.lockScreenPosition]}>
        <Image
          style={styles.wallpaperIcon}
          contentFit="cover"
          source={require("../assets/wallpaper.png")}
        />
        <View style={[styles.homeIndicator, styles.lockScreenPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <Image
          style={[styles.cameraButtonIcon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/camera-button.png")}
        />
        <Image
          style={[styles.flashlightButtonIcon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/flashlight-button.png")}
        />
        <Image
          style={[styles.timeIcon, styles.datePosition]}
          contentFit="cover"
          source={require("../assets/time.png")}
        />
        <Text style={[styles.date, styles.datePosition]}>Monday, June 6</Text>
        <View style={styles.swipeDownIndicator} />
        <View style={styles.statusBar}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.capIconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capIconPosition]} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
        <View style={[styles.notification, styles.notificationLayout3]}>
          <View style={[styles.notificationStack, styles.notificationLayout3]}>
            <View style={[styles.backgrounds, styles.backgroundsPosition]}>
              <View
                style={[styles.notification1, styles.notificationLayout2]}
              />
              <View
                style={[styles.notification2, styles.notificationLayout1]}
              />
              <View style={[styles.notification3, styles.notificationLayout]} />
            </View>
            <View style={[styles.notification4, styles.notificationPosition]}>
              <View
                style={[
                  styles.additionalNotifications,
                  styles.description2FlexBox,
                ]}
              >
                <Text style={styles.text} numberOfLines={1}>
                  +6 from Reminders, Notes, and Mail
                </Text>
              </View>
            </View>
            <View style={[styles.notification5, styles.notificationPosition]}>
              <View style={styles.titleTimeAndDescription}>
                <Text style={[styles.title, styles.titleTypo]}>Apsiyon</Text>
                <View style={[styles.description2, styles.description2FlexBox]}>
                  <Text
                    style={[styles.description21, styles.titleTypo]}
                    numberOfLines={1}
                  >
                    Description 2
                  </Text>
                </View>
              </View>
              <View style={[styles.frame, styles.frameLayout]}>
                <Image
                  style={[styles.appIcon, styles.appIconLayout]}
                  contentFit="cover"
                  source={require("../assets/app-icon.png")}
                />
                <Image
                  style={[styles.image7Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/image-7.png")}
                />
              </View>
            </View>
            <View style={[styles.notification6, styles.notificationPosition]}>
              <Image
                style={[styles.appIcon1, styles.appIconLayout]}
                contentFit="cover"
                source={require("../assets/app-icon1.png")}
              />
              <Image
                style={[styles.image8Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/image-8.png")}
              />
              <View style={styles.titleTimeAndDescription1}>
                <View style={styles.titleAndTime}>
                  <Text style={[styles.title1, styles.title1Typo]}>PUDO</Text>
                  <View style={styles.time}>
                    <Text style={styles.time1}>9:41 AM</Text>
                  </View>
                </View>
                <Text
                  style={[styles.description, styles.title1Typo]}
                >{`723634 numaralı kargonuz kutunuzda! `}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.bezelIcon, styles.bezelIconLayout]}
        contentFit="cover"
        source={require("../assets/bezel.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bezelIconLayout: {
    height: 852,
    width: 393,
  },
  lockScreenPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  buttonIconLayout: {
    height: 50,
    width: 50,
    bottom: 50,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  datePosition: {
    left: "50%",
    position: "absolute",
  },
  borderPosition: {
    height: 13,
    top: "50%",
    position: "absolute",
  },
  capIconPosition: {
    top: "50%",
    position: "absolute",
  },
  notificationLayout3: {
    height: 122,
    position: "absolute",
  },
  backgroundsPosition: {
    left: 8,
    right: 8,
  },
  notificationLayout2: {
    height: 25,
    top: 97,
  },
  notificationLayout1: {
    height: 31,
    top: 66,
  },
  notificationLayout: {
    borderRadius: Border.br_5xl,
    top: 0,
  },
  notificationPosition: {
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    position: "absolute",
  },
  description2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  titleTypo: {
    textAlign: "left",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.footnoteRegular_size,
  },
  frameLayout: {
    width: 35,
    position: "absolute",
  },
  appIconLayout: {
    display: "none",
    borderRadius: Border.br_4xs_5,
    overflow: "hidden",
  },
  iconLayout: {
    height: 37,
    width: 37,
  },
  title1Typo: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    textAlign: "left",
    color: Color.labelsPrimary,
    letterSpacing: 0,
  },
  wallpaperIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: 69.5,
    bottom: 8,
    width: 139,
    height: 5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.graysWhite,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: 34,
    left: 0,
  },
  cameraButtonIcon: {
    right: 46,
  },
  flashlightButtonIcon: {
    left: 46,
  },
  timeIcon: {
    marginLeft: -93.5,
    top: 119,
    width: 171,
    height: 73,
  },
  date: {
    marginLeft: -107.5,
    top: 76,
    fontSize: 22,
    fontFamily: FontFamily.font,
    color: "rgba(153, 153, 153, 0.8)",
    textAlign: "center",
    width: 215,
  },
  swipeDownIndicator: {
    top: 44,
    right: 48,
    borderRadius: 1,
    width: 48,
    height: 2,
    opacity: 0.35,
    backgroundColor: Color.graysWhite,
    position: "absolute",
  },
  border: {
    marginTop: -6.5,
    right: 2,
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.graysWhite,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
  },
  capIcon: {
    marginTop: -1.8,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
  },
  capacity: {
    marginTop: -4.5,
    right: 4,
    borderRadius: Border.br_10xs_5,
    width: 21,
    height: 9,
    backgroundColor: Color.graysWhite,
  },
  battery: {
    marginTop: -3.9,
    right: 33,
    width: 27,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 12,
  },
  statusBar: {
    height: 53,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  notification1: {
    right: 57,
    left: 57,
    borderBottomRightRadius: Border.br_sm_5,
    borderBottomLeftRadius: Border.br_sm_5,
    backgroundColor: Color.colorDarkgray_200,
    position: "absolute",
  },
  notification2: {
    right: 22,
    left: 22,
    borderBottomRightRadius: Border.br_mid,
    borderBottomLeftRadius: Border.br_mid,
    backgroundColor: Color.colorDarkgray_300,
    position: "absolute",
  },
  notification3: {
    backgroundColor: Color.colorDarkgray_400,
    height: 66,
    left: 0,
    right: 0,
    position: "absolute",
  },
  backgrounds: {
    height: 122,
    position: "absolute",
    top: 0,
  },
  text: {
    fontSize: 10,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    textAlign: "right",
    color: Color.vibrantLabelsVibrantSecondary,
    flex: 1,
    overflow: "hidden",
  },
  additionalNotifications: {
    width: 174,
  },
  notification4: {
    paddingRight: Padding.p_4xs,
    paddingTop: Padding.p_8xs,
    paddingLeft: Padding.p_35xl,
    borderRadius: Border.br_mid,
    left: 30,
    right: 30,
    paddingBottom: Padding.p_xs,
    overflow: "hidden",
    height: 25,
    top: 97,
  },
  title: {
    color: Color.labelsPrimary,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0,
  },
  description21: {
    width: 81,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    lineHeight: 18,
    letterSpacing: 0,
    color: Color.vibrantLabelsVibrantSecondary,
    overflow: "hidden",
  },
  description2: {
    marginLeft: 9,
  },
  titleTimeAndDescription: {
    width: 265,
    zIndex: 0,
    flexDirection: "row",
  },
  appIcon: {
    top: -14,
    height: 35,
    width: 35,
    position: "absolute",
    left: 0,
  },
  image7Icon: {
    top: -16,
    left: -1,
    position: "absolute",
  },
  frame: {
    left: 9,
    height: 21,
    zIndex: 1,
    overflow: "hidden",
    top: 0,
  },
  notification5: {
    paddingRight: Padding.p_4xs,
    paddingTop: Padding.p_8xs,
    paddingLeft: Padding.p_35xl,
    borderRadius: Border.br_mid,
    left: 30,
    right: 30,
    paddingBottom: Padding.p_xs,
    overflow: "hidden",
    height: 31,
    top: 66,
  },
  appIcon1: {
    width: 38,
    height: 38,
  },
  image8Icon: {
    borderRadius: 5,
    marginLeft: 10,
  },
  title1: {
    lineHeight: 20,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    flex: 1,
  },
  time1: {
    left: 2,
    lineHeight: 20,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.footnoteRegular_size,
    textAlign: "right",
    color: Color.vibrantLabelsVibrantSecondary,
    top: 0,
    position: "absolute",
  },
  time: {
    width: 51,
    marginLeft: 16,
    alignSelf: "stretch",
  },
  titleAndTime: {
    paddingRight: Padding.p_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  description: {
    width: 292,
    lineHeight: 20,
    fontFamily: FontFamily.montserratRegular,
  },
  titleTimeAndDescription1: {
    height: 40,
    marginLeft: 10,
    flex: 1,
  },
  notification6: {
    paddingHorizontal: Padding.p_sm,
    paddingTop: Padding.p_sm,
    borderRadius: Border.br_5xl,
    top: 0,
    left: 8,
    right: 8,
  },
  notificationStack: {
    left: 0,
    top: 0,
    width: 393,
    height: 122,
  },
  notification: {
    top: 572,
    left: 0,
    width: 393,
    height: 122,
  },
  lockScreen: {
    backgroundColor: Color.templateComponentFill,
    overflow: "hidden",
    left: 0,
    top: 0,
    borderRadius: Border.br_29xl,
  },
  bezelIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  examplesnotificationsIphon: {
    borderRadius: Border.br_29xl,
  },
});

export default ExamplesNotificationsIPhon;
