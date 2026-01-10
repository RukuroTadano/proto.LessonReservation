import { StyleSheet } from "react-native";

export default StyleSheet.create({
  lessonCard: {
    backgroundColor: "#007AFF", // iOSのメインブルー
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  lessonTime: { color: "#fff", fontSize: 14, opacity: 0.9 },
  teacherName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
  joinButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  joinButtonText: { color: "#007AFF", fontWeight: "bold" },

  // Empty Card
  emptyCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#C7C7CC",
  },
  emptyText: { color: "#8E8E93", marginBottom: 15, fontSize: 16 },
  bookNowButton: {
    backgroundColor: "#E5E5EA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bookNowText: { color: "#007AFF", fontWeight: "bold" },
});
