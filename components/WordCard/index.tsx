import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function WordCard() {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
        }}
        style={styles.wordCard}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.wordOverlay}>
          <Text style={styles.wordText}>Inspire</Text>
          <Text style={styles.phonetic}>/ɪnˈspaɪər/</Text>
          <Text style={styles.definition}>
            To fill someone with the urge or ability to do or feel something
            creative.
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
