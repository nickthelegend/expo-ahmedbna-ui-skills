---
name: expo-separator
description: Production-grade Expo Separator Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Separator

## Overview
A high-performance separator component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import React from 'react';
import { ViewStyle } from 'react-native';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  style?: ViewStyle;
}

export function Separator({
  orientation = 'horizontal',
  style,
}: SeparatorProps) {
  const borderColor = useColor('border');

  return (
    <View
      style={[
        {
          backgroundColor: borderColor,
          ...(orientation === 'horizontal'
            ? { height: 1, width: '100%' }
            : { width: 1, height: '100%' }),
        },
        style,
      ]}
    />
  );
}

```

## Usage Example
```tsx
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function SeparatorDemo() {
  return (
    <View style={{ padding: 16 }}>
      <Text variant='body'>Above separator</Text>
      <Separator style={{ marginVertical: 16 }} />
      <Text variant='body'>Below separator</Text>
    </View>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
