/** @format */

import "@/style/unistyle";

import { OrientationLock, lockAsync } from "expo-screen-orientation";
import { useEffect } from "react";

import HomeScreen from "@/components/HomeScreen";
import * as ExpoSplashScreen from "expo-splash-screen";

void ExpoSplashScreen.preventAutoHideAsync();

ExpoSplashScreen.setOptions({
  duration: 500,
  fade: true,
});

export default function App() {
  useEffect(() => {
    void ExpoSplashScreen.hideAsync();
    void lockAsync(OrientationLock.PORTRAIT_UP);
  }, []);

  return <HomeScreen />;
}
