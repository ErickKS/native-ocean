import { useCallback, useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Newspaper } from "lucide-react-native";
import { BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { Banner } from "@/components/banner";
import { Salutation } from "@/components/salutation";
import { NewsSection } from "@/components/news-section";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AccountsAuth } from "@/components/accounts-auth";
import { useAuth } from "@clerk/clerk-expo";

export default function HomeScreen() {
  const { isSignedIn } = useAuth();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "40%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
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

          <View className="items-center h-screen mt-14 px-6">
            <View className="flex flex-row items-center w-full mb-6 h-12">
              <Salutation />

              {!isSignedIn && (
                <TouchableOpacity
                  onPress={handlePresentModalPress}
                  activeOpacity={0.7}
                  className="items-center justify-center w-12 h-12 border border-white rounded-full"
                >
                  <Newspaper color="#FFF" size={24} strokeWidth={1.5} />
                </TouchableOpacity>
              )}
            </View>

            <Banner />

            <NewsSection />

            <Text className="text-white">Teste</Text>
          </View>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundStyle={{ backgroundColor: "#041433" }}
            handleIndicatorStyle={{ backgroundColor: "white" }}
          >
            <BottomSheetView
              style={{
                flex: 1,
                padding: 24,
                justifyContent: "center",
                backgroundColor: "#041433",
              }}
            >
              <View className="flex-1 items-center w-full">
                <Text className="text-xl text-white font-salsa text-center max-w-[300px]">Descubra os Segredos do Oceano</Text>

                <Text className="text-lg text-white text-center mt-2 mb-6">
                  Cadastre-se na nossa newsletter e mergulhe nas profundezas com conteúdos exclusivos
                </Text>

                <AccountsAuth />
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
