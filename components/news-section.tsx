import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

import { NewsProps } from "@/types/news";

import { News } from "./news";

const newsMock: Partial<NewsProps>[] = [
  {
    id: "1",
    titulo: "🌊 Oceano em Foco",
    descricao: "Impactos das Mudanças Climáticas nos Ecossistemas Marinhos",
    data: "2024-06-01T12:00:00Z",
  },
];

export function NewsSection() {
  const [news, setNews] = useState<Partial<NewsProps>[]>(newsMock);

  // useEffect(() => {
  //   getNews();
  // }, []);

  // async function getNews() {
  //   const { data } = await axios.get("https://localhost:8080/noticias");

  //   setNews(data);
  // }

  return (
    <View className="flex-1 w-full">
      <Text className="text-xl text-white mb-4">Últimas notícias</Text>

      {news.map(({ id, titulo, descricao, data }) => (
        <News key={id} id={id} titulo={titulo} descricao={descricao} data={data} />
      ))}
    </View>
  );
}
