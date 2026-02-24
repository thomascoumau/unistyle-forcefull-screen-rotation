/** @format */

import "@/style/unistyle";
import {
  lockAsync,
  OrientationLock,
  unlockAsync,
} from "expo-screen-orientation";
import { StyleSheet } from "react-native-unistyles";

import { HelloWave } from "@/components/hello-wave";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Pressable } from "react-native";

export default function HomeScreen() {
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
}

const styles = StyleSheet.create((_, runtime) => ({
  container: {
    paddingTop: runtime.insets.top,
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
}));
