/** @format */

import {
  lockAsync,
  OrientationLock,
  unlockAsync,
} from "expo-screen-orientation";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { HelloWave } from "./hello-wave";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Pressable onPress={() => void unlockAsync()}>
        <ThemedText>Unlock</ThemedText>
      </Pressable>
      <Pressable onPress={() => void lockAsync(OrientationLock.PORTRAIT_UP)}>
        <ThemedText>Lock portrait</ThemedText>
      </Pressable>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title} type="title">
          Welcome!
        </ThemedText>
        <HelloWave />
      </ThemedView>
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
  titleContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    backgroundColor: "blue",
    width: {
      sm: "50%",
      md: "80%",
      lg: 500,
    },
    alignItems: {
      sm: "center",
      md: "flex-start",
    },
  },
});
