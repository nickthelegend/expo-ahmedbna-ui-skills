---
name: expo-spinner
description: Production-grade Expo Spinner Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Spinner

## Overview
A high-performance spinner component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS, FONT_SIZE } from '@/theme/globals';
import { Loader2 } from 'lucide-react-native';
import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

// Types
type SpinnerSize = 'default' | 'sm' | 'lg' | 'icon';
export type SpinnerVariant = 'default' | 'circle' | 'dots' | 'pulse' | 'bars';

interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
  showLabel?: boolean;
  style?: ViewStyle;
  color?: string;
  thickness?: number; // Note: thickness is not used in the original component logic
  speed?: 'slow' | 'normal' | 'fast';
}

interface LoadingOverlayProps exten
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Spinner } from '@/components/ui/spinner';
import React from 'react';

export function SpinnerDemo() {
  return <Spinner size='default' variant='default' />;
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
