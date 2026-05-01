---
name: expo-image
description: Production-grade Expo Image Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Image

## Overview
A high-performance image component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS } from '@/theme/globals';
import {
  Image as ExpoImage,
  ImageProps as ExpoImageProps,
  ImageSource,
} from 'expo-image';
import { forwardRef, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

export interface ImageProps extends Omit<ExpoImageProps, 'style'> {
  variant?: 'rounded' | 'circle' | 'default';
  source: ImageSource;
  style?: ExpoImageProps['style'];
  containerStyle?: any;
  showLoadingIndicator?: boolean;
  showErrorFallback?: boolean;
  errorFallbackText?: string;
  loadingIndicatorSize?: 'small' | 'large';
  loadingIndicatorColor?: string;
  aspectRatio?: number;
  width?: number | string;
  height?: number | string;
}

export const Image = forwardRef<ExpoImage, ImageProps>(
  (
    {
      variant = 'rounded',
      source,
      sty
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Image } from '@/components/ui/image';

export function ImageDemo() {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      aspectRatio={1}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
