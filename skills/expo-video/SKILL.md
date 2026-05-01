---
name: expo-video
description: Production-grade Expo Video Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Video

## Overview
A high-performance video component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoSource, VideoView } from 'expo-video';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react-native';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface VideoProps {
  source: VideoSource;
  style?: ViewStyle;
  seekBy?: number; // seconds to seek by on double tap
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  nativeControls?: boolean;
  showControls?: boolean;
  allowsFullscreen?: boolean
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Video } from '@/components/ui/video';

export function VideoDemo() {
  return (
    <Video
      source={{
        uri: 'https://cdn.jsdelivr.net/gh/ahmedbna/bna-ui-demo/',
      }}
      style={{
        width: '100%',
        height: 200,
        borderRadius: 8,
      }}
      autoPlay={false}
      loop={false}
      muted={false}
      showControls={true}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
