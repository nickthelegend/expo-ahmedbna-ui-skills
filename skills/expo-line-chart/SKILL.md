---
name: expo-line-chart
description: Production-grade Expo Line-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Line-chart

## Overview
A high-performance line-chart chart for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { useColor } from '@/hooks/useColor';
import { useEffect, useState } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

interface ChartConfig {
  width?: number;
  height?: number;
  padding?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  animated?: boolean;
  duration?: number;
  gradient?: boolean;
  interactive?: boolean;
  showYLabels?: boolean;
  yLabelCount?: number;
  yAxisWidth?: number;
}

export type ChartDataPoint = {
  x: string | number;
  y: number;
  label?: string;
};

// Utility functions
const createPath = (points: { x: number; y: nu
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { LineChart } from '@/components/charts/line-chart';
import React from 'react';

const sampleData = [
  { x: 1, y: 10, label: 'Jan' },
  { x: 2, y: 25, label: 'Feb' },
  { x: 3, y: 15, label: 'Mar' },
  { x: 4, y: 40, label: 'Apr' },
  { x: 5, y: 30, label: 'May' },
  { x: 6, y: 55, label: 'Jun' },
  { x: 7, y: 45, label: 'Jul' },
];

export function LineChartDemo() {
  return (
    <ChartContainer
      title='Revenue Trend'
      description='Monthly revenue growth over time'
    >
      <LineChart
        data={sampleData}
        config={{
          height: 220,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1500,
          interactive: true,
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
