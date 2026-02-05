import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { useRouter } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, TouchableOpacity } from "react-native";

import { DiscoverContent } from "./_components/discover";
import { FastPixPaymentsContent } from "./_components/fast-pix-payments";
import { WelcomeContent } from "./_components/welcome";

const { width } = Dimensions.get("window");

export const ONBOARDING_DATA = [
  { id: "1", component: WelcomeContent, buttonText: "Next" },
  { id: "2", component: DiscoverContent, buttonText: "Continue" },
  { id: "3", component: FastPixPaymentsContent, buttonText: "Get Started" },
];

export default function WelcomeScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const scrollToSlide = (index: number) => {
    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < ONBOARDING_DATA.length) {
      scrollToSlide(nextIndex);
    }
  };

  return (
    <Box className="flex-1 bg-[#221610] dark:bg-[#221610]">
      <Box className="flex items-end p-4 pt-12">
        <Button variant="link" onPress={() => {}}>
          <ButtonText className="text-[#d45211] font-semibold">Skip</ButtonText>
        </Button>
      </Box>

      <Box className="flex-grow">
        <FlatList
          ref={flatListRef}
          data={ONBOARDING_DATA}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          renderItem={({ item }) => {
            const StepComponent = item.component;
            return (
              <Box style={{ width }}>
                <StepComponent />
              </Box>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </Box>

      <HStack className="justify-center gap-3 py-6">
        {ONBOARDING_DATA.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => scrollToSlide(index)}>
            <Box
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-[#d45211]" : "w-2 bg-gray-700"
              }`}
            />
          </TouchableOpacity>
        ))}
      </HStack>

      <Box className="px-6 pb-12 pt-4">
        <Button
          onPress={handleNext}
          className="w-full bg-[#d45211] h-16 rounded-xl flex-row items-center justify-center gap-2"
          action="primary"
        >
          <ButtonText className="text-white font-bold text-lg">
            {ONBOARDING_DATA[currentIndex].buttonText}
          </ButtonText>
          <ButtonIcon as={ArrowRight} className="text-white" />
        </Button>
      </Box>
    </Box>
  );
}
