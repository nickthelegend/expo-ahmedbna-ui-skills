---
name: expo-color-picker
description: Production-grade Expo Color-picker Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Color-picker

## Overview
A high-performance color-picker component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS, HEIGHT } from '@/theme/globals';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

const { width: screenWidth } = Dimensions.get('window');
const PICKER_SIZE = screenWidth - 40;
const HUE_BAR_HEIGHT = 40;
const KNOB_SIZE = 40;

// Color utility functions
const hsvToRgb = (h: number, s: number, v: number) => {
  const c = v * s;
  const x = c * (1 - Math.abs
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ColorPicker } from '@/components/ui/color-picker';
import React, { useState } from 'react';

export function ColorPickerDemo() {
  const [color, setColor] = useState('#ff0000');

  return (
    <ColorPicker
      value={color}
      onColorChange={setColor}
      onColorSelect={(selectedColor) => {
        console.log('Color selected:', selectedColor);
        setColor(selectedColor);
      }}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
