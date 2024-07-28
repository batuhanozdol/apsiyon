import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Group1 = () => {
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
      <View style={styles.groupItem} />
      <View style={styles.scrollableListDialog}>
        <View style={styles.content}>
          <View style={styles.textContent}>
            <Text style={styles.headline}>Dialog title</Text>
            <Text style={[styles.supportingText, styles.supportingTypo]}>
              A dialog is a type of modal window that appears in front of app
              content to provide critical information, or ask for a decision.
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.list}>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text style={styles.trailingTypo}>100+</Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text style={styles.trailingTypo}>100+</Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text style={styles.trailingTypo}>100+</Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalmiddleSpaceBlock}>
                  <View style={styles.divider} />
                </View>
              </View>
              <View style={styles.listItem1}>
                <View
                  style={[
                    styles.stateLayerOverlay,
                    styles.stateLayerOverlayPosition,
                  ]}
                />
                <View style={styles.stateLayer}>
                  <View style={styles.leadingElement}>
                    <View
                      style={[
                        styles.buildingBlocksmonogram,
                        styles.buttonLayout,
                      ]}
                    >
                      <Text style={[styles.initial, styles.initialTypo]}>
                        A
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.content1, styles.content1FlexBox]}>
                    <Text style={styles.overline}>Overline</Text>
                    <Text style={styles.headline1}>List item</Text>
                    <Text
                      style={[styles.supportingText1, styles.supportingTypo]}
                    >
                      Supporting line text lorem ipsum dolor sit amet,
                      consectetur.
                    </Text>
                  </View>
                  <View style={styles.trailingElement}>
                    <Text
                      style={[
                        styles.trailingSupportingText3,
                        styles.trailingTypo,
                      ]}
                    >
                      100+
                    </Text>
                    <View style={styles.checkboxes}>
                      <View style={styles.stateLayer1}>
                        <View style={styles.container} />
                        <Image
                          style={[styles.checkSmallIcon, styles.iconLayout]}
                          contentFit="cover"
                          source={require("../assets/check-small.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.horizontalmiddleInset11,
                    styles.horizontalmiddleSpaceBlock,
                  ]}
                >
                  <View style={styles.divider} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <View style={[styles.secondaryButton, styles.buttonLayout]}>
            <View style={[styles.stateLayer24, styles.content1FlexBox]}>
              <Text style={[styles.labelText, styles.initialTypo]}>
                Action 2
              </Text>
            </View>
          </View>
          <View style={[styles.primaryButton, styles.buttonLayout]}>
            <View style={[styles.stateLayer24, styles.content1FlexBox]}>
              <Text style={[styles.labelText, styles.initialTypo]}>
                Action 1
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View
          style={[
            styles.buildingBlocksstateLayer5Parent,
            styles.buildingLayout,
          ]}
        >
          <View style={styles.buildingShadowBox}>
            <View
              style={[
                styles.buildingBlocksstateLayer5Child,
                styles.stateLayerOverlayPosition,
              ]}
            />
          </View>
          <Image
            style={styles.pudoLogoRed1Icon}
            contentFit="cover"
            source={require("../assets/pudologored-1.png")}
          />
        </View>
        <View
          style={[styles.buildingBlocksstateLayer5Group, styles.buildingLayout]}
        >
          <View style={styles.buildingShadowBox}>
            <View
              style={[
                styles.buildingBlocksstateLayer5Child,
                styles.stateLayerOverlayPosition,
              ]}
            />
          </View>
          <Image
            style={styles.pudoLogoRed1Icon}
            contentFit="cover"
            source={require("../assets/pudologored-11.png")}
          />
        </View>
        <View
          style={[
            styles.buildingBlocksstateLayer5Container,
            styles.buildingLayout,
          ]}
        >
          <View style={styles.buildingShadowBox}>
            <View
              style={[
                styles.buildingBlocksstateLayer5Child,
                styles.stateLayerOverlayPosition,
              ]}
            />
          </View>
          <Image
            style={styles.pudoLogoRed1Icon}
            contentFit="cover"
            source={require("../assets/pudologored-1.png")}
          />
        </View>
        <View
          style={[
            styles.buildingBlocksstateLayer5Wrapper,
            styles.buildingLayout,
          ]}
        >
          <View style={styles.buildingShadowBox}>
            <View
              style={[
                styles.buildingBlocksstateLayer5Child,
                styles.stateLayerOverlayPosition,
              ]}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.arrowBackIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-back.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image1IconPosition: {
    width: 404,
    left: 0,
    position: "absolute",
  },
  supportingTypo: {
    color: Color.schemesOnSurfaceVariant,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.m3BodyMedium,
    alignSelf: "stretch",
    textAlign: "left",
    fontSize: FontSize.m3LabelLarge_size,
  },
  stateLayerOverlayPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  buttonLayout: {
    height: 40,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  initialTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3LabelLarge,
    letterSpacing: 0,
    fontWeight: "500",
  },
  content1FlexBox: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  trailingTypo: {
    textAlign: "right",
    fontSize: FontSize.m3LabelSmall_size,
    lineHeight: 16,
    letterSpacing: 1,
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.schemesOnSurfaceVariant,
    fontWeight: "500",
  },
  horizontalmiddleSpaceBlock: {
    zIndex: 2,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  buildingLayout: {
    height: 141,
    width: 149,
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
    width: 120,
    overflow: "hidden",
    height: 24,
    backgroundColor: Color.graysWhite,
    position: "absolute",
    display: "none",
  },
  kargolarm: {
    top: 347,
    left: 56,
    fontFamily: FontFamily.iBMPlexSerifMedium,
    color: Color.labelsPrimary,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
    display: "none",
  },
  groupItem: {
    top: 164,
    width: 389,
    height: 623,
    overflow: "hidden",
    backgroundColor: Color.graysWhite,
    left: 0,
    position: "absolute",
  },
  headline: {
    fontSize: FontSize.m3HeadlineSmall_size,
    lineHeight: 32,
    color: Color.schemesOnSurface,
    fontFamily: FontFamily.m3BodyMedium,
    alignSelf: "stretch",
    textAlign: "left",
  },
  supportingText: {
    marginTop: 16,
  },
  textContent: {
    padding: Padding.p_5xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  stateLayerOverlay: {
    zIndex: 0,
  },
  initial: {
    marginTop: -20,
    marginLeft: -20,
    color: Color.schemesOnPrimaryContainer,
    display: "flex",
    lineHeight: 24,
    fontSize: FontSize.m3BodyLarge_size,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelLarge,
    left: "50%",
    top: "50%",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buildingBlocksmonogram: {
    backgroundColor: Color.schemesPrimaryContainer,
    width: 40,
    height: 40,
  },
  leadingElement: {
    justifyContent: "center",
    overflow: "hidden",
  },
  overline: {
    fontSize: FontSize.m3LabelMedium_size,
    lineHeight: 16,
    letterSpacing: 1,
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.schemesOnSurfaceVariant,
    alignSelf: "stretch",
    textAlign: "left",
    fontWeight: "500",
    display: "none",
  },
  headline1: {
    letterSpacing: 1,
    lineHeight: 24,
    fontSize: FontSize.m3BodyLarge_size,
    color: Color.schemesOnSurface,
    fontFamily: FontFamily.m3BodyMedium,
    alignSelf: "stretch",
    textAlign: "left",
  },
  supportingText1: {
    display: "none",
  },
  content1: {
    marginLeft: 16,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  container: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.schemesPrimary,
    width: 18,
    height: 18,
    zIndex: 0,
  },
  checkSmallIcon: {
    marginTop: -12,
    marginLeft: -12,
    left: "50%",
    top: "50%",
    width: 24,
    zIndex: 1,
  },
  stateLayer1: {
    padding: Padding.p_2xs,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxes: {
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  trailingElement: {
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  stateLayer: {
    height: 56,
    paddingVertical: Padding.p_5xs,
    zIndex: 1,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  divider: {
    borderStyle: "solid",
    borderColor: Color.schemesOutlineVariant,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  listItem1: {
    minHeight: 56,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  trailingSupportingText3: {
    display: "none",
  },
  horizontalmiddleInset11: {
    display: "none",
  },
  list: {
    width: 280,
    left: 0,
    top: 0,
    position: "absolute",
  },
  listContainer: {
    height: 170,
    alignSelf: "stretch",
  },
  content: {
    width: 280,
    overflow: "hidden",
    display: "none",
  },
  labelText: {
    color: Color.schemesPrimary,
    textAlign: "center",
    fontFamily: FontFamily.m3LabelLarge,
    lineHeight: 20,
    fontSize: FontSize.m3LabelLarge_size,
  },
  stateLayer24: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  secondaryButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButton: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  actions: {
    justifyContent: "flex-end",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xl,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_5xl,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    display: "none",
  },
  scrollableListDialog: {
    top: 189,
    left: 17,
    borderRadius: 28,
    backgroundColor: Color.schemesSurfaceContainerHigh,
    width: 355,
    height: 564,
    minWidth: 280,
    maxWidth: 560,
    position: "absolute",
    display: "none",
  },
  buildingBlocksstateLayer5Child: {
    backgroundColor: Color.m3StateLayersLightOnSurfaceOpacity016,
  },
  buildingShadowBox: {
    backgroundColor: Color.schemesSurface,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    height: 141,
    width: 149,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pudoLogoRed1Icon: {
    top: 12,
    left: 11,
    width: 128,
    height: 116,
    position: "absolute",
  },
  buildingBlocksstateLayer5Parent: {
    left: 168,
    width: 149,
    top: 204,
  },
  buildingBlocksstateLayer5Group: {
    left: 0,
    top: 0,
  },
  buildingBlocksstateLayer5Container: {
    left: 168,
    width: 149,
    top: 0,
  },
  buildingBlocksstateLayer5Wrapper: {
    top: 204,
    left: 0,
  },
  groupParent: {
    top: 271,
    left: 36,
    width: 317,
    height: 345,
    position: "absolute",
  },
  arrowBackIcon: {
    top: 216,
    left: 24,
  },
  image1Parent: {
    display: "none",
    height: 886,
    width: "100%",
    flex: 1,
  },
});

export default Group1;
