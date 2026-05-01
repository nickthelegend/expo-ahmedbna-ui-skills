---
name: expo-avoid-keyboard
description: Production-grade Expo Avoid-keyboard Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Avoid-keyboard

## Overview
A high-performance avoid-keyboard component for Expo and React Native applications.

## Implementation

### Code
```tsx
import { useKeyboardHeight } from '@/hooks/useKeyboardHeight';
import { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = { offset?: number; duration?: number };

export const AvoidKeyboard = ({ offset = 0, duration = 0 }: Props) => {
  const { keyboardHeight, isKeyboardVisible, keyboardAnimationDuration } =
    useKeyboardHeight();

  // Shared value for the keyboard padding animation
  const keyboardValue = useSharedValue(0);

  // Update the shared value when keyboard height changes
  useEffect(() => {
    // Use different easing for show vs hide to match native behavior
    const easing = isKeyboardVisible
      ? Easing.out(Easing.quad) // Smooth out for keyboard show
      : Easing.in(Easing.quad); // Smooth in for keyboard hide

    // Only add offset when keyboard is visible
    const targetHeight = isKeyboardVisible ? keyboardHeight + offset : 0;

    keyboardValue.value = withTiming(targetHeight, {
      duration: keyboardAnimationDuration + duration,
      easing,
    });
  }, [
    keyboardHeight,
    keyboardAnimationDuration,
    isKeyboardVisible,
    offset,
    duration,
  ]);

  // Animated style
  const keyboardMargin = useAnimatedStyle(() => {
    return {
      height: keyboardValue.value,
    };
  });

  return <Animated.View style={keyboardMargin} />;
};

```

## Usage Example
```tsx
import { AvoidKeyboard } from '@/components/ui/avoid-keyboard';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useKeyboardHeight } from '@/hooks/useKeyboardHeight';
import React from 'react';

export function AvoidKeyboardDemo() {
  const { keyboardHeight, isKeyboardVisible, keyboardAnimationDuration } =
    useKeyboardHeight();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant='title' style={{ marginBottom: 20 }}>
        Basic Keyboard Avoidance
      </Text>

      <Text variant='body' style={{ marginBottom: 30, opacity: 0.7 }}>
        Tap the input below to see the keyboard avoidance in action. The content
        will smoothly move up to keep the input visible.
      </Text>

      {/* Spacer to push input toward bottom */}

      <View style={{ flex: 1 }}>
        <Text>Keyboard Height: {keyboardHeight}</Text>
        <Text>Keyboard Visible: {isKeyboardVisible ? 'Yes' : 'No'}</Text>
        <Text>Animation Duration: {keyboardAnimationDuration}ms</Text>
      </View>

      <Input placeholder='Type your message here...' label='Message' />

      {/* This will create space to avoid the keyboard */}
      <AvoidKeyboard />
    </View>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review this avoid-keyboard implementation and suggest optimizations."
