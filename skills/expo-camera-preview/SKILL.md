---
name: expo-camera-preview
description: Production-grade Expo Camera-preview Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Camera-preview

## Overview
A high-performance camera-preview component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Button } from '@/components/ui/button';
import { Camera, CaptureSuccess } from '@/components/ui/camera';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { Video } from '@/components/ui/video';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import * as MediaLibrary from 'expo-media-library';
import { Download, Upload, X } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('window');

export function CameraPreview() {
  const [showCamera, setShowCamera] = useState(false);
  const [cameraHeight, setCameraHeight] = useState((screenWidth * 4) / 3);
  const [capturedMedia, setCapturedMedia] = useState<{
    uri: string;
    type: 'picture' | 'video';
  } | null>(null);
  
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { CameraPreview } from '@/components/ui/camera-preview';

export function CameraPreviewDemo() {
  return <CameraPreview />;
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
