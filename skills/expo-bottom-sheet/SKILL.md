---
name: expo-bottom-sheet
description: Production-grade Expo Bottom-sheet Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Bottom-sheet

## Overview
A high-performance bottom-sheet component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useKeyboardHeight } from '@/hooks/useKeyboardHeight'; // Make sure this path is correct
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React, { useEffect } from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

type BottomSheetContentProps = {
  children: React.ReactNode;
  title?: string;
  style?: ViewStyle;
  rBottomSheetStyle: any;
  cardColor: string;
  mutedColor: string;
  onHandlePress?: ()
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function BottomSheetDemo() {
  const { isVisible, open, close } = useBottomSheet();

  return (
    <View>
      <Button onPress={open}>Open Bottom Sheet</Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        snapPoints={[0.3, 0.6, 0.9]}
      >
        <View style={{ gap: 16 }}>
          <Text variant='title'>Welcome to Bottom Sheet</Text>
          <Text>
            This is a basic bottom sheet that supports gesture interactions. You
            can drag it up and down to different snap points, or swipe down
            quickly to dismiss it.
          </Text>
          <Button onPress={close}>Close</Button>
        </View>
      </BottomSheet>
    </View>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
