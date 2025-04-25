import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { COLORS } from "../../constants/colors";
import NearbyJobsCard from "../NearbyJobsCard";
import useFetch from "../../hook/useFetch";
import { useState } from "react";

const NearbyJobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });
  // const data = [
  //   {
  //     job_id: "12345",
  //     job_country: "USA",
  //     job_title: "Developer",
  //     job_type: "Full-time",
  //     employer_name: "Apple",
  //     employer_logo: "https://loremflickr.com/200/200?random=1",
  //   },
  //   {
  //     job_id: "22225",
  //     job_country: "France",
  //     job_title: "Web Developer",
  //     job_type: "Full-time",
  //     employer_name: "Google",
  //     employer_logo: "https://loremflickr.com/200/200?random=1",
  //   },
  //   {
  //     job_id: "33215",
  //     job_country: "Pakistan",
  //     job_title: "Front Web Developer",
  //     job_type: "Full-time",
  //     employer_name: "Udemy",
  //     employer_logo: "https://loremflickr.com/200/200?random=1",
  //   },
  // ];
  // const isLoading = false;
  // const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.showAllBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobsCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleCardPress={() => router.push(`/job-details/${job.job_id}`)}
              selectedJob={selectedJob}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(5),
  },
  headerTitle: {
    fontSize: moderateScale(19, 0.3),
    fontFamily: "Roboto-Medium",
    color: COLORS.primary,
  },
  showAllBtn: {
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(19, 0.3),
    color: COLORS.gray,
  },
  cardsContainer: { marginTop: verticalScale(3) },
});
