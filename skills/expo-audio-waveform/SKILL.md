---
name: expo-audio-waveform
description: Production-grade Expo Audio-waveform Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Audio-waveform

## Overview
A high-performance audio-waveform component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { useColor } from '@/hooks/useColor';
import React, { useEffect, useMemo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export interface AudioWaveformProps {
  data?: number[];
  isPlaying?: boolean;
  progress?: number;
  onSeek?: (position: number) => void;
  onSeekStart?: () => void;
  onSeekEnd?: () => void;
  style?: ViewStyle;
  height?: number;
  barCount?: number;
  barWidth?: number;
  barGap?: number;
  activeColor?: string;
  inactiveColor?: string;
  animated?: boolean;
  showProgress?: boolean;
  interactive?: boolean;
}

// FIX: The Bar component now manages its own animation state.
const Bar = React.memo(
  ({
    value,
    height,
    width,
   
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { AudioWaveform } from '@/components/ui/audio-waveform';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useEffect, useState } from 'react';

export function AudioWaveformDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate audio playback progress
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSeek = (position: number) => {
    setProgress(position);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={{ 
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
