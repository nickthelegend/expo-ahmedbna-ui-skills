---
name: expo-audio-recorder
description: Production-grade Expo Audio-recorder Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Audio-recorder

## Overview
A high-performance audio-recorder component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { AudioPlayer } from '@/components/ui/audio-player';
import { AudioWaveform } from '@/components/ui/audio-waveform';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import {
  AudioModule,
  RecordingOptions,
  RecordingPresets,
  useAudioRecorder,
} from 'expo-audio';
import { Circle, Download, Mic, Square, Trash2 } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Platform, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export interface AudioRecorderProps {
  style?: ViewStyle;
  quality?: 'high' | 'low';
  showWaveform?: boolean;
  showTimer?: boolean;
  maxDuration?: number; // in seconds
  onRecordingCom
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { AudioRecorder } from '@/components/ui/audio-recorder';

export function AudioRecorderDemo() {
  const handleRecordingComplete = (uri: string) => {
    console.log('Recording saved to:', uri);
  };

  const handleRecordingStart = () => {
    console.log('Recording started');
  };

  const handleRecordingStop = () => {
    console.log('Recording stopped');
  };

  return (
    <AudioRecorder
      quality='high'
      showWaveform={true}
      showTimer={true}
      maxDuration={300} // 5 minutes
      onRecordingComplete={handleRecordingComplete}
      onRecordingStart={handleRecordingStart}
      onRecordingStop={handleRecordingStop}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
