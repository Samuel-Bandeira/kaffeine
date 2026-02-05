# ☕ Kaffeine

**Kaffeine** é um aplicativo mobile moderno de coffee shop desenvolvido com **React Native** e **Expo**. O projeto combina design minimalista com uma arquitetura robusta, focada em performance e escalabilidade.

## 🚀 O Projeto

O aplicativo foi desenhado para remover barreiras de conversão. O usuário pode explorar o catálogo de cafés e métodos de preparo de forma anônima (Guest Mode). O login é exigido apenas no momento crítico do checkout, garantindo uma experiência de navegação contínua.

### Fluxo Principal

- **Onboarding**: Apresentação da marca e proposta de valor com navegação por pontos.
- **Discovery**: Listagem completa de produtos sem necessidade de autenticação prévia.
- **Checkout & Auth**: Autenticação inteligente acionada no momento da compra.
- **Payment (Pix)**: Geração de QR Code dinâmico com função "Copia e Cola" e contador de expiração.
- **Sucesso**: Confirmação visual e feedback tátil após a validação do pagamento.

[Image of mobile app payment flow with QR code and success screen]

## 🛠️ Tech Stack

- **Core**: React 19 & React Native 0.81
- **Framework**: Expo 54 (SDK 54)
- **Roteamento**: Expo Router v6
- **UI System**: Gluestack UI v3 (Core + Utils)
- **Styling**: NativeWind v4 (Tailwind CSS)
- **Design Tokens**: Plus Jakarta Sans (Typography)
- **Animações**: React Native Reanimated & Legend Motion

## 🏗️ Estrutura de Pastas

```text
├── app/                  # Rotas e navegação (Expo Router)
│   ├── (welcome)/        # Fluxo de Onboarding e boas-vindas
│   ├── (auth)/           # Fluxo de Autenticação (Login/Cadastro)
│   ├── (tabs)/           # Navegação principal pós-login
│   └── _layout.tsx       # Root Layout com carregamento de fontes e providers
├── components/           # Componentes reutilizáveis
│   ├── ui/               # Componentes base do Gluestack UI
│   └── _components/      # Componentes específicos (Slides, Pix, etc)
├── constants/            # Design Tokens (ONBOARDING_DATA)
├── hooks/                # Hooks customizados (Theme, Logic)
└── global.css            # Configurações globais do Tailwind/NativeWind
```
