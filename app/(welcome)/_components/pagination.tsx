import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";

interface PaginationProps {
  activeIndex: number;
  total: number;
}

export const Pagination = ({ activeIndex, total }: PaginationProps) => {
  return (
    <HStack className="w-full items-center justify-center gap-3 py-6">
      {Array.from({ length: total }).map((_, index) => (
        <Box
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === activeIndex
              ? "w-6 bg-[#d45211]" // O ponto ativo fica mais largo (estilo "pílula")
              : "w-2 bg-gray-700" // Pontos inativos
          }`}
        />
      ))}
    </HStack>
  );
};
