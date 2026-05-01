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
  const [containerWidth, setContainerWidth] = useState(300);

  const {
    height = 200,
    padding = 20,
    showGrid = true,
    showLabels = true,
    animated = true,
    duration = 800,
  } = config;

  // Use measured width or fallback to config width or default
  const chartWidth = containerWidth || config.width || 300;

  const bullishColor = useColor('green');
  const bearishColor = useColor('red');
  const mutedColor = useColor('mutedForeground');

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

  const allValues = data.flatMap((d) => [d.open, d.high, d.low, d.close]);
  const maxValue = Math.max(...allValues);
  const minValue = Math.min(...allValues);
  const valueRange = maxValue - minValue || 1;

  const innerChartWidth = chartWidth - padding * 2;
  const chartHeight = height - padding * 2;
  const candleWidth = (innerChartWidth / data.length) * 0.6;
  const candleSpacing = (innerChartWidth / data.length) * 0.4;

  return (
    <View style={[{ width: '100%', height }, style]} onLayout={handleLayout}>
      <Svg width={chartWidth} height={height}>
        {/* Grid lines */}
        {showGrid && (
          <G>
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
              <Line
                key={`grid-${index}`}
                x1={padding}
                y1={padding + ratio * chartHeight}
                x2={chartWidth - padding}
                y2={padding + ratio * chartHeight}
                stroke={mutedColor}
                strokeWidth={0.5}
                opacity={0.3}
              />
            ))}
          </G>
        )}

        {data.map((item, index) => {
          const isBullish = item.close >= item.open;
          const color = isBullish ? bullishColor : bearishColor;

          const x =
            padding + index * (candleWidth + candleSpacing) + candleSpacing / 2;
          const highY =
            padding + ((maxValue - item.high) / valueRange) * chartHeight;
          const lowY =
            padding + ((maxValue - item.low) / valueRange) * chartHeight;
          const openY =
            padding + ((maxValue - item.open) / valueRange) * chartHeight;
          const closeY =
            padding + ((maxValue - item.close) / valueRange) * chartHeight;

          const bodyTop = Math.min(openY, closeY);
          const bodyHeight = Math.abs(closeY - openY) || 1;

          const wickAnimatedProps = useAnimatedProps(() => ({
            y1: highY,
            y2: lowY,
            opacity: animationProgress.value,
          }));

          const bodyAnimatedProps = useAnimatedProps(() => ({
            height: animationProgress.value * bodyHeight,
            y: bodyTop,
            opacity: animationProgress.value,
          }));

          return (
            <G key={`candle-${index}`}>
              {/* High-Low wick */}
              <AnimatedLine
                x1={x + candleWidth / 2}
                x2={x + candleWidth / 2}
                stroke={color}
                strokeWidth={1}
                animatedProps={wickAnimatedProps}
              />

              {/* Open-Close body */}
              <AnimatedRect
                x={x}
                width={candleWidth}
                // fill={isBullish ? 'transparent' : color}
                fill={color}
                stroke={color}
                strokeWidth={1}
                animatedProps={bodyAnimatedProps}
              />

              {showLabels &&
                index % Math.max(1, Math.floor(data.length / 5)) === 0 && (
                  <SvgText
                    x={x + candleWidth / 2}
                    y={height - 5}
                    textAnchor='middle'
                    fontSize={10}
                    fill={mutedColor}
                  >
                    {item.date}
                  </SvgText>
                )}
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

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
      description='Daily OHLC data showing price trends over time'
    >
      <CandlestickChart
        data={sampleData}
        config={{
          height: 220,
          showGrid: true,
          showLabels: true,
          animated: true,
          duration: 1200,
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
> "Act as a Senior Expo Developer. Review this candlestick-chart implementation and suggest optimizations."
