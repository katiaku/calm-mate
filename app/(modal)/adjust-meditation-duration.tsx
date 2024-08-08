import React, { useContext } from "react";
import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TimerContext } from "@/context/TimerContext";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#FFE668", "#FFE668"]}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircle" size={36} color="black" />
        </Pressable>
        <View className="justify-center h-4/5">
          <View>
            <Text className="text-center font-bold text-3xl text-black mb-8 mx-4">
              Adjust meditation duration
            </Text>
          </View>

          <View className="px-4">
            <CustomButton
              title="10 seconds"
              onPress={() => handlePress(10)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyles="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
