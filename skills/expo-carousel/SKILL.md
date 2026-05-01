---
name: expo-carousel
description: Production-grade Expo Carousel Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Carousel

## Overview
A high-performance carousel component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import { BlurView } from 'expo-blur';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
const { width: screenWidth } = Dimensions.get('window');

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  loop?: boolean;
  itemWidth?: number;
  spacing?: number;
  style?: ViewStyle;
  onIndexChange?: (index: number) => void;
}

interface CarouselItemProps {
  children: Rea
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Carousel, CarouselItem } from '@/components/ui/carousel';
import { Text } from '@/components/ui/text';

export function CarouselDemo() {
  return (
    <Carousel
      showIndicators={true}
      showArrows={true}
      autoPlay={true}
      loop={true}
    >
      {slides.map((slide) => (
        <CarouselItem
          key={slide.id}
          style={{
            minHeight: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text variant='subtitle'>{slide.title}</Text>
          <Text
            style={{
              marginTop: 8,
              opacity: 0.7,
            }}
          >
            {slide.content}
          </Text>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

const slides = [
  {
    id: 1,
    title: 'Full Width Slide 1',
    content: 'This slide takes the full width of the container',
  },
  {
    id: 2,
    title: 'Full Width Slide 2',
    
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
