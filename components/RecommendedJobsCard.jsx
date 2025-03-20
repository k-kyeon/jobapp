import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../constants/colors";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useState } from "react";

const RecommendedJobsCard = ({ item, selectedJob, handleCardPress }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogoPress = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.touchableContainer(selectedJob, item)}
        onPress={() => handleCardPress(item)}
      >
        <View style={styles.container}>
          <View style={styles.companyInfoContainer}>
            <TouchableOpacity
              style={styles.logoContainer(selectedJob, item)}
              onPress={handleLogoPress}
            >
              <Image
                source={{ uri: item.employer_logo }}
                resizeMode="contain"
                style={styles.logoImage}
              />
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>
              {item.employer_name}
            </Text>
          </View>

          <View style={styles.jobInfoContainer}>
            <Text style={styles.jobTitle(selectedJob, item)} numberOfLines={1}>
              {item.job_title}
            </Text>
            <Text style={styles.jobLocation}>{item.job_country}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal transparent={true} visible={isModalVisible} animationType="fade">
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image
                source={{ uri: item.employer_logo }}
                resizeMode="contain"
                style={styles.modalLogo}
              />
              <Text style={styles.modalEmployerName}>{item.employer_name}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default RecommendedJobsCard;

const styles = StyleSheet.create({
  touchableContainer: (selectedJob, item) => ({
    marginTop: verticalScale(9),
    width: scale(235),
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#e8eaf6",
    borderRadius: scale(14),
  }),
  container: {
    flex: 1,
    flexDirection: "row",
    padding: scale(15),
    justifyContent: "space-around",
    marginHorizontal: scale(10),
  },
  companyInfoContainer: {
    alignItems: "center",
    flex: 0.72,
  },
  jobInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1.5,
    marginLeft: scale(20),
  },
  logoContainer: (selectedJob, item) => ({
    width: scale(70),
    height: scale(70),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    color: "#6e78ab",
    marginTop: verticalScale(5),
  },
  jobTitle: (selectedJob, item) => ({
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    fontFamily: "Roboto-Medium",
    fontSize: moderateScale(21, 0.3),
  }),
  jobLocation: {
    fontSize: moderateScale(14, 0.3),
    fontFamily: "Roboto-Regular",
    color: "#B3AEC6",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: scale(35),
    borderRadius: 12,
    alignItems: "center",
  },
  modalLogo: {
    width: scale(150),
    height: scale(150),
    marginBottom: 10,
  },
  modalEmployerName: {
    fontSize: moderateScale(18, 0.3),
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
