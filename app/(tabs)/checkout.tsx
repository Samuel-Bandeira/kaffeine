import { Box } from "@/components/ui/box";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  ChevronRight,
  CreditCard,
  Minus,
  Moon,
  Plus,
  QrCode,
  ShieldCheck,
  Smartphone,
} from "lucide-react-native";
import React, { useState } from "react";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";

export default function CheckoutScreen() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("pix");
  // Mock de estado para os itens
  const [quantities, setQuantities] = useState({ latte: 2, espresso: 1 });

  return (
    <Box className="flex-1 bg-custom-background">
      {/* Header com Blur (Sticky no iOS) */}
      <HStack className="items-center p-4 pt-12 justify-between border-b border-custom-primary/5 bg-custom-background/80">
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
          My Cart
        </Heading>
        <TouchableOpacity className="size-10 invisible items-center justify-center rounded-full bg-custom-primary/10">
          <Moon size={20} className="text-custom-primary" />
        </TouchableOpacity>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack className="p-4" space="md">
          <Heading className="text-custom-text">Order Summary</Heading>

          <CartItem
            name="Latte"
            price={4.5}
            quantity={quantities.latte}
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDOnu6MqKuc6GtmiU1wGTNAGNCQIiITJB3VnHZSHpGaFTc9tbos2BSHAImV43eBSOv1JJYTZJVNC8ExrF-SwCZ-6eEU5SH4aQ7LFENWIqEo4ZulmTJF_H31HAPhWKMTqFVlSdCwUyQ_QqeOPFDbvOvI5rFhPU9kCjFd6Kf4HmUHv9JxW6585oEQPP2CxhOLselJZpND8S61cCAKwQt5dtXWEa4VBhOq20xBiibkJSzIyQm0rJTqRxDRq3qqFMHQr6BHRzdQuFq5hJY"
          />
          <CartItem
            name="Espresso"
            price={3.5}
            quantity={quantities.espresso}
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBLbbhzL5kW97bwvfe5SCDTfxTpo1pTPCOCCwQwndisQ8umXkGQITtFVAW-ZW8BR7tSY9-RU-GHaSazQJE44vuzuHFXrVrfI9v6vM3FFaVuLKEIjknXiMfwskGc63IasdVT_0FArZjkhJ6I3qOKCEVS7mqfCdrCSewYJtYiOaB2N1nlz7WgY2RRDTqEVo5pKZBj6Rn7oRuRMZV_GNKjQFFaGoiXPjhUIYfuTelo71oyeyrgO58FoyRdl-WztHh7Z0ZtHD-VE2zP5pY"
          />
        </VStack>

        <VStack className="p-4" space="md">
          <Heading className="text-custom-text">Payment Methods</Heading>
          <VStack space="sm">
            <PaymentOption
              id="pix"
              title="Pix"
              subtitle="Instant confirmation & discount"
              icon={QrCode}
              selected={paymentMethod === "pix"}
              onSelect={() => setPaymentMethod("pix")}
              isPix
            />
            <PaymentOption
              id="card"
              title="Credit Card"
              icon={CreditCard}
              selected={paymentMethod === "card"}
              onSelect={() => setPaymentMethod("card")}
            />
            <PaymentOption
              id="apple"
              title="Apple Pay"
              icon={Smartphone}
              selected={paymentMethod === "apple"}
              onSelect={() => setPaymentMethod("apple")}
              isDark
            />
          </VStack>
        </VStack>

        <Box className="px-4 py-4">
          <HStack
            className="items-center justify-center py-2 bg-green-500/10 rounded-lg border border-green-500/20"
            space="xs"
          >
            <ShieldCheck size={16} className="text-green-600" />
            <Text className="text-green-700 dark:text-green-400 text-xs font-semibold">
              Secure Checkout
            </Text>
          </HStack>
        </Box>
      </ScrollView>

      {/* Footer Total & Button */}
      <Box className="p-4 pb-10 bg-custom-bg border-t border-custom-primary/10 shadow-2xl">
        <VStack space="xs" className="mb-6">
          <HStack className="justify-between">
            <Text className="text-custom-text-muted">Subtotal</Text>
            <Text className="text-custom-text">$12.50</Text>
          </HStack>
          <HStack className="justify-between">
            <Text className="text-custom-text-muted">Delivery Fee</Text>
            <Text className="text-green-600 font-bold">FREE</Text>
          </HStack>
          <HStack className="justify-between items-center mt-2">
            <Text className="text-custom-text text-xl font-bold">
              Total Amount
            </Text>
            <Text className="text-custom-primary text-xl font-bold">
              $12.50
            </Text>
          </HStack>
        </VStack>

        <Button
          className="w-full h-16 bg-custom-primary rounded-2xl shadow-lg"
          onPress={() => {
            router.push("./pix-payment");
          }}
        >
          <ButtonText className="text-white font-bold text-lg">
            Place Order and Pay
          </ButtonText>
          <ButtonIcon as={ChevronRight} className="text-white" />
        </Button>
      </Box>
    </Box>
  );
}

// --- Componentes Internos ---

const CartItem = ({ name, price, quantity, img }: any) => (
  <HStack
    className="bg-custom-bg-card p-3 rounded-2xl border border-custom-primary/5 items-center"
    space="md"
  >
    <Box className="w-20 h-20 rounded-xl overflow-hidden">
      <ImageBackground source={{ uri: img }} className="flex-1" />
    </Box>
    <VStack className="flex-1" space="xs">
      <Text className="text-custom-text font-bold">{name}</Text>
      <Text className="text-custom-primary font-semibold text-sm">
        ${price.toFixed(2)}
      </Text>
      <HStack className="items-center mt-1" space="md">
        <TouchableOpacity className="size-8 items-center justify-center rounded-full border border-custom-primary/20">
          <Minus size={14} className="text-custom-primary" />
        </TouchableOpacity>
        <Text className="text-custom-text font-bold">{quantity}</Text>
        <TouchableOpacity className="size-8 items-center justify-center rounded-full bg-custom-primary">
          <Plus size={14} className="text-custom-button-text" />
        </TouchableOpacity>
      </HStack>
    </VStack>
    <Text className="text-custom-text font-bold">
      ${(price * quantity).toFixed(2)}
    </Text>
  </HStack>
);

const PaymentOption = ({
  title,
  subtitle,
  icon: Icon,
  selected,
  onSelect,
  isPix,
  isDark,
}: any) => (
  <TouchableOpacity
    onPress={onSelect}
    className={`flex-row items-center p-4 rounded-2xl border-2 transition-all ${
      selected
        ? "border-custom-primary bg-custom-primary/5"
        : "border-custom-primary/10 bg-custom-bg-card dark:bg-custom-bg-dark/50"
    }`}
  >
    <Box
      className={`size-10 rounded-lg items-center justify-center mr-4 ${
        isPix
          ? "bg-custom-primary"
          : isDark
            ? "bg-black"
            : "bg-gray-100 dark:bg-custom-primary/20"
      }`}
    >
      <Icon size={20} color={isPix || isDark ? "white" : "#d45211"} />
    </Box>
    <VStack className="flex-1">
      <Text
        className={`font-bold ${selected ? "text-custom-text" : "text-custom-text"}`}
      >
        {title}
      </Text>
      {subtitle && (
        <Text className="text-sm text-custom-text-muted italic">
          {subtitle}
        </Text>
      )}
    </VStack>
    <Box
      className={`size-5 rounded-full border-4 border-custom-primary ${
        selected ? "border-custom-primary bg-white" : "border-custom-primary/30"
      }`}
    />
  </TouchableOpacity>
);
