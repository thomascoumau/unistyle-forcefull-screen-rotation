/** @format */

import { unlockAsync } from "expo-screen-orientation";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={() => void unlockAsync()}>
        <ThemedText>Unlock</ThemedText>
      </Pressable>
      <ThemedText style={styles.title} type="title">
        Welcome!
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    backgroundColor: {
      sm: "blue",
      md: "red",
    },
    width: "80%",
  },
});
