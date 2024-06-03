import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronLeft, Send } from "lucide-react-native";

import { Loading } from "@/components/loading";

export default function NewsScreen() {
  const { id } = useLocalSearchParams();
  const router = useNavigation();

  const [loading, setLoading] = useState(false);

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

      {loading ? (
        <View className="items-center justify-center h-screen">
          <Loading />
        </View>
      ) : (
        <ScrollView>
          <View className="items-center px-6">
            <View className="absolute left-5 z-10 right-5 mt-14 flex-row justify-between">
              <TouchableOpacity
                onPress={() => router.goBack()}
                activeOpacity={0.7}
                className="items-center justify-center w-12 h-12 border border-white rounded-full"
              >
                <ChevronLeft color="#FFF" size={24} />
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} className="items-center justify-center w-12 h-12 border border-white rounded-full">
                <Send color="#FFF" size={24} strokeWidth={1.5} className="top-px right-px" />
              </TouchableOpacity>
            </View>

            <Image
              source={require("../../assets/images/news.jpg")}
              alt=""
              style={{ width: 393, height: 296, objectFit: "cover" }}
              className="rounded-3xl"
            />

            <View className="flex-1 w-full mt-8">
              <Text className="text-2xl text-white font-medium mb-2">🌊 Oceano em Foco</Text>
              <Text className="text-lg text-white">Impactos das Mudanças Climáticas nos Ecossistemas Marinhos</Text>

              <View className="w-full h-px bg-[#0487D9] my-4" />

              <Text className="text-white mb-1 text-base">
                Uma pesquisa recente conduzida por cientistas do Instituto de Estudos Oceânicos (IEO) revelou dados alarmantes sobre os
                efeitos das mudanças climáticas nos ecossistemas marinhos. A investigação, que analisou as águas do Atlântico Sul ao longo
                de cinco anos, destacou a drástica diminuição de populações de peixes e o branqueamento acelerado de corais.
              </Text>
              <Text className="text-white mb-1 text-base">
                Espécies como o atum-rabilho e o bacalhau têm sofrido reduções significativas em suas populações devido ao aquecimento das
                águas e à acidificação dos oceanos.
              </Text>
              <Text className="text-white mb-1 mt-2 text-lg font-medium">Acordo Internacional para Proteção dos Oceanos</Text>

              <Text className="text-white mb-1 text-base">
                Em resposta aos crescentes desafios ambientais, líderes mundiais se reuniram na Cúpula do Oceano, em Lisboa, para assinar um
                acordo histórico voltado para a proteção e preservação dos mares. Este tratado visa reduzir a poluição plástica, promover
                práticas de pesca sustentável e expandir áreas marinhas protegidas.
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
