import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import beachImage from "../assets/meditation-images/beach.jpg";
import CustomButton from "./CustomButton";

const Main = () => {
  return (
    <View className="flex-1 w-full">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.8)"]}
        >
          <SafeAreaView className="flex-1 my-12 justify-around items-center">
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
                onPress={() => console.log("pressed")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
          <StatusBar style="light" />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Main;
