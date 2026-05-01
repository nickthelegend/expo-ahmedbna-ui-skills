---
name: expo-progress-ring-chart
description: Production-grade Expo Progress-ring-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Progress-ring-chart

## Overview
A high-performance progress-ring-chart chart for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { useColor } from '@/hooks/useColor';
import { useEffect } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

// Animated SVG Components
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ChartConfig {
  animated?: boolean;
  duration?: number;
  gradient?: boolean;
}

type Props = {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  config?: ChartConfig;
  style?: ViewStyle;
  showLabel?: boolean;
  label?: string;
  centerText?: string;
};

export const ProgressRingChart = ({
  progress,
  size = 120,
  strokeWidth = 8,
  config = {},
  style,
  showLabel = true,
  label,
  centerText,
}: Props) => {
  const { animated = true, duration = 1000, gradient = false } = confi
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ProgressRingChart } from '@/components/charts/progress-ring-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

export function ProgressRingChartDemo() {
  return (
    <ChartContainer
      title='Goal Progress'
      description='Track your progress towards your goals'
    >
      <ProgressRingChart
        progress={75}
        size={120}
        strokeWidth={8}
        config={{
          animated: true,
          duration: 1000,
          gradient: false,
        }}
        showLabel={true}
        label='Completion Rate'
      />
    </ChartContainer>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
