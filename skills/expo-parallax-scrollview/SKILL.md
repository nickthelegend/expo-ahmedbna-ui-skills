---
name: expo-parallax-scrollview
description: Production-grade Expo Parallax-scrollview Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Parallax-scrollview

## Overview
A high-performance parallax-scrollview component for Expo and React Native applications.

## Implementation

### Code
```tsx
import { View } from '@/components/ui/view';
import { useBottomTabOverflow } from '@/hooks/useBottomTabOverflow';
import { useColor } from '@/hooks/useColor';
import type { PropsWithChildren, ReactElement } from 'react';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

type Props = PropsWithChildren<{
  headerHeight?: number;
  headerImage: ReactElement;
}>;

export function ParallaxScrollView({
  children,
  headerHeight = 250,
  headerImage,
}: Props) {
  const backgroundColor = useColor('background');
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-headerHeight, 0, headerHeight],
            [-headerHeight / 2, 0, headerHeight * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-headerHeight, 0, headerHeight],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        <Animated.View
          style={[
            {
              backgroundColor,
              overflow: 'hidden',
              height: headerHeight,
            },
            headerAnimatedStyle,
          ]}
        >
          {headerImage}
        </Animated.View>
        <View
          style={{
            flex: 1,
            padding: 32,
            gap: 16,
            overflow: 'hidden',
            backgroundColor,
          }}
        >
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

```

## Usage Example
```tsx
import { ParallaxScrollView } from '@/components/ui/parallax-scrollview';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { Image } from 'expo-image';
import React from 'react';

export function ParallaxScrollViewDemo() {
  return (
    <ParallaxScrollView
      headerHeight={460}
      headerImage={
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{ width: '100%', height: '100%' }}
          contentFit='cover'
        />
      }
    >
      <View style={{ gap: 16 }}>
        <Text variant='heading'>Parallax Scroll View</Text>
        <Text>
          This is a basic example of a parallax scroll view. The header image
          moves at a different speed than the content as you scroll, creating a
          beautiful parallax effect.
        </Text>
        <Text>
          Scroll up and down to see the parallax animation in action. The header
          will transform and scale based on your scroll position.
        </Text>
        <Text>
          You can also try pulling down (over-scrolling) to see the header scale
          up beyond its normal size.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review this parallax-scrollview implementation and suggest optimizations."
