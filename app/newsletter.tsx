import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

import { AccountsAuth } from "@/components/accounts-auth";
import { Link } from "expo-router";

export default function NewsletterScreen() {
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

      <View className="items-center h-screen mt-20 px-6">
        <Image source={require("../assets/images/welcome-img.png")} alt="" style={{ width: 393, height: 295, objectFit: "cover" }} />

        <Text className="text-3xl text-white font-salsa mt-12 text-center max-w-[300px]">Descubra os Segredos do Oceano</Text>

        <Text className="text-lg text-white text-center mt-2">
          Cadastre-se na nossa newsletter e mergulhe nas profundezas com conteúdos exclusivos
        </Text>

        <View className="w-full mt-auto mb-16">
          <AccountsAuth />
          <Link href={"/"} className="mt-4 text-[#0487D9] font-medium text-center">
            Pular etapa
          </Link>
        </View>
      </View>
    </View>
  );
}
