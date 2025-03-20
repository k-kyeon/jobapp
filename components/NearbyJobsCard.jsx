import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const NearbyJobsCard = ({ job, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleCardPress}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: job.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.jobTitle} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scale(12),
    backgroundColor: "#e8eaf6",
    borderRadius: 10,
    marginTop: verticalScale(11),
  },
  logoContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: scale(10),
  },
  jobTitle: {
    fontFamily: "Roboto-Regular",
    color: COLORS.primary,
    fontSize: moderateScale(13, 0.3),
  },
  jobType: {
    fontFamily: "Roboto-Regular",
    color: COLORS.gray,
    fontSize: moderateScale(13, 0.3),
  },
});
