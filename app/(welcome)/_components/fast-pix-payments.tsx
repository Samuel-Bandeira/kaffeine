import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";

export const FastPixPaymentsContent = () => {
  return (
    <VStack className="flex-1">
      {/* Illustration/Image Section */}
      <Box className="p-4">
        <Box className="w-full max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden relative border border-white/5">
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4zFIOhGuIGz2eIRELLaWaJaKNjvnlrxWIXijyWoXhtMxEQshzaeKHP8WGmLtiGiv8VW1TUskROy8tBarnmzdL-vVB78WN9jqBnlVs6yqw9HS2BSoJ8jeRivjnQLlkw-GwhkYzlbc-JlhqoEs20880Gvq54aY7fUUAcAp5ElRVTPXUILosH1GyclHYl5lqwc4Dbkg-nRa-oPVjZ87aR6D63lH2hXkj52exz5631GZgXS7Q59qf4NAyCfm4aSRGhu6zZU40mkPhuhY",
            }}
            className="flex-1 items-center justify-center"
            resizeMode="cover"
          >
            {/* Fallback Gradient se a imagem demorar a carregar */}
            <LinearGradient
              colors={["rgba(212, 82, 17, 0.2)", "#221610"]}
              className="absolute inset-0 -z-10"
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />

            {/* Scanning Overlay Effect - Uma linha horizontal com brilho */}
            <Box className="absolute w-full top-1/2 -translate-y-1/2">
              <LinearGradient
                colors={["transparent", "#d45211", "transparent"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                className="h-1 w-full blur-sm"
              />
            </Box>
          </ImageBackground>
        </Box>
      </Box>

      {/* Text Content Section */}
      <VStack className="items-center px-6">
        <Text className="text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-3 pt-6">
          Fast Pix Payments
        </Text>
        <Text className="text-white/80 text-base font-normal leading-relaxed pb-6 pt-1 text-center max-w-xs">
          Experience the speed and security of paying for your favorite coffee
          using Pix. Quick, easy, and completely safe.
        </Text>
      </VStack>
    </VStack>
  );
};
