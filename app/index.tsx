import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import beachImage from "../assets/meditation-images/beach.jpg";
import CustomButton from "../components/CustomButton";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0, 0, 0, 0.4", "rgba(0, 0, 0, 0.8)"]}
        >
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Hi, I'm your CalmMate!
              </Text>
              <Text className="text-center text-white size-2xl mt-3">
                It's meditation time!
              </Text>
            </View>

            <View>
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

export default App;
