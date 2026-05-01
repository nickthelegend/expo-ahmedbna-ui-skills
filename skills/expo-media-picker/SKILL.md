---
name: expo-media-picker
description: Production-grade Expo Media-picker Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Media-picker

## Overview
A high-performance media-picker component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Button, ButtonSize, ButtonVariant } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { CORNERS, FONT_SIZE } from '@/theme/globals';
import { Image as ExpoImage } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { LucideProps, Video, X } from 'lucide-react-native';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  View as RNView,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export type MediaType = 'image' | 'video' | 'all';
export type MediaQuality = 'low' | 'medium' | 'high';

export interface MediaAsset {
  id: string;
  uri: string;
  type: 'image' | 'video';
  width?: number;
  height?: number;
  duration?: number;
  filename?: string;
  
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { MediaPicker } from '@/components/ui/media-picker';
import React from 'react';

export function MediaPickerDemo() {
  return (
    <MediaPicker
      mediaType='all'
      onSelectionChange={(assets) => {
        console.log('Selected assets:', assets);
      }}
      onError={(error) => {
        console.error('Media picker error:', error);
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
