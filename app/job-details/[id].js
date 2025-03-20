import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useState, useCallback } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { icons } from "../../constants";
import { COLORS } from "../../constants/colors";
import Company from "../../components/job/Company";
import JobTabs from "../../components/job/JobTabs";
import Info from "../../components/job/Info";
import JobAbout from "../../components/job/JobAbout";
import JobFooter from "../../components/job/JobFooter";
import useFetch from "../../hook/useFetch";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  // Allows us to get the specific ID of the job details page we're on
  const params = useLocalSearchParams();
  // const { data, isLoading, error, refetch } = useFetch("job-details", {
  //   job_id: params.id,
  // });
  const data = [
    {
      job_id: "12345",
      job_country: "USA",
      job_title: "Developer",
      job_type: "Full-time",
      employer_name: "Apple",
      employer_logo: "https://loremflickr.com/200/200?random=1",
    },
    {
      job_id: "22225",
      job_country: "France",
      job_title: "Web Developer",
      job_type: "Full-time",
      employer_name: "Google",
      employer_logo: "https://loremflickr.com/200/200?random=1",
    },
    {
      job_id: "33215",
      job_country: "Pakistan",
      job_title: "Front Web Developer",
      job_type: "Full-time",
      employer_name: "Udemy",
      employer_logo: "https://loremflickr.com/200/200?random=1",
    },
  ];
  const isLoading = false;
  const error = false;

  const router = useRouter();

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabs = () => {
    switch (activeTab) {
      case "About":
        return <JobAbout about={data[0].job_description ?? "N/A"} />;
      case "Qualifications":
        return (
          <Info
            title="Qualifications"
            linking={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "Responsibilities":
        return (
          <Info
            title="Responsibilities"
            linking={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      default:
        break;
    }
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const backPress = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.leftBtn} onPress={backPress}>
            <Image source={icons.left} style={styles.btnImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn}>
            <Image source={icons.share} style={styles.btnImg} />
          </TouchableOpacity>
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={styles.content}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabs()}
          </View>
        )}
      </ScrollView>

      <JobFooter
        url={
          data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(20),
    padding: scale(10),
  },
  btnImg: {
    width: "100%",
    height: "100%",
  },
  leftBtn: {
    width: scale(30),
    height: scale(30),
    justifyContent: "center",
    alignItems: "center",
  },
  shareBtn: {
    width: scale(25),
    height: scale(25),
    justifyContent: "center",
    alignItems: "center",
  },
  content: { padding: scale(14), paddingBottom: verticalScale(100) },
});
