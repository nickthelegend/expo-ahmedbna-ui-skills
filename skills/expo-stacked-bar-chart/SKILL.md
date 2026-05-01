---
name: expo-stacked-bar-chart
description: Production-grade Expo Stacked-bar-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Stacked-bar-chart

## Overview
A high-performance stacked-bar-chart chart for Expo and React Native applications.

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
import Svg, { G, Line, Rect, Text as SvgText } from 'react-native-svg';

// Animated SVG Components
const AnimatedRect = Animated.createAnimatedComponent(Rect);

interface ChartConfig {
  width?: number;
  height?: number;
  padding?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  animated?: boolean;
  duration?: number;
}

export interface StackedBarDataPoint {
  label: string;
  values: number[];
}

type Props = {
  data: StackedBarDataPoint[];
  colors?: string[];
  config?: ChartConfig;
  style?: ViewStyle;
  categories?: string[];
  horizontal?: boolean;
};

export const StackedBarChart = ({
  data,
  colors = [],
  config = {},
  style,
  categories = [],
  horizontal = f
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { StackedBarChart } from '@/components/charts/stacked-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Q1', values: [120, 98, 86] },
  { label: 'Q2', values: [140, 110, 95] },
  { label: 'Q3', values: [160, 130, 105] },
  { label: 'Q4', values: [180, 150, 115] },
];

const categories = ['Sales', 'Marketing', 'Support'];

export function StackedBarChartDemo() {
  return (
    <ChartContainer
      title='Quarterly Performance'
      description='Revenue breakdown by department across quarters'
    >
      <StackedBarChart
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
    </ChartContainer>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
