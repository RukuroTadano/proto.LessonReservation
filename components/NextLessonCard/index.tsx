import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function NextLessonCard(hasReservation: boolean) {
  return (
    <>
      {hasReservation ? (
        <View style={styles.lessonCard}>
          <View>
            <Text style={styles.lessonTime}>Today, 18:00 - 19:00</Text>
            <Text style={styles.teacherName}>with Taylor Sensei</Text>
          </View>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.emptyCard}
          onPress={() => alert("Navigate to Booking Tab")}
        >
          <Text style={styles.emptyText}>No lessons scheduled</Text>
          <View style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book a Lesson</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
