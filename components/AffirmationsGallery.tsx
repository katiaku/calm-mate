import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";
import { View, Text, FlatList, Pressable, Image } from "react-native";

interface AffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const AffirmationsGallery = ({ title, previews }: AffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-slate-100 font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-xl mr-3">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full rounded-xl"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default AffirmationsGallery;
