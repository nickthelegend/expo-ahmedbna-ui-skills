---
name: expo-scatter-chart
description: Production-grade Expo Scatter-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Scatter-chart

## Overview
A high-performance scatter-chart chart for Expo and React Native applications.

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

export type ChartDataPoint = {
  x: number;
  y: number;
  label?: string;
};

type Props = {
  data: ChartDataPoint[];
  config?: ChartConfig;
  style?: ViewStyle;
};

// Scatter Plot Component
export const ScatterPlot = ({ data, config = {}, style }: Props) => {
  const [containerWidth, setContainerWidth] = useState(300);

  
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ScatterPlot } from '@/components/charts/scatter-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 10, y: 20, label: 'Point A' },
  { x: 25, y: 35, label: 'Point B' },
  { x: 40, y: 15, label: 'Point C' },
  { x: 55, y: 45, label: 'Point D' },
  { x: 70, y: 30, label: 'Point E' },
  { x: 85, y: 55, label: 'Point F' },
  { x: 30, y: 50, label: 'Point G' },
  { x: 65, y: 25, label: 'Point H' },
];

export function ScatterChartDemo() {
  return (
    <ChartContainer
      title='Performance vs Experience'
      description='Scatter plot showing the relationship between years of experience and performance scores'
    >
      <ScatterPlot
        data={sampleData}
        config={{
          height: 300,
          showGrid: true,
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
