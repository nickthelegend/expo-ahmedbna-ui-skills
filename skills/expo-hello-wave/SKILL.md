---
name: expo-hello-wave
description: Production-grade Expo Hello-wave Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Hello-wave

## Overview
A high-performance hello-wave component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface HelloWaveProps {
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const sizeVariants = {
  sm: {
    fontSize: 20,
    lineHeight: 24,
    marginTop: -4,
  },
  md: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
  lg: {
    fontSize: 36,
    lineHeight: 40,
    marginTop: -8,
  },
};

export function HelloWave({ children = '👋', size = 'md' }: HelloWaveProps) {
  const rotationAnimation = useSharedValue(0);

  useEffect(() => {
    rotationAnimation.value = withRepeat(
      withSequence(
        withTiming(25, { duration: 150 }),
        withTiming(0, { duration: 150 })
      ),
      4 // Run the animation 4 times
    );
  }, [rotationAnimation
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { HelloWave } from '@/components/ui/hello-wave';
import React from 'react';

export function HellowWaveDemo() {
  return <HelloWave>👋</HelloWave>;
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
