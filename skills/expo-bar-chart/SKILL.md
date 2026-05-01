---
name: expo-bar-chart
description: Production-grade Expo Bar-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Bar-chart

## Overview
A high-performance bar-chart chart for Expo and React Native applications.

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
import Svg, { G, Rect, Text as SvgText } from 'react-native-svg';

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

interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

type Props = {
  data: ChartDataPoint[];
  config?: ChartConfig;
  style?: ViewStyle;
};

export const BarChart = ({ data, config = {}, style }: Props) => {
  const [containerWidth, setContainerWidth] = useState(300);

  const {
    height = 200,
    padding = 20,
    showLabels = true
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { BarChart } from '@/components/charts/bar-chart';
import React from 'react';

const sampleData = [
  { label: 'Jan', value: 65, color: '#3b82f6' },
  { label: 'Feb', value: 78, color: '#ef4444' },
  { label: 'Mar', value: 52, color: '#10b981' },
  { label: 'Apr', value: 91, color: '#f59e0b' },
  { label: 'May', value: 73, color: '#8b5cf6' },
  { label: 'Jun', value: 85, color: '#06b6d4' },
];

export function BarChartDemo() {
  return (
    <ChartContainer
      title='Monthly Sales'
      description='Product sales performance by month'
    >
      <BarChart
        data={sampleData}
        config={{
          height: 220,
          showLabels: true,
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
