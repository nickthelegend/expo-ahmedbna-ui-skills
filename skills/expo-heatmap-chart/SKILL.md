---
name: expo-heatmap-chart
description: Production-grade Expo Heatmap-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Heatmap-chart

## Overview
A high-performance heatmap-chart chart for Expo and React Native applications.

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
  withTiming,
} from 'react-native-reanimated';
import Svg, { G, Rect, Text as SvgText } from 'react-native-svg';

// Animated SVG Components
const AnimatedRect = Animated.createAnimatedComponent(Rect);

// Utility functions
const interpolateColor = (
  color1: string,
  color2: string,
  factor: number
): string => {
  // Simple color interpolation between two hex colors
  const hex1 = color1.replace('#', '');
  const hex2 = color2.replace('#', '');

  const r1 = parseInt(hex1.substr(0, 2), 16);
  const g1 = parseInt(hex1.substr(2, 2), 16);
  const b1 = parseInt(hex1.substr(4, 2), 16);

  const r2 = parseInt(hex2.substr(0, 2), 16);
  const g2 = parseInt(hex2.substr(2, 2), 16);
  const b2 = parseInt(hex2.substr(4, 2), 16);

  const
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { HeatmapChart } from '@/components/charts/heatmap-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { row: 'Mon', col: 'Morning', value: 45 },
  { row: 'Mon', col: 'Afternoon', value: 62 },
  { row: 'Mon', col: 'Evening', value: 38 },
  { row: 'Tue', col: 'Morning', value: 52 },
  { row: 'Tue', col: 'Afternoon', value: 71 },
  { row: 'Tue', col: 'Evening', value: 43 },
  { row: 'Wed', col: 'Morning', value: 39 },
  { row: 'Wed', col: 'Afternoon', value: 85 },
  { row: 'Wed', col: 'Evening', value: 57 },
  { row: 'Thu', col: 'Morning', value: 68 },
  { row: 'Thu', col: 'Afternoon', value: 92 },
  { row: 'Thu', col: 'Evening', value: 61 },
  { row: 'Fri', col: 'Morning', value: 73 },
  { row: 'Fri', col: 'Afternoon', value: 88 },
  { row: 'Fri', col: 'Evening', value: 79 },
];

export function HeatmapChartDemo() {
  return (
    <ChartContainer
      title='Weekly Activity Heat
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
