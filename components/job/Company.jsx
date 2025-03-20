import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { icons } from "../../constants";
import { COLORS } from "../../constants/colors";

// In the job details screen, this is the portion that shows from the company image to location.
const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: companyLogo,
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleContainer}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyNameContainer}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationContainer}>
          <Image source={icons.location} style={styles.locationImage} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
  },
  logoContainer: {
    width: scale(75),
    height: scale(75),
    justifyContent: "center",
    alignItems: "center",
    background: "#FFF",
    borderRadius: 26,
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  jobTitleContainer: {
    marginTop: verticalScale(8),
  },
  jobTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: moderateScale(21, 0.3),
    textAlign: "center",
    color: COLORS.primary,
  },
  companyNameContainer: {
    marginTop: verticalScale(3),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(14, 0.3),
    color: COLORS.primary,
  },
  locationImage: {
    width: scale(14),
    height: scale(14),
    resizeMode: "contain",
    tintColor: COLORS.gray,
  },
  locationContainer: {
    flexDirection: "row",
  },
  locationName: {
    fontFamily: "Roboto-Regular",
    fontSize: moderateScale(14, 0.3),
    marginLeft: moderateScale(1, 0.3),
    color: COLORS.gray,
  },
});
