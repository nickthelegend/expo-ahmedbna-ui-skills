---
name: expo-area-chart
description: Production-grade Expo Area-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Area-chart

## Overview
A high-performance area-chart chart for Expo and React Native applications.

## Implementation

### Code
```tsx
import { LineChart } from '@/components/charts/line-chart';
import { ViewStyle } from 'react-native';

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

interface ChartDataPoint {
  x: string | number;
  y: number;
  label?: string;
}

type Props = {
  data: ChartDataPoint[];
  config?: ChartConfig;
  style?: ViewStyle;
};
export const AreaChart = ({ data, config = {}, style }: Props) => {
  return (
    <LineChart
      data={data}
      config={{ ...config, gradient: true }}
      style={style}
    />
  );
};

```

## Usage Example
```tsx
import { AreaChart } from '@/components/charts/area-chart';
import { ChartContainer } from '@/components/charts/chart-container';
import React from 'react';

const sampleData = [
  { x: 'Jan', y: 100, label: 'January' },
  { x: 'Feb', y: 120, label: 'February' },
  { x: 'Mar', y: 90, label: 'March' },
  { x: 'Apr', y: 140, label: 'April' },
  { x: 'May', y: 110, label: 'May' },
  { x: 'Jun', y: 130, label: 'June' },
];

export function AreaChartDemo() {
  return (
    <ChartContainer
      title='Website Traffic'
      description='Daily visitors with gradient fill'
    >
      <AreaChart
        data={sampleData}
        config={{
          height: 200,
          showGrid: true,
          showLabels: false,
          animated: true,
          duration: 1800,
          gradient: true,
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
> "Act as a Senior Expo Developer. Review this area-chart implementation and suggest optimizations."
