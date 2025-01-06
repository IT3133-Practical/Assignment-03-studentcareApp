import { Image, ScrollView, StyleSheet, View } from "react-native";
import { PaperProvider, Text, Divider } from "react-native-paper";

export default function Course() {
  const sampleCourseData = {
    courseName: "Introduction to React Native",
    courseCode: "CS101",
    department: "Engineering",
    duration: "4 Years",
    description: "Focus on Programming Algorithm and System Design",
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        <View style={styles.imagecontain}>
          <Image
            source={require("../assets/uovlogo.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV @2025</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}