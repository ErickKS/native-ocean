import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
export { ErrorBoundary } from "expo-router";

import * as SecureStore from "expo-secure-store";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";

export const unstable_settings = {
  initialRouteName: "index",
};

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    Salsa: require("../assets/fonts/Salsa-Regular.ttf"),
    Inter400: require("../assets/fonts/Inter-Regular.ttf"),
    Inter500: require("../assets/fonts/Inter-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <RootLayoutNav />
    </ClerkProvider>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) router.push("/welcome");
  }, [isLoaded]);

  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false, contentStyle: { backgroundColor: "#030916" } }} />
      <Stack.Screen
        name="newsletter"
        options={{ headerShown: false, animation: "slide_from_right", contentStyle: { backgroundColor: "#030916" } }}
      />

      <Stack.Screen
        name="index"
        options={{ headerShown: false, animation: "slide_from_bottom", contentStyle: { backgroundColor: "#030916" } }}
      />

      <Stack.Screen
        name="news/[id]"
        options={{ headerShown: false, animation: "slide_from_right", contentStyle: { backgroundColor: "#030916" } }}
      />
    </Stack>
  );
}
