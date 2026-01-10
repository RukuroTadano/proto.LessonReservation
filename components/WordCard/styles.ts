import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wordCard: { height: 250, justifyContent: "flex-end" },
  wordOverlay: {
    backgroundColor: "rgba(0,0,0,0.4)", // 文字を見やすくするための薄暗いカバー
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wordText: { color: "#fff", fontSize: 32, fontWeight: "bold" },
  phonetic: {
    color: "#ddd",
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 8,
  },
  definition: { color: "#fff", fontSize: 14, lineHeight: 20 },
});
