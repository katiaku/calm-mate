import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
// import beachImage from "@/assets/meditation-images/beach.jpg";
import monkeyImage from "@/assets/cute-monkey-meditation.jpg";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1 w-full bg-[#FFE668]">
      <ImageBackground
        source={monkeyImage}
        resizeMode="contain"
        className="flex-1"
      >
        <SafeAreaView className="flex-1 justify-around items-center">
          <View className="flex-1 items-center justify-start gap-4 pt-20">
            <Text className="text-slate-900 font-bold text-3xl">
              Welcome to CalmMate
            </Text>
            <Text className=" text-slate-900 text-xl font-bold mt-3">
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
      </ImageBackground>
    </View>
  );
};

export default App;
