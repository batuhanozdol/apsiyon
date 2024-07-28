import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const ExamplesKeyboardIPhone = () => {
  return (
    <View style={styles.exampleskeyboardIphone}>
      <View style={styles.contents}>
        <View style={styles.navigationBar}>
          <View style={[styles.materials, styles.materialPosition]}>
            <View style={[styles.chrome, styles.chromePosition]} />
          </View>
          <View style={styles.statusBar}>
            <View style={[styles.time, styles.timePosition]}>
              <Text style={styles.time1}>9:41</Text>
            </View>
            <View style={[styles.levels, styles.levelsPosition]}>
              <View style={[styles.battery, styles.alertPosition]}>
                <View style={[styles.border, styles.alertPosition]} />
                <Image
                  style={[styles.capIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/cap1.png")}
                />
                <View style={[styles.capacity, styles.alertPosition]} />
              </View>
              <Image
                style={[styles.wifiIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/wifi1.png")}
              />
              <Image
                style={[styles.cellularConnectionIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/cellular-connection1.png")}
              />
            </View>
          </View>
          <View style={styles.contents1}>
            <View style={styles.prompt}>
              <Text style={[styles.prompt1, styles.theFlexBox]}>
                This is a prompt message.
              </Text>
            </View>
            <View style={styles.buttonLayout}>
              <View style={[styles.leading, styles.leadingFlexBox]}>
                <Text style={[styles.chevron, styles.textClr]}>􀆉</Text>
                <Text style={[styles.label, styles.textClr]}>Back</Text>
              </View>
              <Text style={[styles.title, styles.titleTypo]}>PUDO</Text>
              <View style={[styles.trailing, styles.trailingFlexBox]}>
                <View style={styles.trailingButton1}>
                  <Text style={[styles.text, styles.textClr]}>􀈂</Text>
                </View>
              </View>
            </View>
            <View style={[styles.searchField, styles.searchFieldSpaceBlock]}>
              <View style={[styles.searchField1, styles.leadingFlexBox]}>
                <Text style={[styles.searchGlyph, styles.dictationTypo]}>
                  􀊫
                </Text>
                <Text
                  style={[styles.placeholderLabel, styles.dictationTypo]}
                  numberOfLines={1}
                >
                  Search
                </Text>
                <Text style={[styles.dictation, styles.dictationTypo]}>􀊱</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentArea}>
          <View style={[styles.alert, styles.alertPosition]}>
            <View style={[styles.material, styles.materialPosition]}>
              <View style={[styles.regular, styles.chromePosition]} />
            </View>
            <View
              style={[styles.titleAndDescription, styles.searchFieldSpaceBlock]}
            >
              <Text
                style={[styles.kargonTeslimEdildi, styles.titleTypo]}
              >{`Kargon Teslim Edildi!
`}</Text>
              <Text
                style={[styles.numaralKargonPudo, styles.prompt1Layout]}
              >{`772532636 numaralı kargon PUDO noktasına teslim edildi. QR kodu okutarak gönderini hemen teslim alabilirsin!  

https://pudo.qr.com/772532636`}</Text>
            </View>
            <View style={[styles.button, styles.buttonLayout]}>
              <Text style={[styles.title1, styles.textClr]}>Action</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.keyboardIphone, styles.trailingFlexBox]}>
        <View style={[styles.background, styles.materialPosition]} />
        <View style={styles.accessoryBar}>
          <View style={[styles.autocorrection, styles.autocorrectionFlexBox]}>
            <View style={styles.autocompleteSuggestion}>
              <Text style={[styles.the, styles.theFlexBox]} numberOfLines={1}>
                “The”
              </Text>
            </View>
            <View style={[styles.separatorClear, styles.autocorrectionFlexBox]}>
              <View style={styles.separator} />
            </View>
            <View style={styles.autocompleteSuggestion1}>
              <Text style={[styles.the, styles.theFlexBox]} numberOfLines={1}>
                the
              </Text>
            </View>
            <View style={[styles.separatorClear, styles.autocorrectionFlexBox]}>
              <View style={styles.separator2} />
            </View>
            <View style={styles.autocompleteSuggestion1}>
              <Text style={[styles.the, styles.theFlexBox]} numberOfLines={1}>
                to
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.spacer} />
        <View style={styles.keyboardLayouts}>
          <View style={styles.row4}>
            <View style={[styles.space, styles.spacePosition]}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q, styles.qPosition]}>space</Text>
            </View>
          </View>
          <View style={[styles.return, styles.returnLayout]}>
            <View style={styles.keyShadowBox} />
            <Text style={[styles.q1, styles.qPosition]}>return</Text>
          </View>
          <View style={[styles.keyboardSwitch, styles.returnLayout]}>
            <View style={styles.keyShadowBox} />
            <Text style={[styles.q1, styles.qPosition]}>ABC</Text>
          </View>
          <View style={styles.row3}>
            <View style={styles.key3}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q2, styles.q2Position]}>z</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q3, styles.q2Position]}>x</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q3, styles.q2Position]}>c</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q3, styles.q2Position]}>v</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q6, styles.q2Position]}>b</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q6, styles.q2Position]}>n</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q8, styles.q2Position]}>m</Text>
            </View>
          </View>
          <View style={[styles.deleteKey, styles.keyLayout]}>
            <View style={styles.keyShadowBox} />
            <Text style={[styles.delete, styles.q2Position]}>􀆛</Text>
          </View>
          <View style={[styles.shiftKey, styles.keyLayout]}>
            <View style={styles.keyShadowBox} />
            <Text style={[styles.delete, styles.q2Position]}>􀆝</Text>
          </View>
          <View style={styles.row2}>
            <View style={styles.key3}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q9, styles.q2Position]}>a</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q10, styles.q2Position]}>s</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q11, styles.q2Position]}>d</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q12, styles.q2Position]}>f</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q13, styles.q2Position]}>g</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q11, styles.q2Position]}>h</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q15, styles.q2Position]}>j</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q11, styles.q2Position]}>k</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q15, styles.q2Position]}>l</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.key3}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q6, styles.q2Position]}>q</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q19, styles.q2Position]}>w</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q6, styles.q2Position]}>e</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q21, styles.q2Position]}>r</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q21, styles.q2Position]}>t</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q3, styles.q2Position]}>y</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q6, styles.q2Position]}>u</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q25, styles.q2Position]}>i</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q6, styles.q2Position]}>o</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keyShadowBox1} />
              <Text style={[styles.q6, styles.q2Position]}>p</Text>
            </View>
          </View>
        </View>
        <View style={styles.emojiAndMic}>
          <Image
            style={styles.emojiIcon}
            contentFit="cover"
            source={require("../assets/emoji.png")}
          />
          <Text style={styles.mike}>􀊰</Text>
        </View>
        <View style={styles.homeIndicator}>
          <View style={styles.homePosition} />
        </View>
      </View>
      <View style={[styles.homeIndicator2, styles.statusBar1Position]}>
        <View style={styles.homePosition} />
      </View>
      <View style={[styles.statusBar1, styles.statusBar1Position]}>
        <View style={styles.timePosition}>
          <Text style={[styles.time3, styles.titleTypo]}>9:41</Text>
        </View>
        <View style={styles.levelsPosition}>
          <View style={[styles.battery, styles.alertPosition]}>
            <View style={[styles.border, styles.alertPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap1.png")}
            />
            <View style={[styles.capacity, styles.alertPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection1.png")}
          />
        </View>
      </View>
      <Image
        style={styles.bezelIcon}
        contentFit="cover"
        source={require("../assets/bezel.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  materialPosition: {
    zIndex: 0,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  chromePosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  timePosition: {
    right: "64.25%",
    width: "35.75%",
    marginTop: -27,
    top: "50%",
    height: 54,
    left: "0%",
    position: "absolute",
  },
  levelsPosition: {
    left: "64.25%",
    top: "50%",
    width: "35.75%",
    marginTop: -27,
    height: 54,
    right: "0%",
    position: "absolute",
  },
  alertPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  theFlexBox: {
    display: "flex",
    justifyContent: "center",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelsPrimary,
    alignItems: "center",
    position: "absolute",
  },
  leadingFlexBox: {
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  textClr: {
    color: Color.colorsBlue,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
  },
  titleTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  trailingFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    right: 0,
    position: "absolute",
  },
  searchFieldSpaceBlock: {
    paddingBottom: Padding.p_mini,
    paddingHorizontal: Padding.p_base,
  },
  dictationTypo: {
    color: Color.labelsSecondary,
    fontFamily: FontFamily.bodyRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
  },
  prompt1Layout: {
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
  },
  buttonLayout: {
    height: 44,
    alignSelf: "stretch",
  },
  autocorrectionFlexBox: {
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  spacePosition: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  qPosition: {
    lineHeight: 21,
    fontSize: FontSize.m3BodyLarge_size,
    marginTop: -21,
    height: 42,
    fontFamily: FontFamily.montserratRegular,
    justifyContent: "center",
    display: "flex",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelsPrimary,
    top: "50%",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  returnLayout: {
    width: "23.41%",
    height: 42,
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    position: "absolute",
  },
  q2Position: {
    lineHeight: 28,
    fontFamily: FontFamily.montserratRegular,
    left: "50%",
    textAlign: "center",
    color: Color.labelsPrimary,
    top: "50%",
    position: "absolute",
  },
  keyLayout: {
    width: "11.2%",
    bottom: 54,
    height: 42,
    borderRadius: Border.br_8xs_6,
    position: "absolute",
  },
  statusBar1Position: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  chrome: {
    backgroundColor: Color.colorGray_200,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  materials: {
    borderColor: Color.miscellaneousBarBorder,
    borderBottomWidth: 0.3,
    borderStyle: "solid",
    overflow: "hidden",
  },
  time1: {
    left: "36.94%",
    textAlign: "center",
    color: Color.labelsPrimary,
    fontFamily: FontFamily.bodyRegular,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    top: "33.89%",
    position: "absolute",
  },
  time: {
    display: "none",
  },
  border: {
    marginLeft: -13.65,
    borderRadius: Border.br_8xs_3,
    borderColor: Color.labelsPrimary,
    borderWidth: 1,
    opacity: 0.35,
    width: 25,
    bottom: "0%",
    height: "100%",
    top: "0%",
    borderStyle: "solid",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    opacity: 0.4,
    width: 1,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    width: 21,
    backgroundColor: Color.labelsPrimary,
  },
  battery: {
    height: "24.07%",
    marginLeft: 10.75,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13.55,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -40.25,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    display: "none",
  },
  statusBar: {
    zIndex: 1,
    height: 54,
    alignSelf: "stretch",
  },
  prompt1: {
    height: "78.95%",
    width: "91.86%",
    top: "18.42%",
    left: "4.07%",
    justifyContent: "center",
    lineHeight: 18,
    fontSize: FontSize.footnoteRegular_size,
    fontFamily: FontFamily.bodyRegular,
  },
  prompt: {
    height: 38,
    display: "none",
    alignSelf: "stretch",
  },
  chevron: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  label: {
    marginLeft: 3,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
  },
  leading: {
    paddingVertical: Padding.p_2xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title: {
    top: "25%",
    left: "43.51%",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  text: {
    textAlign: "right",
    fontFamily: FontFamily.montserratRegular,
  },
  trailingButton1: {
    flexDirection: "row",
  },
  trailing: {
    paddingTop: Padding.p_2xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_2xs,
    flexDirection: "row",
    top: 0,
  },
  searchGlyph: {
    textAlign: "left",
    width: 25,
  },
  placeholderLabel: {
    height: 22,
    textAlign: "left",
    letterSpacing: 0,
    overflow: "hidden",
    flex: 1,
  },
  dictation: {
    textAlign: "center",
  },
  searchField1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fillsTertiary,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
  },
  searchField: {
    paddingTop: Padding.p_12xs,
    display: "none",
    alignSelf: "stretch",
  },
  contents1: {
    zIndex: 2,
    alignSelf: "stretch",
  },
  navigationBar: {
    borderTopLeftRadius: Border.br_25xl,
    borderTopRightRadius: Border.br_25xl,
    height: 98,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  regular: {
    backgroundColor: Color.colorDarkgray_100,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  material: {
    overflow: "hidden",
  },
  kargonTeslimEdildi: {
    textAlign: "left",
    letterSpacing: 0,
    color: Color.labelsPrimary,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    alignSelf: "stretch",
  },
  numaralKargonPudo: {
    marginTop: 2,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
    color: Color.labelsPrimary,
    alignSelf: "stretch",
  },
  titleAndDescription: {
    width: 270,
    height: 141,
    justifyContent: "center",
    zIndex: 1,
  },
  title1: {
    marginTop: -11,
    marginLeft: -29,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    top: "50%",
  },
  button: {
    borderColor: Color.miscellaneousAlertMenuActionSheetSeparators,
    borderTopWidth: 0.3,
    zIndex: 2,
    display: "none",
    borderStyle: "solid",
  },
  alert: {
    marginTop: -347,
    marginLeft: -180.5,
    borderRadius: 14,
    height: 229,
    paddingTop: 19,
    justifyContent: "space-between",
    top: "50%",
    left: "50%",
    overflow: "hidden",
  },
  contentArea: {
    alignSelf: "stretch",
    flex: 1,
  },
  contents: {
    borderRadius: Border.br_25xl,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.graysWhite,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.colorDimgray,
    alignItems: "center",
  },
  the: {
    width: 124,
    height: 39,
    fontFamily: FontFamily.montserratRegular,
    justifyContent: "center",
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    left: "0%",
    top: "0%",
    display: "flex",
    overflow: "hidden",
  },
  autocompleteSuggestion: {
    backgroundColor: Color.miscellaneousKeyboardAccessoryBarSelection,
    borderRadius: Border.br_8xs_6,
    alignSelf: "stretch",
    flex: 1,
  },
  separator: {
    opacity: 0,
    backgroundColor: Color.labelsPrimary,
    width: 1,
    alignSelf: "stretch",
  },
  separatorClear: {
    height: 25,
    paddingHorizontal: Padding.p_11xs,
    marginLeft: 2,
    justifyContent: "center",
  },
  autocompleteSuggestion1: {
    marginLeft: 2,
    borderRadius: Border.br_8xs_6,
    alignSelf: "stretch",
    flex: 1,
  },
  separator2: {
    opacity: 0.1,
    backgroundColor: Color.labelsPrimary,
    width: 1,
    alignSelf: "stretch",
  },
  autocorrection: {
    paddingHorizontal: Padding.p_12xs,
    height: 39,
    flex: 1,
  },
  accessoryBar: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    flexDirection: "row",
    zIndex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  spacer: {
    opacity: 0.6,
    height: 5,
    zIndex: 2,
    alignSelf: "stretch",
  },
  keyShadowBox1: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: Border.br_8xs_6,
    backgroundColor: Color.graysWhite,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  q: {
    width: 191,
  },
  space: {
    height: 42,
    borderRadius: Border.br_8xs_6,
    left: "0%",
    top: 0,
  },
  row4: {
    width: "48.6%",
    right: "25.7%",
    left: "25.7%",
    height: 42,
    bottom: 0,
    position: "absolute",
  },
  keyShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: Border.br_8xs_6,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  q1: {
    width: 92,
  },
  return: {
    left: "75.83%",
    right: "0.76%",
  },
  keyboardSwitch: {
    right: "75.83%",
    left: "0.76%",
  },
  q2: {
    marginLeft: -5.65,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  key3: {
    height: 42,
    borderRadius: Border.br_8xs_6,
    flex: 1,
  },
  q3: {
    marginLeft: -6.65,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  key5: {
    marginLeft: 6,
    height: 42,
    borderRadius: Border.br_8xs_6,
    flex: 1,
  },
  q6: {
    marginLeft: -7.65,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  q8: {
    marginLeft: -12.65,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  row3: {
    width: "68.45%",
    right: "15.78%",
    left: "15.78%",
    bottom: 54,
    flexDirection: "row",
    position: "absolute",
  },
  delete: {
    marginTop: -14,
    marginLeft: -6,
    fontSize: FontSize.size_xl,
  },
  deleteKey: {
    left: "88.04%",
    right: "0.76%",
  },
  shiftKey: {
    right: "88.04%",
    left: "0.76%",
  },
  q9: {
    marginLeft: -6.6,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  q10: {
    marginLeft: -5.6,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  q11: {
    marginLeft: -7.6,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  q12: {
    marginLeft: -3.6,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  q13: {
    marginLeft: -8.6,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  q15: {
    marginLeft: -2.6,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  row2: {
    width: "88.3%",
    right: "5.85%",
    bottom: 108,
    left: "5.85%",
    flexDirection: "row",
    position: "absolute",
  },
  q19: {
    marginLeft: -10.65,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  q21: {
    marginLeft: -4.65,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  q25: {
    marginLeft: -2.65,
    fontSize: FontSize.size_6xl,
    marginTop: -17,
    lineHeight: 28,
  },
  row1: {
    width: "98.47%",
    bottom: 162,
    left: "0.76%",
    right: "0.76%",
    flexDirection: "row",
    position: "absolute",
  },
  keyboardLayouts: {
    height: 204,
    zIndex: 3,
    alignSelf: "stretch",
  },
  emojiIcon: {
    height: 27,
    width: 27,
  },
  mike: {
    fontSize: FontSize.size_8xl,
    color: Color.miscellaneousKeyboardEmojiMic,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "center",
  },
  emojiAndMic: {
    height: 58,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_6xl,
    zIndex: 4,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  homePosition: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 139,
    borderRadius: Border.br_81xl,
    bottom: 8,
    marginLeft: 69.5,
    height: 5,
    backgroundColor: Color.labelsPrimary,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    zIndex: 5,
    height: 21,
    alignSelf: "stretch",
  },
  keyboardIphone: {
    borderBottomRightRadius: Border.br_25xl,
    borderBottomLeftRadius: Border.br_25xl,
    paddingTop: Padding.p_10xs,
    overflow: "hidden",
    left: 0,
    bottom: 0,
  },
  homeIndicator2: {
    height: 21,
    left: 0,
    bottom: 0,
  },
  time3: {
    left: "38.36%",
    textAlign: "center",
    color: Color.labelsPrimary,
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    top: "33.89%",
    fontFamily: FontFamily.montserratSemiBold,
    position: "absolute",
  },
  statusBar1: {
    bottom: 798,
    left: 0,
    top: 0,
  },
  bezelIcon: {
    width: 393,
    left: 0,
    top: 0,
    position: "absolute",
    height: 852,
  },
  exampleskeyboardIphone: {
    height: 852,
    width: "100%",
    flex: 1,
  },
});

export default ExamplesKeyboardIPhone;
