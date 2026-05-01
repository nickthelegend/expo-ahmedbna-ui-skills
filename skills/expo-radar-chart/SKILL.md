---
name: expo-radar-chart
description: Production-grade Expo Radar-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Radar-chart

## Overview
A high-performance radar-chart chart for Expo and React Native applications.

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
import Svg, { Circle, Line, Path, Text as SvgText } from 'react-native-svg';

// Animated SVG Components
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ChartConfig {
  width?: number;
  height?: number;
  showLabels?: boolean;
  animated?: boolean;
  duration?: number;
  maxValue?: number;
}

interface RadarChartDataPoint {
  label: string;
  value: number;
}

type Props = {
  data: RadarChartDataPoint[];
  config?: ChartConfig;
  style?: ViewStyle;
};

export const RadarChart = ({ data, config = {}, style }: Props) => {
  const [containerWidth, setContainerWidth] = useState(30
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { RadarChart } from '@/components/charts/radar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Speed', value: 80 },
  { label: 'Reliability', value: 92 },
  { label: 'Comfort', value: 75 },
  { label: 'Safety', value: 88 },
  { label: 'Efficiency', value: 85 },
  { label: 'Style', value: 70 },
];

export function RadarChartDemo() {
  return (
    <ChartContainer
      title='Product Performance'
      description='Multi-dimensional performance analysis across key metrics'
    >
      <RadarChart
        data={sampleData}
        config={{
          height: 300,
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
