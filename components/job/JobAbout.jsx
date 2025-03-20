import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { COLORS } from "../../constants/colors";

// In the job details screen, this is the portion about the job.
const JobAbout = ({ about }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About the job:</Text>
      <View style={styles.textBox}>
        <Text style={styles.text}>{about}</Text>
      </View>
    </View>
  );
};

export default JobAbout;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(9),
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: scale(11),
  },
  heading: {
    fontFamily: "Roboto-Bold",
    fontSize: moderateScale(19, 0.3),
    color: COLORS.primary,
  },
  textBox: { marginVertical: verticalScale(7) },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: moderateScale(14, 0.3),
    color: COLORS.gray,
    marginVertical: verticalScale(5),
  },
});
