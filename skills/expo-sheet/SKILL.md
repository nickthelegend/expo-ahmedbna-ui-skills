---
name: expo-sheet
description: Production-grade Expo Sheet Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Sheet

## Overview
A high-performance sheet component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, FONT_SIZE } from '@/theme/globals';
import { X } from 'lucide-react-native';
import React, { useEffect } from 'react';
import {
  Dimensions,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type SheetSide = 'left' | 'right';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side?: SheetSide;
  children: React.ReactNode;
}

interface SheetContentProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

interface SheetHeaderProps {
  children: React.Reac
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function SheetDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome to the Sheet</SheetTitle>
          <SheetDescription>
            This is a basic sheet component that slides in from the right side
            of the screen.
          </SheetDescription>
        </SheetHeader>
        <View style={{ padding: 24, gap: 16 }}>
          <Text>
            This sheet can contain any content you need. It's perfect for
            navigation menus, forms, settings, or deta
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
