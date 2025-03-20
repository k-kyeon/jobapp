import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import { COLORS } from "../../constants/colors";

// In the job details screen, this portion shows the tabs going from "About" to "Responsibilities".
function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.button(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.buttonText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: scale(5) }}
      />
    </View>
  );
};

export default JobTabs;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(24),
    marginBottom: verticalScale(5),
  },
  button: (name, activeTab) => ({
    marginLeft: scale(2),
    paddingVertical: verticalScale(7),
    paddingHorizontal: scale(18),
    borderRadius: 12,
    backgroundColor: name === activeTab ? COLORS.primary : "#f0f1f5",
  }),
  buttonText: (name, activeTab) => ({
    fontFamily: "Roboto-Medium",
    color: name === activeTab ? "#d7d3e0" : "#8e92a3",
    fontSize: moderateScale(13, 0.3),
  }),
});
