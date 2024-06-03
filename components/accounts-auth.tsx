import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";

import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { AntDesign } from "@expo/vector-icons";

enum Strategy {
  Apple = "oauth_apple",
  Google = "oauth_google",
}

export function AccountsAuth() {
  useWarmUpBrowser();

  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

  async function onSelectAuth(strategy: Strategy) {
    const selectedAuth = {
      [Strategy.Apple]: appleAuth,
      [Strategy.Google]: googleAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.push("/");
      }
    } catch (err) {
      console.error("OAuth error: ", err);
    }
  }

  return (
    <View className="space-y-4 w-full">
      <TouchableOpacity
        onPress={() => onSelectAuth(Strategy.Apple)}
        className="relative justify-center items-center h-12 w-full bg-primary/20 border border-primary rounded-xl"
      >
        <View className="absolute left-4">
          <AntDesign name="apple1" color={"#FFF"} size={20} className="" />
        </View>

        <Text className="relative -top-0.5 text-center text-base text-white font-regular -tracking-tighter">Registrar com Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSelectAuth(Strategy.Google)}
        className="relative justify-center items-center h-12 w-full bg-primary/20 border border-primary rounded-xl"
      >
        <View className="absolute left-4">
          <AntDesign name="google" color={"#FFF"} size={20} className="absolute left-4 top-1/2 -translate-x-1/2" />
        </View>
        <Text className="relative -top-0.5 text-center text-base text-white font-regular -tracking-tighter">Registrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}
