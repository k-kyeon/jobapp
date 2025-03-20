import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { icons } from "../../constants";
import { COLORS } from "../../constants/colors";

const SearchInput = ({
  placeholderText,
  searchTerm,
  setSearchTerm,
  handleClick,
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        <TextInput
          value={searchTerm}
          placeholder={placeholderText}
          placeholderTextColor="#CDCDE0"
          style={styles.textInput}
          onChangeText={(text) => setSearchTerm(text)}
        />
      </View>
      <TouchableOpacity onPress={handleClick}>
        <Image source={icons.search} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    height: verticalScale(36),
    borderRadius: 20,
    marginRight: scale(8),
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginRight: scale(5),
  },
  searchIcon: {
    width: scale(40),
    height: "100%",
    borderRadius: 40,
    backgroundColor: COLORS.tertiary,
  },
  textInput: {
    fontFamily: "Roboto-Regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: scale(20),
  },
});
