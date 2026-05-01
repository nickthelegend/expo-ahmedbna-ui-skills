---
name: expo-useColor
description: Production-grade Expo UseColor Hook.
category: Hooks
difficulty: Intermediate
version: "1.0.0"
---

# Expo UseColor

## Overview
A high-performance useColor hook for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx

// File: templates/hooks/useColor.ts
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/theme/colors';

export function useColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: { light?: string; dark?: string }
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props?.[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}


```



## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
