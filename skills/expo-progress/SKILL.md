---
name: expo-progress
description: Production-grade Expo Progress Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Progress

## Overview
A high-performance progress component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { HEIGHT } from '@/theme/globals';
import React, { useEffect } from 'react';
import { ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ProgressProps {
  value: number; // 0-100
  style?: ViewStyle;
  height?: number;
  onValueChange?: (value: number) => void;
  onSeekStart?: () => void;
  onSeekEnd?: () => void;
  interactive?: boolean;
}

export function Progress({
  value,
  style,
  height = HEIGHT,
  onValueChange,
  onSeekStart,
  onSeekEnd,
  interactive = false,
}: ProgressProps) {
  const primaryColor = useColor('primary');
  const mutedColor = useColor('muted');

  const clampedValue = Math.max(0, Math.min(100, value));
  const progressWidth = useSharedValue(clamped
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Progress } from '@/components/ui/progress';
import React from 'react';

export function ProgressDemo() {
  return <Progress value={65} />;
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
