import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import { Button } from "@/components/button";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#081228", "#030916"]}
        locations={[0.5, 0.8]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />

      <View className="items-center h-screen mt-20 px-4">
        <Image source={require("../assets/images/welcome-img.png")} alt="" style={{ width: 393, height: 295, objectFit: "cover" }} />

        <Text className="text-5xl text-white font-salsa mt-12">Bem-Vindo</Text>

        <Text className="text-lg text-white text-center mt-2">Veja as notícias mais relevantes e fascinantes do mundo oceânico</Text>

        <View className="max-w-[280px] w-full mb-24 mt-auto">
          <Button>Começar</Button>
        </View>
      </View>
    </View>
  );
}
