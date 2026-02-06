import * as LucideIcons from "lucide-react-native";
import { cssInterop } from "nativewind";

// Itera sobre todos os ícones exportados pela biblioteca
for (const [key, icon] of Object.entries(LucideIcons)) {
  // A biblioteca exporta uma função 'createLucideIcon' que não é um componente, então a pulamos.
  if (key !== "createLucideIcon" && typeof icon === "object") {
    cssInterop(icon, {
      // Mapeia a prop 'className' para a prop 'style' do ícone
      className: {
        target: "style",
        // Define quais propriedades do estilo (derivadas do Tailwind) devem ser aplicadas
        nativeStyleToProp: {
          color: true, // para 'text-red-500'
          stroke: true, // para 'stroke-red-500'
          strokeWidth: true, // para 'stroke-2'
          width: true, // para 'w-5'
          height: true, // para 'h-5'
        },
      },
    });
  }
}
