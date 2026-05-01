---
name: expo-toast
description: Production-grade Expo Toast Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Toast

## Overview
A high-performance toast component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { AlertCircle, Check, Info, X } from 'lucide-react-native';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Dimensions,
  Platform,
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
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastData {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
}

interface ToastProps extends ToastData {
  onDismiss: (id: string) => void;
  index: number;
}

const { width:
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';
import React from 'react';

export function ToastDemo() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: 'Toast Notification',
      description:
        'This is a basic toast notification with title and description.',
      variant: 'default',
    });
  };

  return <Button onPress={showToast}>Show Toast</Button>;
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
