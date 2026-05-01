---
name: expo-text
description: Production-grade Expo Text Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Text

## Overview
A high-performance text component for Expo and React Native applications.

## Implementation

### Code
```tsx
import { useColor } from '@/hooks/useColor';
import { FONT_SIZE } from '@/theme/globals';
import React, { forwardRef } from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

type TextVariant =
  | 'body'
  | 'title'
  | 'subtitle'
  | 'caption'
  | 'heading'
  | 'link';

interface TextProps extends RNTextProps {
  variant?: TextVariant;
  lightColor?: string;
  darkColor?: string;
  children: React.ReactNode;
}

export const Text = forwardRef<RNText, TextProps>(
  (
    { variant = 'body', lightColor, darkColor, style, children, ...props },
    ref
  ) => {
    const textColor = useColor('text', { light: lightColor, dark: darkColor });
    const mutedColor = useColor('textMuted');

    const getTextStyle = (): TextStyle => {
      const baseStyle: TextStyle = {
        color: textColor,
      };

      switch (variant) {
        case 'heading':
          return {
            ...baseStyle,
            fontSize: 28,
            fontWeight: '800',
          };
        case 'title':
          return {
            ...baseStyle,
            fontSize: 24,
            fontWeight: '700',
          };
        case 'subtitle':
          return {
            ...baseStyle,
            fontSize: 19,
            fontWeight: '600',
          };
        case 'caption':
          return {
            ...baseStyle,
            fontSize: FONT_SIZE,
            fontWeight: '400',
            color: mutedColor,
          };
        case 'link':
          return {
            ...baseStyle,
            fontSize: FONT_SIZE,
            fontWeight: '500',
            textDecorationLine: 'underline',
          };
        default: // 'body'
          return {
            ...baseStyle,
            fontSize: FONT_SIZE,
            fontWeight: '400',
          };
      }
    };

    return (
      <RNText ref={ref} style={[getTextStyle(), style]} {...props}>
        {children}
      </RNText>
    );
  }
);

```

## Usage Example
```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function TextDemo() {
  return (
    <View style={{ gap: 16 }}>
      <Text variant='heading'>Heading Text</Text>
      <Text variant='title'>Title Text</Text>
      <Text variant='subtitle'>Subtitle Text</Text>
      <Text variant='body'>
        This is body text that demonstrates the default styling for regular
        content.
      </Text>
      <Text variant='caption'>Caption text for additional information</Text>
      <Text variant='link'>Link text with underline</Text>
    </View>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review this text implementation and suggest optimizations."
