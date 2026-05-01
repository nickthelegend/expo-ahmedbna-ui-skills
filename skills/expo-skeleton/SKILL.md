---
name: expo-skeleton
description: Production-grade Expo Skeleton Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Skeleton

## Overview
A high-performance skeleton component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS } from '@/theme/globals';
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

interface SkeletonProps {
  width?: number | string;
  height?: number;
  style?: ViewStyle;
  variant?: 'default' | 'rounded';
}

export function Skeleton({
  width = '100%',
  height = 100,
  style,
  variant = 'default',
}: SkeletonProps) {
  const mutedColor = useColor('muted');
  // Start the opacity at its lowest point
  const opacity = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    // We only define the animation going from 0.5 -> 1.
    // The `withRepeat` function will handle reversing it automatically.
    opacity.value = wi
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export function SkeletonDemo() {
  return <Skeleton width={200} height={20} />;
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
