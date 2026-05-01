---
name: expo-bubble-chart
description: Production-grade Expo Bubble-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Bubble-chart

## Overview
A high-performance bubble-chart chart for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { useColor } from '@/hooks/useColor';
import { useEffect, useState } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, G, Line, Text as SvgText } from 'react-native-svg';

// Animated SVG Components
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ChartConfig {
  width?: number;
  height?: number;
  padding?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  animated?: boolean;
  duration?: number;
}

interface BubbleChartDataPoint {
  x: number;
  y: number;
  size: number;
  label?: string;
  color?: string;
}

type Props = {
  data: BubbleChartDataPoint[];
  config?: ChartConfig;
  style?: ViewStyle;
};

export const BubbleChart = ({ data, config = {}, style }: Props) => {
  const [containerWidth, setContainerWidth] = useS
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { BubbleChart } from '@/components/charts/bubble-chart';
import React from 'react';

const sampleData = [
  { x: 10, y: 20, size: 15, label: 'A' },
  { x: 25, y: 30, size: 25, label: 'B' },
  { x: 40, y: 15, size: 30, label: 'C' },
  { x: 35, y: 45, size: 20, label: 'D' },
  { x: 60, y: 25, size: 18, label: 'E' },
  { x: 50, y: 40, size: 22, label: 'F' },
  { x: 15, y: 35, size: 28, label: 'G' },
  { x: 70, y: 50, size: 16, label: 'H' },
];

export function BubbleChartDemo() {
  return (
    <ChartContainer
      title='Performance vs Efficiency'
      description='Team performance metrics with bubble sizes representing team size'
    >
      <BubbleChart
        data={sampleData}
        config={{
          height: 300,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1200,
        }}
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
