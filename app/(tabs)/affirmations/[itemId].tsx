import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationsData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationsData.find(
        (item) => item.id === Number(itemId),
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        const affirmationsArray = affirmationToStart.text.split(".");
        if (affirmationsArray[affirmationsArray.length - 1] === "") {
          affirmationsArray.pop();
        }
        setSentences(affirmationsArray);
        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircle" size={36} color="#FFE668" />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-full justify-center">
                {sentences?.map((sentence, idx) => (
                  <Text
                    key={idx}
                    className="text-slate-100 text-2xl mt-12 font-semibold leading-10 px-6"
                  >
                    <AntDesign name="star" size={20} color="#E2E1EF" />
                    {` ${sentence}.`}
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
