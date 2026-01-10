import CalendarComponent from "@/components/Calender";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TabTwoScreen() {
  const [selected, setSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [course, setCourse] = useState("");
  const [time, setTime] = useState("");

  const getSelectedDateInfo = (date: string) => {
    setSelected(date);
  };

  const handleBooking = () => {
    Alert.alert(
      "Reservation",
      `Date: ${selected}\nTime: ${time}\nCourse: ${course}`
    );
    setModalVisible(false); // フォームを閉じる
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: 34,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Reservations
        </Text>
      </View>
      <Text>You can make and view your lesson reservations here.</Text>
      <View style={styles.calender}>
        <CalendarComponent getSelectedDate={getSelectedDateInfo} />
      </View>
      {selected ? (
        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => setModalVisible(true)}
        >
          <ThemedText style={styles.bookingButtonText}>
            Book for {selected}
          </ThemedText>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholderBox}>
          <ThemedText style={styles.placeholderText}>
            Please select a date
          </ThemedText>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ThemedView style={styles.modalOverlay}>
          <ThemedView style={styles.modalView}>
            <ThemedText style={styles.modalTitle}>Reservation Form</ThemedText>
            <ThemedText style={styles.modalSubTitle}>
              Date: {selected}
            </ThemedText>

            <ThemedText style={styles.label}>Time</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="e.g. 14:00"
              value={time}
              onChangeText={setTime}
            />

            <ThemedText style={styles.label}>Course</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="e.g. Standard Course"
              value={course}
              onChangeText={setCourse}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.btn, styles.btnCancel]}
                onPress={() => setModalVisible(false)}
              >
                <ThemedText style={styles.btnText}>Cancel</ThemedText>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.btn, styles.btnConfirm]}
                onPress={handleBooking}
              >
                <ThemedText style={styles.btnText}>Confirm</ThemedText>
              </TouchableOpacity>
            </View>
          </ThemedView>
        </ThemedView>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    marginTop: 50,
    padding: 20,
  }, // iOSのシステム背景色に近い色
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  infoBox: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 14,
    color: "#888",
    textTransform: "uppercase",
  },
  calender: { marginTop: 20 },
  dateText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#00adf5",
    marginTop: 5,
  },
  bookingButton: {
    backgroundColor: "#00adf5",
    padding: 18,
    borderRadius: 12,
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#00adf5",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  bookingButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },

  placeholderBox: { marginTop: 30, alignItems: "center" },
  placeholderText: { color: "#999", fontSize: 16 },

  // モーダルのスタイル
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  modalSubTitle: { fontSize: 16, color: "#666", marginBottom: 20 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 5, color: "#333" },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButtons: { flexDirection: "row", justifyContent: "space-between" },
  btn: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  btnCancel: { backgroundColor: "#ccc" },
  btnConfirm: { backgroundColor: "#00adf5" },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
