import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { COLORS } from "../../constants/colors";

// In the job details screen, this is the portion that shows the information under each tab.
// It shows under the Qualifications and Responsibilities tabs.
const Info = ({ title, linking }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.bulletsContainer}>
        {linking.map((item, index) => (
          <View style={styles.bulletsWrapper} key={item + index}>
            <View style={styles.bullet} />
            <Text style={styles.bulletText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(8),
    padding: scale(11),
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: moderateScale(19, 0.3),
    color: COLORS.primary,
  },
  bulletsContainer: {
    marginVertical: verticalScale(7),
  },
  bulletsWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: verticalScale(7),
  },
  bullet: {
    width: scale(4),
    height: scale(4),
    borderRadius: 5,
    marginTop: verticalScale(5),
    backgroundColor: COLORS.gray,
  },
  bulletText: {
    fontFamily: "Roboto-Regular",
    color: COLORS.gray,
    fontSize: moderateScale(12, 0.3),
    marginLeft: scale(13),
  },
});
