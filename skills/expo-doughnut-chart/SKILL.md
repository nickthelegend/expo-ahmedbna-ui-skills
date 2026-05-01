---
name: expo-doughnut-chart
description: Production-grade Expo Doughnut-chart Chart.
category: Charts
difficulty: Intermediate
version: "1.0.0"
---

# Expo Doughnut-chart

## Overview
A high-performance doughnut-chart chart for Expo and React Native applications.

## Implementation

### Code
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
import Svg, { G, Path, Text as SvgText } from 'react-native-svg';

// Animated SVG Components
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface ChartConfig {
  width?: number;
  height?: number;
  showLabels?: boolean;
  animated?: boolean;
  duration?: number;
  innerRadius?: number;
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

export const DoughnutChart = ({ data, config = {}, style }: Props) => {
  const [containerWidth, setContainerWidth] = useState(300);

  const {
    height = 200,
    showLabels = true,
    animated = true,
    duration = 1000,
    innerRadius = 0.5, // Default inner radius as ratio of outer radius
  } = config;

  const chartWidth = containerWidth || config.width || 300;

  const primaryColor = useColor('primary');

  const animationProgress = useSharedValue(0);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width: measuredWidth } = event.nativeEvent.layout;
    if (measuredWidth > 0) {
      setContainerWidth(measuredWidth);
    }
  };

  useEffect(() => {
    if (animated) {
      animationProgress.value = withTiming(1, { duration });
    } else {
      animationProgress.value = 1;
    }
  }, [data, animated, duration]);

  if (!data.length) return null;

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const outerRadius = Math.min(chartWidth, height) / 2 - 20;
  const innerRadiusValue = outerRadius * innerRadius;
  const centerX = chartWidth / 2;
  const centerY = height / 2;

  let currentAngle = -Math.PI / 2;

  const colors = [
    primaryColor,
    useColor('blue'),
    useColor('green'),
    useColor('orange'),
    useColor('purple'),
    useColor('pink'),
  ];

  return (
    <View style={[{ width: '100%' }, style]} onLayout={handleLayout}>
      <Svg width={chartWidth} height={height}>
        {data.map((item, index) => {
          const sliceAngle = (item.value / total) * 2 * Math.PI;
          const startAngle = currentAngle;
          const endAngle = currentAngle + sliceAngle;

          const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;

          // Outer arc points
          const x1 = centerX + outerRadius * Math.cos(startAngle);
          const y1 = centerY + outerRadius * Math.sin(startAngle);
          const x2 = centerX + outerRadius * Math.cos(endAngle);
          const y2 = centerY + outerRadius * Math.sin(endAngle);

          // Inner arc points
          const x3 = centerX + innerRadiusValue * Math.cos(endAngle);
          const y3 = centerY + innerRadiusValue * Math.sin(endAngle);
          const x4 = centerX + innerRadiusValue * Math.cos(startAngle);
          const y4 = centerY + innerRadiusValue * Math.sin(startAngle);

          const pathData = [
            `M ${x1} ${y1}`,
            `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `L ${x3} ${y3}`,
            `A ${innerRadiusValue} ${innerRadiusValue} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
            'Z',
          ].join(' ');

          // Label position
          const labelAngle = startAngle + sliceAngle / 2;
          const labelRadius = (outerRadius + innerRadiusValue) / 2;
          const labelX = centerX + labelRadius * Math.cos(labelAngle);
          const labelY = centerY + labelRadius * Math.sin(labelAngle);

          currentAngle = endAngle;

          const sliceAnimatedProps = useAnimatedProps(() => ({
            opacity: animationProgress.value,
          }));

          return (
            <G key={`slice-${index}`}>
              <AnimatedPath
                d={pathData}
                fill={item.color || colors[index % colors.length]}
                animatedProps={sliceAnimatedProps}
              />

              {showLabels && (
                <SvgText
                  x={labelX}
                  y={labelY}
                  textAnchor='middle'
                  fontSize={12}
                  fill='#FFFFFF'
                  fontWeight='600'
                >
                  {Math.round((item.value / total) * 100)}%
                </SvgText>
              )}
            </G>
          );
        })}
      </Svg>

      {/* Legend */}
      <View style={{ marginTop: 10 }}>
        {data.map((item, index) => (
          <View
            key={`legend-${index}`}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 5,
            }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: item.color || colors[index % colors.length],
                marginRight: 8,
              }}
            />
            <Text variant='caption'>
              {item.label}: {item.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

```

## Usage Example
```tsx
import { DoughnutChart } from '@/components/charts/doughnut-chart';
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

export function DoughnutChartDemo() {
  return (
    <ChartContainer
      title='Department Performance'
      description='Quarterly performance metrics by department'
    >
      <DoughnutChart
        data={sampleData}
        config={{
          height: 300,
          showLabels: true,
          animated: true,
          duration: 1000,
          innerRadius: 0.6,
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
> "Act as a Senior Expo Developer. Review this doughnut-chart implementation and suggest optimizations."
