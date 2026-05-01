---
name: expo-stacked-area-chart
description: Production-grade Expo Stacked-area-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Stacked-area-chart

## Overview
A high-performance stacked-area-chart chart for Expo and React Native applications.

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
  withTiming,
} from 'react-native-reanimated';
import Svg, {
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

// Animated SVG Components
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface ChartConfig {
  width?: number;
  height?: number;
  padding?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  animated?: boolean;
  duration?: number;
}

export interface StackedAreaDataPoint {
  x: number;
  y: number[];
  label?: string;
}

type Props = {
  data: StackedAreaDataPoint[];
  colors?: string[];
  config?: ChartConfig;
  style?: ViewStyle;
  categories?: string[];
};

// Utility function to create smooth path
const createSmoothPath = (points: { x: nu
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { StackedAreaChart } from '@/components/charts/stacked-area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 1, y: [20, 30, 25], label: 'Jan' },
  { x: 2, y: [25, 35, 30], label: 'Feb' },
  { x: 3, y: [30, 40, 35], label: 'Mar' },
  { x: 4, y: [35, 45, 40], label: 'Apr' },
  { x: 5, y: [40, 50, 45], label: 'May' },
  { x: 6, y: [45, 55, 50], label: 'Jun' },
];

const categories = ['Product A', 'Product B', 'Product C'];

export function StackedAreaChartDemo() {
  return (
    <ChartContainer
      title='Monthly Revenue by Product'
      description='Revenue breakdown showing contribution of each product line'
    >
      <StackedAreaChart
        data={sampleData}
        categories={categories}
        config={{
          height: 300,
          showLabels: true,
          showGrid: true,
          animated: true,
          duration: 1000,
        }}
      />
   
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
