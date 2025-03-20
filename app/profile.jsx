import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { icons, images } from "../constants";
import { COLORS } from "../constants/colors";

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.lightWhite,
        height: "100%",
        width: "100%",
      }}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.back} onPress={() => router.back()}>
          <Image source={icons.left} style={styles.backImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profileImageNameContainer}>
          <View style={styles.profileCircle}>
            <Image source={images.profile} style={styles.profileImage} />
          </View>

          <View>
            <Text style={styles.profileName}>Kwangyeon Kim</Text>
          </View>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.aboutText}>
            Looking for an internship/entry-level opportunity in front-end,
            back-end, or full-stack engineering.
          </Text>
        </View>

        <View style={styles.jobSeekContainer}>
          <Text style={styles.jobSeekContainerText}>Seeking a job in:</Text>
          <Text>Front-End Engineering</Text>
          <Text>Back-End Engineering</Text>
          <Text>Full-Stack Engineering</Text>
        </View>

        <View style={styles.skillsExperienceContainer}>
          <View>
            <Text style={styles.titleText}>Skills</Text>
            <Text>HTML</Text>
            <Text>CSS</Text>
            <Text>JS</Text>
            <Text>React Native</Text>
          </View>

          <View>
            <Text style={styles.titleText}>Experiences</Text>
            <Text>Apple</Text>
            <Text>Google</Text>
            <Text>Sony</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: { padding: scale(13) },
  headerContainer: {
    left: scale(20),
  },
  back: { alignSelf: "flex-start", marginTop: verticalScale(10) },
  backImage: {
    height: scale(35),
    width: scale(35),
    marginTop: verticalScale(-10),
  },
  profileImageNameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileCircle: {
    backgroundColor: COLORS.profile,
    width: scale(210),
    height: scale(210),
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    height: scale(200),
    width: scale(200),
    borderRadius: 200,
  },
  aboutContainer: {
    backgroundColor: COLORS.profile,
    marginVertical: verticalScale(20),
    paddingHorizontal: scale(10),
    borderRadius: 20,
    paddingVertical: verticalScale(10),
  },
  profileName: {
    fontWeight: "bold",
    fontSize: moderateScale(25, 0.3),
  },
  aboutTitle: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: moderateScale(25, 0.3),
  },
  aboutText: {
    marginVertical: verticalScale(8),
  },
  jobSeekContainer: {
    backgroundColor: COLORS.profile,
    marginBottom: verticalScale(20),
    paddingHorizontal: scale(10),
    borderRadius: 20,
    paddingVertical: verticalScale(10),
  },
  jobSeekContainerText: {
    fontWeight: "bold",
    fontSize: moderateScale(25, 0.3),
    paddingBottom: verticalScale(9),
    fontStyle: "italic",
  },
  skillsExperienceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.profile,
    paddingHorizontal: scale(10),
    borderRadius: 20,
    paddingVertical: verticalScale(10),
  },
  titleText: {
    fontWeight: "bold",
    fontSize: moderateScale(25, 0.3),
    textDecorationLine: "underline",
    paddingBottom: verticalScale(4),
  },
});
