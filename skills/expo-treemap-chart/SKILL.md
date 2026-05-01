---
name: expo-treemap-chart
description: Production-grade Expo Treemap-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Treemap-chart

## Overview
A high-performance treemap-chart chart for Expo and React Native applications.

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
  showLabels?: boolean;
  animated?: boolean;
  duration?: number;
}

export interface TreeMapDataPoint {
  label: string;
  value: number;
  color?: string;
  children?: TreeMapDataPoint[];
}

interface TreeMapRect {
  x: number;
  y: number;
  width: number;
  height: number;
  data: TreeMapDataPoint;
  depth: number;
}

type Props = {
  data: TreeMapDataPoint[];
  config?: ChartConfig;
  style?: ViewStyle;
};

// Squarified treemap algorithm
const s
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { TreeMapChart } from '@/components/charts/treemap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { label: 'Sales', value: 120 },
  { label: 'Marketing', value: 98 },
  { label: 'Support', value: 86 },
  { label: 'Development', value: 140 },
  { label: 'Design', value: 75 },
  { label: 'HR', value: 65 },
];

export function TreeMapChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <TreeMapChart
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
