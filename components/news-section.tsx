import { Text, View } from "react-native";

import { News } from "./news";

export function NewsSection() {
  return (
    <View className="flex-1 w-full">
      <Text className="text-xl text-white mb-4">Últimas notícias</Text>

      <News
        id={"1"}
        title={"🌊 Oceano em Foco"}
        description={"Impactos das Mudanças Climáticas nos Ecossistemas Marinhos"}
        time={"2024-06-01T12:00:00Z"}
      />
    </View>
  );
}
