---
name: expo-radial-bar-chart
description: Production-grade Expo Radial-bar-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Radial-bar-chart

## Overview
A high-performance radial-bar-chart chart for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import { useEffect, useState } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
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
  padding?: number;
  animated?: boolean;
  duration?: number;
  gradient?: boolean;
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

export const RadialBarChart = ({ data, config = {}, style }: Props) => {
  const [containerSize, setContainerSize] = useState(200);

  const {
    padding = 20,
    an
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { RadialBarChart } from '@/components/charts/radial-bar-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Sales', value: 120 },
  { label: 'Marketing', value: 98 },
  { label: 'Support', value: 86 },
  { label: 'Development', value: 140 },
  { label: 'Design', value: 75 },
];

export function RadialBarChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <RadialBarChart
        data={sampleData}
        config={{
          animated: true,
          duration: 1000,
          gradient: false,
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
