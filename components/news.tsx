import { View, Text, ImageBackground } from "react-native";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "expo-router";
import { NewsProps } from "@/types/news";

const image = require("../assets/images/news.jpg");

export function News({ id, title, description, date }: Partial<NewsProps>) {
  function calcularTempoPassado(isoDate: string) {
    const data = new Date(isoDate);
    const distance = formatDistanceToNow(data, { addSuffix: true, locale: ptBR });

    return distance.charAt(0).toUpperCase() + distance.slice(1);
  }

  return (
    <Link href={`/news/${id}`}>
      <View className="flex flex-row w-full space-x-4">
        <ImageBackground source={image} resizeMode="cover" className="w-40 h-28 border border-primary rounded-xl overflow-hidden" />

        <View className="flex-1">
          <Text className="text-lg text-white font-medium mb-1">{title}</Text>
          <Text className="text-white" style={{ maxWidth: 160 }} ellipsizeMode="tail">
            {description}
          </Text>

          {date && <Text className="text-sm text-[#0487D9] font-medium mt-auto">{calcularTempoPassado(date)}</Text>}
        </View>
      </View>
    </Link>
  );
}
