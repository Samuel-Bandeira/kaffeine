import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { ImageBackground } from "react-native";

export const WelcomeContent = () => {
  return (
    <Box>
      <Box className="px-6 py-4">
        <Box className="w-full min-h-[360px] rounded-xl overflow-hidden shadow-2xl relative">
          <ImageBackground
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7spuHrur9DlwhPjJWGxt852krZFThJ0z0hLhqO8hudiCK3oopGX09zAr71djheGWQFrwrE_X1UGY3yPlej2BrJp3T64ALjOZNVfqWszdpMcMSBJW8a6jzq8vtdF-RVanBpL0057OP1taO56M0xK7lcJ9vlhF_IMfVKrFIrkg7wdchdA7cl9BIk4Le4KlAs_mt8rVmUlDu4v_bNB8ZtLvD25ULeQGESX9y_f_Q-91VZ1ukiR2yq5M7YxGm9bPj9FfAGMKeZRO1QWA",
            }}
            className="flex-1"
            resizeMode="cover"
          />
        </Box>
      </Box>

      <Box className="px-6">
        <Text className="text-white text-[32px] font-bold leading-tight text-center pb-3 pt-6">
          Welcome to Coffee Haven
        </Text>
      </Box>

      <Box className="px-8">
        <Text className="text-gray-300 text-base font-normal leading-relaxed pb-3 pt-1 text-center">
          Experience the ultimate convenience of ordering your favorite brew
          ahead and skipping the line every single morning.
        </Text>
      </Box>
    </Box>
  );
};
