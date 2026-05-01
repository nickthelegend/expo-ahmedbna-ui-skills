---
name: expo-avatar
description: Production-grade Expo Avatar Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Avatar

## Overview
A high-performance avatar component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { FONT_SIZE } from '@/theme/globals';
import { ImageProps, ImageSource } from 'expo-image';
import { TextStyle, ViewStyle } from 'react-native';

interface AvatarProps {
  children: React.ReactNode;
  size?: number;
  style?: ViewStyle;
}

export function Avatar({ children, size = 40, style }: AvatarProps) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          overflow: 'hidden',
          position: 'relative',
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

interface AvatarImageProps {
  source: ImageSource;
  style?: ImageProps['style'];
}

export function AvatarImage({ source, style }: AvatarImageProps) {
  return <Image source={source} style={[st
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        source={{ uri: 'https://avatars.githubusercontent.com/u/99088394?v=4' }}
      />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
