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
        <View style={styles.courseInfoContainer}>
          <Text style={styles.title}>Course Information</Text>

          {/* Course Name */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Course Name: </Text>
            {sampleCourseData.courseName}
          </Text>

          {/* Course Code */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Course Code: </Text>
            {sampleCourseData.courseCode}
          </Text>

          {/* Department */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Department: </Text>
            {sampleCourseData.department}
          </Text>

          {/* Duration */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Duration: </Text>
            {sampleCourseData.duration}
          </Text>

          {/* Description */}
          <Text style={styles.infoText}>
            <Text style={styles.label}>Description: </Text>
            {sampleCourseData.description}
          </Text>

          <Divider style={styles.divider} />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV @2025</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}