import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useThemeStore } from "@/stores/color-schema";
import { useRouter } from "expo-router";
import { Moon, Plus, Search, ShoppingCart, Sun } from "lucide-react-native";
import React from "react";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";

export default function CoffeeMenu() {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useThemeStore();

  return (
    <Box className="flex-1">
      <HStack className="items-center p-4 pt-12 justify-between sticky top-0 z-50">
        <Box className="size-12 items-center justify-center">
          <Search size={24} className="text-custom-text" />
        </Box>
        <Heading className="text-custom-text font-display text-center flex-1">
          Coffee Menu
        </Heading>
        <HStack>
          <TouchableOpacity onPress={toggleColorScheme}>
            <Box className="size-12 items-center justify-center">
              {colorScheme === "light" ? (
                <Moon size={24} className="text-custom-text" />
              ) : (
                <Sun size={24} className="text-custom-text" />
              )}
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)/checkout")}>
            <Box className="size-12 items-center justify-center">
              <ShoppingCart size={24} className="text-custom-text" />
            </Box>
          </TouchableOpacity>
        </HStack>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Box className="px-4 py-2">
          <HStack className="relative w-full justify-between h-48 rounded-xl overflow-hidden bg-custom-primary/10 border border-custom-primary/20">
            <VStack className="z-10 absolute top-14 left-7">
              <Text className="text-custom-primary font-bold uppercase tracking-wider font-display">
                Today's Special
              </Text>
              <Heading size="xl" className="text-custom-text mt-1">
                Free delivery with Pix!
              </Heading>
              <Text className="text-custom-text-muted mt-2 font-body">
                Browse our artisanal selection
              </Text>
            </VStack>
            <Box className="flex-1" />
            <Box className="h-full w-1/2 opacity-20">
              <ImageBackground
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-5X2s2WrlDqrReI-VOgGszpr1ubGcFfMcoKAeEJbRVBtXNGi0Yd_M1lkb2LeEjQIFnI9yEeVgmTKuGqXTRPcD0hNpWrBDAda7ldVAzO-5C7YDPkUpwKhrDlFyPyc7s_PnRqmvHqBrC4ciUezjJ8KUAf4MgQztu2LszYkKvdN_a5vxFzBVnV3LUSfNqR6LwihXGrBQX8DWQrQkIbYgh7oZUIZlWWU8Eb5JtMhnM4N4oM-FD6kz4ycldqtfcAllWyuChN_-7wkX3Tg",
                }}
                className="flex-1"
              />
            </Box>
          </HStack>
        </Box>

        {/* Chips de Categoria */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 py-4"
          contentContainerStyle={{ gap: 12 }}
        >
          {["All", "Espresso", "Latte", "Cappuccino", "Affogato"].map(
            (cat, i) => (
              <Box
                key={cat}
                className={`h-10 items-center justify-center rounded-full px-5 ${
                  i === 0 ? "bg-custom-primary" : "bg-custom-primary/20"
                }`}
              >
                <Text
                  className={`text-sm font-semibold ${i === 0 ? "text-white" : "text-custom-primary"}`}
                >
                  {cat}
                </Text>
              </Box>
            ),
          )}
        </ScrollView>

        {/* Popular Picks Grid */}
        <Box className="px-4 pt-2">
          <Heading className="text-custom-text font-display">
            Popular Picks
          </Heading>
        </Box>
        <HStack className="p-4 flex-wrap justify-between" style={{ gap: 16 }}>
          <MenuCard
            title="Espresso"
            price="$3.50"
            desc="Rich and bold Italian style"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBLbbhzL5kW97bwvfe5SCDTfxTpo1pTPCOCCwQwndisQ8umXkGQITtFVAW-ZW8BR7tSY9-RU-GHaSazQJE44vuzuHFXrVrfI9v6vM3FFaVuLKEIjknXiMfwskGc63IasdVT_0FArZjkhJ6I3qOKCEVS7mqfCdrCSewYJtYiOaB2N1nlz7WgY2RRDTqEVo5pKZBj6Rn7oRuRMZV_GNKjQFFaGoiXPjhUIYfuTelo71oyeyrgO58FoyRdl-WztHh7Z0ZtHD-VE2zP5pY"
            router={router}
          />
          <MenuCard
            title="Latte"
            price="$4.50"
            desc="Smooth and creamy milk"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDOnu6MqKuc6GtmiU1wGTNAGNCQIiITJB3VnHZSHpGaFTc9tbos2BSHAImV43eBSOv1JJYTZJVNC8ExrF-SwCZ-6eEU5SH4aQ7LFENWIqEo4ZulmTJF_H31HAPhWKMTqFVlSdCwUyQ_QqeOPFDbvOvI5rFhPU9kCjFd6Kf4HmUHv9JxW6585oEQPP2CxhOLselJZpND8S61cCAKwQt5dtXWEa4VBhOq20xBiibkJSzIyQm0rJTqRxDRq3qqFMHQr6BHRzdQuFq5hJY"
            router={router}
          />
        </HStack>

        {/* Recommended List */}
        <Box className="px-4 pt-2">
          <Heading className="text-custom-text font-display">
            Recommended for you
          </Heading>
        </Box>
        <VStack className="p-4" style={{ gap: 16 }}>
          <RecommendedCard
            title="Cappuccino"
            price="$4.75"
            desc="Frothy perfection with cocoa"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuA3b66Vyil2q4wonbNSr9ZgsqIosaiJdU1oSF4PmkJ1QqiFWIQhAOHLg7JVehm8VdzHoZ1Pt2-rTVbwTBMb6Nut1vpAPEZ7RlcqAEy77GlhVPKMs8R2BoZh6hgzBiHfucCSvyCEyamH09XRpHQHMBvt1E9TB7zNbtqXSI2Sieg8EyE_ohTZUiRjYj_56-H0sg6JB9zUE8miSCql17jZPGa99edqhjruSqoniio7u6-E8oRDamWd998NDdtm1apULjqy1tOF0Y0b_1I"
            router={router}
          />
          <RecommendedCard
            title="Mocha Macchiato"
            price="$5.25"
            desc="Layered with dark chocolate"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDJILIybitxf-0OtmrQw_rIo2Xvl6VHnCsn7s0mGA-q4huRNZAcNBj_00hSH5vlcHObBHRKhvyLQxgmYi15mpPbvBFDyH4te6p7zl2T4E-nhgM1q5MmE3SwgF10ifT3lfH2XkZl2q7fCrpU40J5tsvEj2iva35l9IHKM5CV4HtOprFj6WJr_EQnz1yWTvh9Fm6-ek1X9Yp1ie-MAOWH2NrWX1R4_MAmNXYO4717tOw-ybzExv17twPuBX4N9m2wcFGjjreimkC1mAM"
            router={router}
          />
        </VStack>

        {/* Pre-Login CTA */}
        <Box className="p-6 mb-10">
          <VStack className="bg-custom-primary/5 rounded-2xl p-6 text-center border border-custom-primary/10 items-center">
            <Heading className="text-custom-text mb-2">Ready to order?</Heading>
            <Text className="text-custom-text-muted text-center mb-6 font-body">
              Log in to save your favorite drinks and pay with Pix.
            </Text>
            <Button
              onPress={() => {
                router.push("/(tabs)/login");
              }}
              className="w-full bg-custom-primary h-14 rounded-xl shadow-lg"
            >
              <ButtonText className="font-bold">Log In / Sign Up</ButtonText>
            </Button>
            <Text className="text-custom-text-muted text-sm mt-3 font-body">
              Secure payment with{" "}
              <Text className="font-bold text-sm text-custom-text-muted">
                Pix
              </Text>{" "}
              supported
            </Text>
          </VStack>
        </Box>

        <Box className="h-20" />
      </ScrollView>
    </Box>
  );
}

// Sub-componentes para limpeza de código
const MenuCard = ({ title, price, desc, img, router }: any) => (
  <VStack className="bg-bg-card rounded-xl p-2 border border-custom-primary/10 w-[47%]">
    <Box className="w-full aspect-square rounded-lg overflow-hidden">
      <ImageBackground source={{ uri: img }} className="flex-1" />
    </Box>
    <VStack className="px-1 mt-2">
      <Text className="text-custom-text text-lg font-bold font-display">
        {title}
      </Text>
      <Text className="text-custom-primary text-sm font-semibold mt-1">
        {price}
      </Text>
      <Text
        className="text-custom-primary/60 text-[10px] font-body mt-1"
        numberOfLines={1}
      >
        {desc}
      </Text>
      <Button
        onPress={() => {
          router.push("./login");
        }}
        size="xs"
        className="mt-3 rounded-lg h-8"
      >
        <ButtonIcon as={Plus} />
        <ButtonText className="text-sm font-bold">Add to cart</ButtonText>
      </Button>
    </VStack>
  </VStack>
);

const RecommendedCard = ({ title, price, desc, img, router }: any) => (
  <HStack className="bg-bg-card p-4 rounded-xl border border-custom-primary/10 items-center justify-between">
    <VStack className="flex-1 items-start mr-4">
      <Text className="text-custom-text font-bold font-display text-lg">
        {title}
      </Text>
      <Text className="text-custom-primary text-sm font-semibold">{price}</Text>
      <Text className="text-custom-text-muted text-xs font-body mt-1">
        {desc}
      </Text>
      <Button
        size="xs"
        className="bg-custom-primary mt-3 rounded-lg w-fit px-4"
        onPress={() => {
          router.push("./login");
        }}
      >
        <ButtonText className="text-sm font-bold">Add to cart</ButtonText>
        <ButtonIcon as={Plus} />
      </Button>
    </VStack>
    <Box className="w-24 h-24 rounded-lg overflow-hidden">
      <ImageBackground source={{ uri: img }} className="flex-1" />
    </Box>
  </HStack>
);
