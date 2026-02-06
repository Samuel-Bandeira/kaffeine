import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Motion } from "@legendapp/motion";
import { useRouter } from "expo-router";
import { CheckCircle2, Landmark, X } from "lucide-react-native";
import React from "react";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-custom-background">
      {/* Top Navigation Bar */}
      <HStack className="items-center p-4 pt-12 justify-between">
        <TouchableOpacity
          onPress={() => router.push("/(tabs)")}
          className="size-12 justify-center"
        >
          <X size={24} className="text-custom-text" />
        </TouchableOpacity>
        <Heading
          size="md"
          className="text-custom-text font-display text-center flex-1 pr-12"
        >
          Payment Success
        </Heading>
      </HStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Success Content & Animação */}
        <VStack className="items-center justify-center py-10 px-4" space="md">
          <Motion.View
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 12 }}
          >
            <Box className="w-24 h-24 bg-green-500/10 dark:bg-green-500/20 rounded-full items-center justify-center mb-4">
              <CheckCircle2
                size={64}
                className="text-green-500"
                strokeWidth={3}
              />
            </Box>
          </Motion.View>

          <Heading className="text-custom-text font-display text-[32px] text-center leading-tight">
            Payment Successful
          </Heading>
          <Text className="text-custom-text text-base text-center max-w-[280px] font-body">
            Your order has been confirmed and is being prepared with love.
          </Text>
        </VStack>

        {/* Order Summary Card */}
        <Box className="flex-1 px-4 py-4">
          <VStack className="bg-custom-bg-card dark:bg-custom-bg-dark/50 rounded-2xl p-6 border border-custom-primary/5 shadow-sm">
            <Heading size="sm" className="text-custom-text mb-4 font-display">
              Order Summary
            </Heading>

            <HStack
              className="items-center py-3 border-b border-custom-primary/5"
              space="md"
            >
              <Box className="w-16 h-16 rounded-xl overflow-hidden">
                <ImageBackground
                  source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqMMAMxMmSLrfXQ7A2zF6Fwl0AVORlwN-F5C6isNElrgeOnnXuGa9Pe9D_sOtoRLjfEPEK4bb0AvC_iSdx05WKjK5sETJupc6-GFVbkBbuk0pGF88H8bE0qVXR4ULpKQwF8JWaiYq6nv_IV3T16CikhzLwtT96ZfaIARfa39OmQSovkNT2RtNfa3JCflOomGcwZJJ_YnK17m85HYCuCjkQFk6ZWq6DDy5DRdGITsNkjMH2ojOU9Rt2kOzN4tbJJNEx4HaLRfUH6Mk",
                  }}
                  className="flex-1"
                />
              </Box>
              <VStack className="flex-1">
                <Text className="text-custom-text font-bold font-display">
                  1x Caramel Macchiato
                </Text>
                <Text className="text-custom-text text-sm font-body">
                  Large • Oat Milk
                </Text>
              </VStack>
              <Text className="text-custom-text font-bold">$5.50</Text>
            </HStack>

            <VStack className="pt-4" space="sm">
              <HStack className="justify-between items-center">
                <Text className="text-custom-text text-sm">Payment Method</Text>
                <HStack space="xs" className="items-center">
                  <Landmark size={14} className="text-custom-text" />
                  <Text className="text-custom-text text-sm font-semibold">
                    Pix
                  </Text>
                </HStack>
              </HStack>
              <HStack className="justify-between items-center mt-2">
                <Text className="text-custom-text text-lg font-bold">
                  Total Paid
                </Text>
                <Text className="text-custom-text text-lg font-bold">
                  $5.50
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>

        <VStack className="p-6 pb-12" space="md">
          <Button
            className="w-full h-16 bg-custom-primary rounded-2xl shadow-lg"
            onPress={() => {}}
          >
            <ButtonText className="text-custom-button-text font-bold text-lg">
              Track Order
            </ButtonText>
          </Button>
          <Button
            variant="outline"
            className="w-full h-16 rounded-2xl border-custom-primary/20 bg-custom-primary/5"
            onPress={() => router.push("/(tabs)")}
          >
            <ButtonText className="text-custom-primary font-bold text-lg">
              Back to Home
            </ButtonText>
          </Button>
        </VStack>
      </ScrollView>

      <Box className="h-2 w-32 text-custom-text/10 rounded-full self-center mb-4" />
    </Box>
  );
}
