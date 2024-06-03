import { Text, ImageBackground } from "react-native";

const image = require("../assets/images/banner.jpg");

export function Banner() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className="flex items-center justify-center w-full h-40 bg-primary/20 border border-primary/20 rounded-xl mb-8"
    >
      <Text className="text-xl text-white font-salsa text-center max-w-[280px]">
        Descubra mais sobre os oceanos e as profundezas marinhas
      </Text>
    </ImageBackground>
  );
}
