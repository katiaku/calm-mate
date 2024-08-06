import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import beachImage from "@/assets/meditation-images/beach.jpg";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1 w-full">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.8)"]}>
          <SafeAreaView className="flex-1 justify-around items-center">
            <View className="flex-1 items-center justify-center gap-4">
              <Text className="text-slate-100 font-bold text-3xl">
                Welcome to CalmMate
              </Text>
              <Text className=" text-slate-100 text-xl font-semibold mt-3">
                It's Meditation Time!
              </Text>
            </View>

            <View className="w-full px-4">
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
          <StatusBar style="light" />
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
