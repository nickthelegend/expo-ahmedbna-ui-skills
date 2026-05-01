---
name: expo-alert-dialog
description: Production-grade Expo Alert-dialog Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Alert-dialog

## Overview
A high-performance alert-dialog component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useColor } from '@/hooks/useColor';
import React, { useEffect } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type AlertDialogProps = {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  dismissible?: boolean;
  showCancelButton?: boolean;
  style?: ViewStyle;
};

// A simple card-like dialog overlay with fade-in animation similar to BottomSheet's backdrop
export function AlertDialog({
  isVisible,
  onClose,

// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import React from 'react';
import { AlertDialog, useAlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';

export function AlertDialogDemo() {
  const dialog = useAlertDialog();

  return (
    <View>
      <Button onPress={dialog.open}>Show Dialog</Button>

      <AlertDialog
        isVisible={dialog.isVisible}
        onClose={dialog.close}
        title='Are you absolutely sure?'
        description='This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
        confirmText='Yes, delete'
        cancelText='Cancel'
        onConfirm={() => {
          console.log('Account deleted');
          dialog.close();
        }}
        onCancel={dialog.close}
      />
    </View>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
