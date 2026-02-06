import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import { ArrowLeft, Eye, EyeOff, UserPlus } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            <ArrowLeft size={24} className="text-custom-typography" />
          </TouchableOpacity>
          <Heading
            size="md"
            className="text-custom-typography font-display text-center flex-1"
          >
            Registration
          </Heading>
          <Box className="size-12" />
        </HStack>

        <VStack className="px-6 pt-4">
          {/* Icon Badge */}
          <Box className="w-16 h-16 bg-custom-primary/10 rounded-2xl items-center justify-center mb-6">
            <UserPlus size={32} className="text-custom-primary" />
          </Box>

          <Heading className="text-custom-typography font-display text-[32px] leading-tight mb-2">
            Create an account
          </Heading>
          <Text className="text-custom-text-muted text-base font-body mb-8">
            Join our coffee community to track orders and earn rewards.
          </Text>

          {/* Form Fields */}
          <VStack space="lg">
            {/* Full Name */}
            <VStack space="xs">
              <Text className="text-custom-typography font-medium text-base">
                Full Name
              </Text>
              <Input className="h-14 rounded-xl border-custom-muted/20 bg-transparent">
                <InputField
                  className="text-custom-typography"
                  placeholder="Enter your full name"
                  placeholderTextColor="#9a664c"
                />
              </Input>
            </VStack>

            {/* Email */}
            <VStack space="xs">
              <Text className="text-custom-typography font-medium text-base">
                Email
              </Text>
              <Input className="h-14 rounded-xl border-custom-muted/20 bg-transparent">
                <InputField
                  className="text-custom-typography"
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  placeholderTextColor="#9a664c"
                />
              </Input>
            </VStack>

            {/* Password */}
            <VStack space="xs">
              <Text className="text-custom-typography font-medium text-base">
                Password
              </Text>
              <Input className="h-14 rounded-xl border-custom-muted/20 bg-transparent">
                <InputField
                  className="text-custom-typography"
                  placeholder="Create a password"
                  secureTextEntry={!showPassword}
                  placeholderTextColor="#9a664c"
                />
                <InputSlot
                  className="pr-3"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <InputIcon
                    as={showPassword ? Eye : EyeOff}
                    className="text-custom-text-muted"
                  />
                </InputSlot>
              </Input>
            </VStack>

            {/* Confirm Password */}
            <VStack space="xs">
              <Text className="text-custom-typography font-medium text-base">
                Confirm Password
              </Text>
              <Input className="h-14 rounded-xl border-custom-muted/20 bg-transparent">
                <InputField
                  className="text-custom-typography"
                  placeholder="Repeat your password"
                  secureTextEntry={!showConfirmPassword}
                  placeholderTextColor="#9a664c"
                />
                <InputSlot
                  className="pr-3"
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <InputIcon
                    as={showConfirmPassword ? Eye : EyeOff}
                    className="text-custom-text-muted"
                  />
                </InputSlot>
              </Input>
            </VStack>
          </VStack>

          {/* Action Button */}
          <Button
            className="w-full h-16 bg-custom-primary rounded-2xl mt-10 shadow-lg shadow-custom-primary/20"
            onPress={() => {
              /* Lógica de registro */
            }}
          >
            <ButtonText className="text-white font-bold text-lg">
              Sign Up
            </ButtonText>
          </Button>

          {/* Footer Link */}
          <HStack className="justify-center mt-auto py-10">
            <Text className="text-custom-typography text-sm font-body">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-custom-primary font-bold text-sm underline ml-1">
                Login
              </Text>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
}
