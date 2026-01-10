import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import styles from "./styles";

export default function CalendarComponent({
  getSelectedDate,
}: {
  getSelectedDate?: (date: string) => void;
}) {
  const [selected, setSelected] = useState("");

  // 予定がある日のサンプルデータ（ドットを表示）
  const markedDates = {
    "2025-12-25": { marked: true, dotColor: "red" },
    "2025-12-31": { marked: true, dotColor: "blue" },
    // 選択された日のスタイルをマージ
    ...(selected && {
      [selected]: {
        selected: true,
        selectedColor: "#00adf5",
        marked: markedDates?.[selected]?.marked, // 選択してもドットを消さない
      },
    }),
  };

  const setSelectedDateInfo = (dateString: string) => {
    getSelectedDate && getSelectedDate(dateString);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <Calendar
          // 選択・ドット表示の設定
          markedDates={markedDates}
          // 日付タップ時のアクション
          onDayPress={(day) => {
            const dateString = day.dateString;
            setSelected(dateString);
            setSelectedDateInfo(dateString);
          }}
          // カレンダーの見た目をカスタマイズ
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#dd99ee",
          }}
        />
      </ThemedView>
    </ThemedView>
  );
}
