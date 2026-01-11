import NextLessonCard from "@/components/NextLessonCard";
import WordCard from "@/components/WordCard";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeTab() {
  // プロトタイプ用に予約の有無を切り替えられるようにします
  const [hasReservation, setHasReservation] = useState(true);
  const userName = "Taro";

  return (
    <ScrollView style={styles.container}>
      {/* 1. Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning,</Text>
        <Text style={styles.userName}>{userName}!</Text>
        <Image
          source={require("@/assets/Avatar_sample.jpeg")}
          style={styles.profileImage}
        />
      </View>

      {/* 2. Main Card: Next Lesson */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Lesson</Text>
        <NextLessonCard hasReservation={hasReservation} />
      </View>

      {/* 3. Content Area: Word of the Day */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Word of the Day</Text>
        <WordCard />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick Video Tips</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.videoList}
        >
          {videoTips.map((video) => (
            <TouchableOpacity key={video.id} style={styles.videoCard}>
              <ImageBackground
                source={{ uri: video.thumbnail }}
                style={styles.thumbnail}
                imageStyle={{ borderRadius: 12 }}
              >
                <View style={styles.playIconContainer}>
                  <Text style={styles.playIcon}>▶</Text>
                </View>
              </ImageBackground>
              <Text style={styles.videoTitle} numberOfLines={2}>
                {video.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 余白用のスペース */}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    marginTop: 50,
  }, // iOSのシステム背景色に近い色

  // Header
  header: { paddingHorizontal: 20, paddingTop: 60, marginBottom: 30 },
  greeting: { fontSize: 18, color: "#8E8E93" },
  userName: { fontSize: 34, fontWeight: "bold", color: "#000" },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    top: 60,
    right: 20,
  },

  // Sections
  section: { paddingHorizontal: 20, marginBottom: 25 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1C1C1E",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  seeAll: { color: "#007AFF", fontWeight: "600" },
  videoList: { marginLeft: -5 }, // カードの間隔調整
  videoCard: { width: 160, marginRight: 15 },
  thumbnail: {
    width: 160,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 12,
  },
  playIconContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: { color: "#fff", fontSize: 12, marginLeft: 2 },
  videoTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#1C1C1E",
  },
});

// サンプルデータ
const videoTips = [
  {
    id: "1",
    title: 'How to use "Get"',
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
  },
  {
    id: "2",
    title: "Natural Greetings",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
  },
  {
    id: "3",
    title: "Ordering Coffee",
    thumbnail:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
  },
];
