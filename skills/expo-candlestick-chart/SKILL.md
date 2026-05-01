---
name: expo-candlestick-chart
description: Production-grade Expo Candlestick-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Candlestick-chart

## Overview
A high-performance candlestick-chart chart for Expo and React Native applications.

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
const AnimatedLine = Animated.createAnimatedComponent(Line);

interface ChartConfig {
  width?: number;
  height?: number;
  padding?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  animated?: boolean;
  duration?: number;
}

interface CandlestickDataPoint {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

type Props = {
  data: CandlestickDataPoint[];
  config?: ChartConfig;
  style?: ViewStyle;
};

export const CandlestickChart = ({ data, config = {}, style }: Props) => {
  const [contain
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { CandlestickChart } from '@/components/charts/candlestick-chart';
import React from 'react';

const sampleData = [
  { date: 'Jan 1', open: 100, high: 120, low: 95, close: 110 },
  { date: 'Jan 2', open: 110, high: 125, low: 105, close: 115 },
  { date: 'Jan 3', open: 115, high: 130, low: 110, close: 125 },
  { date: 'Jan 4', open: 125, high: 140, low: 120, close: 135 },
  { date: 'Jan 5', open: 135, high: 145, low: 125, close: 128 },
  { date: 'Jan 6', open: 128, high: 135, low: 118, close: 132 },
  { date: 'Jan 7', open: 132, high: 142, low: 128, close: 138 },
  { date: 'Jan 8', open: 138, high: 148, low: 132, close: 145 },
  { date: 'Jan 9', open: 145, high: 155, low: 140, close: 150 },
  { date: 'Jan 10', open: 150, high: 160, low: 145, close: 155 },
];

export function CandlestickChartDemo() {
  return (
    <ChartContainer
      title='Stock Price Movement'
      description='Daily 
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
