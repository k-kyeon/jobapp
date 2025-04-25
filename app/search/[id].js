import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { icons } from "../../constants";
import { COLORS } from "../../constants/colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import NearbyJobsCard from "../../components/NearbyJobsCard";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const JobSearch = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "x-rapidapi-key": RAPID_API_KEY,
          "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: params.id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
      // const searchRes = [
      //   {
      //     job_id: "12345",
      //     job_country: "USA",
      //     job_title: "Developer",
      //     job_type: "Full-time",
      //     employer_name: "Apple",
      //     employer_logo: "https://loremflickr.com/200/200?random=1",
      //   },
      //   {
      //     job_id: "1234",
      //     job_country: "USA",
      //     job_title: "Developer",
      //     job_type: "Full-time",
      //     employer_name: "Apple",
      //     employer_logo: "https://loremflickr.com/200/200?random=1",
      //   },
      //   {
      //     job_id: "1235",
      //     job_country: "USA",
      //     job_title: "Developer",
      //     job_type: "Full-time",
      //     employer_name: "Apple",
      //     employer_logo: "https://loremflickr.com/200/200?random=1",
      //   },
      //   {
      //     job_id: "1245",
      //     job_country: "USA",
      //     job_title: "Developer",
      //     job_type: "Full-time",
      //     employer_name: "Apple",
      //     employer_logo: "https://loremflickr.com/200/200?random=1",
      //   },
      //   {
      //     job_id: "1345",
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
      // setSearchResult(searchRes);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePages = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const backPress = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.leftBtn} onPress={backPress}>
            <Image source={icons.left} style={styles.btnImg} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={searchResult}
          keyExtractor={(item) => item.job_id}
          renderItem={({ item }) => (
            <NearbyJobsCard
              job={item}
              handleCardPress={
                () => router.push(`/job-details/${item.job_id}`)
                // navigation.navigate("job-details/[id]", { id: item.job_id })
              }
            />
          )}
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={() => (
            <>
              <View style={{ width: "100%" }}>
                <Text style={styles.searchTitle}>{params.id}</Text>
                <Text style={styles.resultingJobs}>Job Opportunities</Text>
              </View>
              <View style={styles.loaderContainer}>
                {searchLoader ? (
                  <ActivityIndicator size="large" color={COLORS.primary} />
                ) : (
                  searchError && <Text>Oops something went wrong</Text>
                )}
              </View>
            </>
          )}
          ListFooterComponent={() => (
            <View style={styles.footerContainer}>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePages("left")}
              >
                <Image
                  source={icons.chevronLeft}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={styles.paginationTextBox}>
                <Text style={styles.paginationText}>{page}</Text>
              </View>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePages("right")}
              >
                <Image
                  source={icons.chevronRight}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobSearch;

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: COLORS.lightWhite,
    width: "100%",
    height: "100%",
  },
  pageContainer: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(12),
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: { padding: scale(12), rowGap: scale(8) },
  loaderContainer: {
    marginTop: verticalScale(10),
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
  searchTitle: {
    fontFamily: "Roboto-Bold",
    fontSize: moderateScale(30, 0.3),
    color: COLORS.primary,
  },
  resultingJobs: {
    marginTop: 2,
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(16, 0.3),
    color: COLORS.primary,
  },
  footerContainer: {
    marginVertical: verticalScale(7),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: scale(9),
  },
  paginationButton: {
    width: scale(30),
    height: scale(30),
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
  },
  paginationText: {},
  paginationImage: { width: "60%", height: "60%", tintColor: COLORS.white },
});
