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
  const successColor = useColor('green');

  const getBadgeStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: CORNERS,
    };

    switch (variant) {
      case 'secondary':
        return { ...baseStyle, backgroundColor: secondaryColor };
      case 'destructive':
        return { ...baseStyle, backgroundColor: destructiveColor };
      case 'success':
        return { ...baseStyle, backgroundColor: successColor };
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor,
        };
      default:
        return { ...baseStyle, backgroundColor: primaryColor };
    }
  };

  const getTextStyle = (): TextStyle => {
    const baseTextStyle: TextStyle = {
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
    };

    switch (variant) {
      case 'secondary':
        return { ...baseTextStyle, color: secondaryForegroundColor };
      case 'destructive':
        return { ...baseTextStyle, color: destructiveForegroundColor };
      case 'outline':
        return { ...baseTextStyle, color: primaryColor };
      default:
        return { ...baseTextStyle, color: primaryForegroundColor };
    }
  };

  return (
    <View style={[getBadgeStyle(), style]}>
      <Text style={[getTextStyle(), textStyle]}>{children}</Text>
    </View>
  );
}

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
> "Act as a Senior Expo Developer. Review this badge implementation and suggest optimizations."
