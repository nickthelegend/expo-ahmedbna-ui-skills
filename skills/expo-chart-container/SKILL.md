---
name: expo-chart-container
description: Production-grade Expo Chart-container Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Chart-container

## Overview
A high-performance chart-container chart for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import { ViewStyle } from 'react-native';

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  style?: ViewStyle;
};

export const ChartContainer = ({
  title,
  description,
  children,
  style,
}: Props) => {
  const cardColor = useColor('card');

  return (
    <View
      style={[
        {
          backgroundColor: cardColor,
          borderRadius: BORDER_RADIUS,
          padding: 16,
          width: '100%', // Full container width
        },
        style,
      ]}
    >
      {title && (
        <Text variant='subtitle' style={{ marginBottom: 4 }}>
          {title}
        </Text>
      )}
      {description && (
        <Text variant='caption' style={{ marginBottom: 16 }}>
          {description}
        </Text>
   
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ChartContainer } from '@/components/charts/chart-container';
import { LineChart } from '@/components/charts/line-chart';
import React from 'react';

const sampleData = [
  { x: 'Jan', y: 100, label: 'January' },
  { x: 'Feb', y: 120, label: 'February' },
  { x: 'Mar', y: 90, label: 'March' },
  { x: 'Apr', y: 140, label: 'April' },
  { x: 'May', y: 110, label: 'May' },
];

export function ChartContainerDemo() {
  return (
    <ChartContainer
      title='Monthly Revenue'
      description='Revenue data for the last 6 months'
    >
      <LineChart
        data={sampleData}
        config={{
          height: 200,
          animated: true,
          showGrid: true,
          showLabels: true,
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
