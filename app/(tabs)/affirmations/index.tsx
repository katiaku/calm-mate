import { View, Text, ScrollView } from "react-native";
import AffirmationsGallery from "@/components/AffirmationsGallery";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false} className="pl-4">
          <Text className="text-slate-100 text-3xl font-bold text-center pt-4 mb-4">
            Achieve Stronger Mind
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((group) => (
              <AffirmationsGallery
                key={group.title}
                title={group.title}
                previews={group.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
