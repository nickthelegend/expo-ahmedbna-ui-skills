# Expo UI Skills — The Ultimate Master Collection

![License](https://img.shields.io/badge/license-MIT-green)
![Category](https://img.shields.io/badge/category-Expo-blue)

The authoritative resource for building high-quality mobile applications with Expo and React Native. Based on the `ahmedbna/ui` registry.

**Install with Agent Skills CLI:**
```bash
npx skills add nickthelegend/expo-ahmedbna-ui-skills
```

## 🚀 Installation

Add this collection to your project using the `agent-skills` CLI:

```bash
npx skills add nickthelegend/expo-ahmedbna-ui-skills --all
```

### Peer Dependencies
Ensure your Expo project has the following installed:

```bash
npx expo install react-native-reanimated lucide-react-native expo-haptics expo-audio
```

---

## ⚙️ Configuration

### 1. Project Structure
The skills will be installed into your `@/components/ui` directory by default. Ensure your `tsconfig.json` or `jsconfig.json` has the `@` alias configured:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

### 2. Theming
This collection uses a robust, token-based theming system. 
- **Colors**: Customize your brand colors in `hooks/useColor.ts` or the provided `theme/colors.ts`.
- **Hooks**: Use `useColor`, `useColorScheme`, and `useModeToggle` to handle dynamic themes effortlessly.

---

## 📖 Usage

Once installed, simply import and use the components in your Expo screens:

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react-native';

export default function MyScreen() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Support</CardTitle>
      </CardHeader>
      <CardContent>
        <Button icon={Mail} onPress={() => {}}>
          Send Email
        </Button>
      </CardContent>
    </Card>
  );
}
```

---

## 🏛️ Skills Directory (77 Total)

| Category | Skills | Highlights |
| :--- | :--- | :--- |
| **🏗️ Foundation** | 15 Skills | View, Text, Button, Input, useColor, useColorScheme |
| **📱 Components** | 38 Skills | Accordion, Carousel, Bottom Sheet, Tabs, Action Sheet |
| **📊 Charts** | 19 Skills | Line, Bar, Pie, Radar, Treemap, Candlestick |
| **🎨 Media & Utils** | 5 Skills | Audio Player/Recorder, Camera, useKeyboardHeight |

---

## 🚀 Working Examples
Check the [/EXAMPLES](EXAMPLES/) directory for full-screen templates and complex UI patterns.

## 🤝 Community & Support
- **Issue Tracker**: [Report bugs or request skills](https://github.com/nickthelegend/expo-ahmedbna-ui-skills/issues)
- **Contributing**: Read [CONTRIBUTING.md](CONTRIBUTING.md) to join the roadmap.

---
*© 2026 nickthelegend. Built with Expo & React Native.*
