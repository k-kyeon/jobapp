import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { icons } from "../../constants";
import { useState } from "react";

// In the job details screen, this is the footer portion.
const JobFooter = ({ url }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={liked ? styles.like : styles.unlike}
        onPress={() => {
          setLiked((prevLiked) => !prevLiked);
        }}
      >
        <Image
          source={liked ? icons.heartFilled : icons.heartUnfilled}
          resizeMode="contain"
          style={liked ? styles.likeImage : styles.unlikedImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.apply}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyText}>Apply for jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobFooter;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    bottom: 0,
    left: 0,
    padding: scale(12),
    right: 0,
    marginBottom: scale(15),
  },
  like: {
    width: scale(47),
    height: scale(47),
    borderWidth: 1,
    borderColor: "#F23432",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fac8c8",
  },
  unlike: {
    width: scale(47),
    height: scale(47),
    borderWidth: 1,
    borderColor: "#F23432",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  likeImage: {
    width: scale(20),
    height: scale(20),
  },
  unlikedImage: {
    width: scale(20),
    height: scale(20),
    tintColor: "#F23432",
  },
  apply: {
    flex: 1,
    marginLeft: scale(9),
    borderRadius: 16,
    height: "100%",
    backgroundColor: "#748edb",
    justifyContent: "center",
    alignItems: "center",
  },
  applyText: {
    fontFamily: "Roboto-Bold",
    fontSize: moderateScale(16, 0.5),
    color: "#fafafa",
  },
});
