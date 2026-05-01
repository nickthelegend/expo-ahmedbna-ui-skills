---
name: expo-toggle
description: Production-grade Expo Toggle Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Toggle

## Overview
A high-performance toggle component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { CORNERS, FONT_SIZE, HEIGHT } from '@/theme/globals';
import { LucideProps } from 'lucide-react-native';
import React from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type ToggleVariant = 'default' | 'outline';
type ToggleSize = 'default' | 'icon';

interface ToggleProps {
  children: React.ReactNode;
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: ToggleVariant;
  size?: ToggleSize;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Toggle({
  children,
  pressed = false,
  onPressedChange,
  variant = 'default',
  size = 'icon',
  disabled = false,
  style,
  textStyle,
}: ToggleProps) {
  const primaryColor = useColor('primary');
  const primaryForegroundColor 
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Toggle } from '@/components/ui/toggle';
import { Bold } from 'lucide-react-native';
import React, { useState } from 'react';

export function ToggleDemo() {
  const [pressed, setPressed] = useState(false);

  return (
    <Toggle pressed={pressed} onPressedChange={setPressed}>
      <Bold size={16} />
    </Toggle>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
