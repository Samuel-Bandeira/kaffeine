import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";

export const DiscoverContent = () => {
  return (
    <Box>
      <Box className="px-6 py-4">
        <Box className="w-full min-h-[360px] rounded-xl overflow-hidden shadow-2xl relative">
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjrfX-mnghiHc9wCpaZuezxj2UOBU1De-YK4cGlwgc1wXcU1s7LMDr-o49QvSXJiRuNx6wcm2DfCsN1108v4O1TT__ts91124AOhb_MNNR1UvmVNO3jM5a77BgN4GsoQox7XfkBuBQFjNqqITeY2EmoceZTS__SlCwVlV56qOhnuhulztpbVf7eeb8vIH_--hIzgjwwtT7A_5KQC1uhuh--Bf5X2zxMrgqYLj71T2maFbD2WWQhxaGIN0xGZPA3maRjI2YFUbbw2w",
            }}
            className="flex-1"
            resizeMode="cover"
          >
            <LinearGradient
              colors={["transparent", "rgba(34, 22, 16, 0.8)"]}
              className="absolute inset-0"
            />
          </ImageBackground>
        </Box>
      </Box>

      {/* Headline Text */}
      <Box className="px-6">
        <Text className="text-white tracking-tight text-[32px] font-extrabold leading-tight text-center pb-3 pt-6">
          Discover Your Favorite Blend
        </Text>
      </Box>

      {/* Body Text */}
      <Box className="px-8">
        <Text className="text-zinc-300 text-lg font-normal leading-relaxed pb-3 pt-1 text-center">
          Explore our curated selection of specialty coffee and brewing methods.
          Browse the full menu and find your perfect cup before you even sign
          in.
        </Text>
      </Box>
    </Box>
  );
};
