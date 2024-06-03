import { Text } from "react-native";

export function Salutation() {
  function getSalutation() {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Bom dia!";
    } else if (hour < 18) {
      return "Boa tarde!";
    } else {
      return "Boa noite!";
    }
  }

  return <Text className="text-2xl text-white mr-auto">{getSalutation()}</Text>;
}
