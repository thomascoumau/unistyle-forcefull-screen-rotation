/** @format */

import "@/style/unistyle";
import { StyleSheet } from "react-native-unistyles";

import { Home } from "@/components/home";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await timeoutSplashScreen().finally(() => {
        setIsAppReady(true);
      });
    };

    void init();
  }, []);

  if (isAppReady) {
    return <Home />;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText>Loading...</ThemedText>
    </ThemedView>
  );
}

const SPLASH_SCREEN_TIMEOUT = 10000; // 10s timeout for splash screen

const timeoutSplashScreen = () =>
  new Promise((resolve) => setTimeout(resolve, SPLASH_SCREEN_TIMEOUT));

const styles = StyleSheet.create((_) => ({
  container: {
    gap: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));
