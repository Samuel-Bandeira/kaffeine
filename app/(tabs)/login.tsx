import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import { ArrowLeft, Coffee, Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => !showState);
  };

  return (
    <Box className="flex-1 bg-custom-background">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* TopAppBar */}
        <HStack className="items-center p-4 pt-12 justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="size-12 justify-center"
          >
            <ArrowLeft size={24} className="text-custom-text" />
          </TouchableOpacity>
          <Heading
            size="md"
            className="text-custom-text font-display text-center flex-1"
          >
            Checkout
          </Heading>
          <Box className="size-12" />
        </HStack>

        <VStack className="px-6 pt-4">
          {/* Icon Badge */}
          <Box className="w-20 h-20 bg-custom-primary/10 rounded-2xl items-center justify-center mb-6">
            <Coffee size={40} className="text-custom-primary" />
          </Box>

          <Heading className="text-custom-text font-display text-[32px] leading-tight mb-2">
            Login to complete your order
          </Heading>
          <Text className="text-custom-text-muted text-base font-body mb-8">
            Please enter your details to continue to payment.
          </Text>

          {/* Form Fields */}
          <VStack space="xl">
            <VStack space="xs">
              <Text className="text-custom-text font-medium text-base">
                Email
              </Text>
              <Input className="h-14 rounded-xl border-custom-text-muted/20 bg-transparent">
                <InputField
                  className="text-custom-text"
                  placeholder="Enter your email"
                  placeholderTextColor="#9a664c"
                />
              </Input>
            </VStack>

            <VStack space="xs">
              <Text className="text-custom-text font-medium text-base">
                Password
              </Text>
              <Input className="h-14 rounded-xl border-custom-text-muted/20 bg-transparent">
                <InputField
                  className="text-custom-text"
                  placeholder="Enter your password"
                  secureTextEntry={!showPassword}
                  placeholderTextColor="#9a664c"
                />
                <InputSlot className="pr-3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? Eye : EyeOff}
                    className="text-custom-text-muted"
                  />
                </InputSlot>
              </Input>
            </VStack>
          </VStack>

          <TouchableOpacity className="mt-3 items-end">
            <Text className="text-custom-text-muted text-sm underline font-body">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Primary Action */}
          <Button
            className="w-full h-16 bg-custom-primary rounded-2xl mt-8 shadow-lg shadow-custom-primary/20"
            onPress={() => {
              router.replace("/(tabs)");
            }}
          >
            <ButtonText className="text-white font-bold text-lg">
              Login
            </ButtonText>
          </Button>

          {/* Divider */}
          <HStack className="items-center my-8" space="md">
            <Box className="flex-1 h-[1px] bg-custom-text-muted/20" />
            <Text className="text-custom-text-muted text-sm font-bold">OR</Text>
            <Box className="flex-1 h-[1px] bg-custom-text-muted/20" />
          </HStack>

          {/* Social Logins */}
          <VStack space="md">
            <Button
              variant="outline"
              className="h-14 rounded-2xl border-custom-text-muted/20 bg-white dark:bg-[#2d1e16]"
              onPress={() => {
                router.replace("/(tabs)/checkout");
              }}
            >
              <Image
                source={require("../../assets/images/google-logo.png")}
                className="w-5 h-5 mr-1"
              />
              <ButtonText className="text-[#1b120d] dark:text-white font-semibold">
                Continue with Google
              </ButtonText>
            </Button>

            <Button
              onPress={() => {
                router.replace("/(tabs)/checkout");
              }}
              className="h-14 rounded-2xl bg-black"
            >
              <ButtonText className="text-white font-semibold">
                Continue with Apple
              </ButtonText>
            </Button>
          </VStack>

          {/* Footer */}
          <HStack className="justify-center mt-12 mb-10">
            <Text className="text-custom-text text-sm font-body">
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("./register");
              }}
            >
              <Text className="text-custom-primary font-bold text-sm underline ml-1">
                Sign Up
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
}
