---
name: expo-camera
description: Production-grade Expo Camera Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Camera

## Overview
A high-performance camera component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, FONT_SIZE } from '@/theme/globals';
import {
  CameraMode,
  CameraRatio,
  CameraType,
  CameraView,
  useCameraPermissions,
} from 'expo-camera';
import {
  Camera as CameraIcon,
  Grid3X3,
  Settings,
  SwitchCamera,
  Timer,
  Video,
  Volume2,
  VolumeX,
  X,
  Zap,
  ZapOff,
} from 'lucide-react-native';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedProps,
  useAnimatedReaction,
  useAnimatedStyle,
  useSha
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Camera } from '@/components/ui/camera';
import React from 'react';
import { Alert } from 'react-native';

export function CameraDemo() {
  const handleCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Picture Captured', `Saved to: ${uri}`);
  };

  const handleVideoCapture = ({ uri, type }: { uri: string; type: string }) => {
    Alert.alert('Video Recorded', `Saved to: ${uri}`);
  };

  return (
    <Camera
      onCapture={handleCapture}
      onVideoCapture={handleVideoCapture}
      style={{ height: 400 }}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
