---
name: expo-badge
description: Production-grade Expo Badge Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Badge

## Overview
A high-performance badge component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { CORNERS } from '@/theme/globals';
import { TextStyle, ViewStyle } from 'react-native';

type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'success';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Badge({
  children,
  variant = 'default',
  style,
  textStyle,
}: BadgeProps) {
  const primaryColor = useColor('primary');
  const primaryForegroundColor = useColor('primaryForeground');
  const secondaryColor = useColor('secondary');
  const secondaryForegroundColor = useColor('secondaryForeground');
  const destructiveColor = useColor('destructive');
  const destructiveForegroundColor = useColor('destructiveForeground');
  const borderColor = useColor('border');
  const successColor =
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Badge } from '@/components/ui/badge';
import { View } from '@/components/ui/view';
import React from 'react';

export function BadgeDemo() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      <Badge>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='success'>Success</Badge>
    </View>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
