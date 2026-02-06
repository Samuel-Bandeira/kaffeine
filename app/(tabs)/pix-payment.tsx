import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import { ArrowLeft, Copy, Info } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";

export default function PixPaymentScreen() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(600); // 10 minutos em segundos

  // Timer simples para o checkout
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return {
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(remainingSeconds).padStart(2, "0"),
    };
  };

  const { minutes, seconds: secs } = formatTime(seconds);

  return (
    <Box className="flex-1 bg-custom-background">
      {/* Top Navigation Bar */}
      <HStack className="items-center p-4 pt-12 justify-between bg-custom-background/80">
        <TouchableOpacity
          onPress={() => router.back()}
          className="size-12 items-center justify-center"
        >
          <ArrowLeft size={24} className="text-custom-typography" />
        </TouchableOpacity>
        <Heading
          size="md"
          className="text-custom-typography font-display text-center flex-1 pr-12"
        >
          Pix Payment
        </Heading>
      </HStack>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 24,
          paddingBottom: 40,
        }}
      >
        {/* Total Amount Section */}
        <VStack className="mt-6 mb-8 items-center">
          <Text className="text-base font-normal opacity-70 text-custom-typography">
            Total amount to pay
          </Text>
          <Heading className="text-4xl font-extrabold text-custom-typography mt-1">
            R$ 15,90
          </Heading>
        </VStack>

        {/* QR Code Section */}
        <Box className="size-80 bg-white rounded-2xl shadow-sm border border-black/5 dark:border-white/10 items-center justify-center">
          <Box className="w-full h-full overflow-hidden rounded-lg">
            <ImageBackground
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbso6hsxo4xs6tARIy-1y-vQo0j3VPynCw6W1bgFjlOmT2KLHjYZFTPDsUO2sRRKUrezSBWBN1GK790crxaVPkePJsLIa1p0j_KXe3ecpxfhsj9hb-ITL9qh8pQ_8qutGZkjQZ7PfGXMIK4v7jR6ar1TMUABv6A4p03BGSVWQsehAIIlnL-tzBL161PsqUP-xTjZVwb_3s8lK8ZmPYUCNftO-j3ag1iZ5LMvAAA33hXvPxrlrzHyEQTAKF3es6_u6WCnIhVvbpzZw",
              }}
              className="flex-1"
              resizeMode="contain"
            />
          </Box>
        </Box>

        {/* Instructions */}
        <Box className="mt-8 px-4">
          <Text className="text-base font-medium text-center leading-relaxed text-custom-typography">
            Open your bank app and scan the QR code or copy the code below.
          </Text>
        </Box>

        {/* Action Button */}
        <Button
          className="mt-6 w-full max-w-sm h-14 bg-custom-primary rounded-2xl shadow-lg shadow-custom-primary/30"
          onPress={() => {
            router.replace("./success");
          }}
        >
          <ButtonIcon as={Copy} className="text-white mr-2" />
          <ButtonText className="text-white font-bold text-lg">
            Copy Pix Code
          </ButtonText>
        </Button>

        {/* Timer Section */}
        <VStack className="mt-10 w-full max-w-xs items-center">
          <Text className="text-sm font-medium opacity-60 mb-3 text-custom-typography">
            Expires in
          </Text>
          <HStack space="md" className="items-center">
            <TimerBlock label="Minutes" value={minutes} />
            <Text className="text-2xl font-bold opacity-30 text-custom-typography">
              :
            </Text>
            <TimerBlock label="Seconds" value={secs} />
          </HStack>
        </VStack>

        {/* Helper Text */}
        <HStack className="mt-12 items-center" space="xs">
          <Info size={16} className="text-custom-primary" />
          <Text className="text-sm font-medium text-custom-primary">
            Payment is confirmed instantly
          </Text>
        </HStack>
      </ScrollView>
    </Box>
  );
}

// Sub-componente para os blocos do timer
const TimerBlock = ({ value, label }: { value: string; label: string }) => (
  <VStack className="items-center" space="xs">
    <Box className="h-16 w-16 items-center justify-center rounded-2xl bg-custom-primary/10 dark:bg-custom-primary/20">
      <Text className="text-custom-primary text-2xl font-bold">{value}</Text>
    </Box>
    <Text className="text-[10px] font-semibold opacity-60 uppercase tracking-wider text-custom-typography">
      {label}
    </Text>
  </VStack>
);
