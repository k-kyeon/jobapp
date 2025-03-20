import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import SearchInput from "../components/home/SearchInput";
import { COLORS } from "../constants/colors";
import { useRouter } from "expo-router";
import RecommendedJobs from "../components/home/RecommendedJobs";
import NearbyJobs from "../components/home/NearbyJobs";
import { icons, images } from "../constants";
import { StatusBar } from "react-native";

const Home = () => {
  const router = useRouter();

  const jobTypes = ["Full-time", "Part-time", "Temporary", "Contractor"];

  const [activeJobType, setActiveJobType] = useState("Full-time");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView backgroundColor={COLORS.lightWhite}>
      <StatusBar style="dark-content" />
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image source={icons.menu} style={styles.btnImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileBtn}
          onPress={() => router.push("/profile")}
        >
          <Image source={images.profile} style={styles.btnImg} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.greeting}>Hello Kevin,</Text>
            <Text style={styles.introText}>Find your dream job</Text>
          </View>

          <SearchInput
            placeholderText="Search for a job"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <View style={styles.jobTabContainer}>
            <FlatList
              data={jobTypes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.jobTab(activeJobType, item)}
                  onPress={() => {
                    setActiveJobType(item);
                    router.push(`/search/${item}`);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              horizontal
              contentContainerStyle={{ columnGap: scale(8) }}
            />
          </View>

          <RecommendedJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: scale(14),
    paddingTop: verticalScale(10),
    height: verticalScale(50),
  },
  btnImg: {
    width: "100%",
    height: "100%",
  },
  menuBtn: {
    width: scale(35),
    height: scale(35),
    justifyContent: "center",
    alignItems: "center",
  },
  profileBtn: {
    width: scale(35),
    height: scale(35),
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    marginTop: verticalScale(14),
    fontFamily: "Roboto-Regular",
    fontSize: moderateScale(18, 0.4),
  },
  introText: {
    fontFamily: "Roboto-Bold",
    fontSize: moderateScale(19, 0.6),
    marginBottom: verticalScale(18),
  },
  jobTab: (activeJobType, item) => ({
    borderWidth: 1,
    borderRadius: 15,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    backgroundColor: activeJobType === item ? "#eaeef0" : "",
    paddingVertical: verticalScale(4),
    paddingHorizontal: scale(10),
  }),
  jobTabContainer: {
    width: "100%",
    marginTop: verticalScale(10),
  },
  jobTabText: (activeJobType, item) => ({
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    fontFamily: "Roboto-Medium",
  }),
  contentContainer: {
    padding: scale(15),
    backgroundColor: COLORS.lightWhite,
  },
});
