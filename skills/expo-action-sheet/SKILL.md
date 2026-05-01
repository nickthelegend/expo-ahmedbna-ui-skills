---
name: expo-action-sheet
description: Production-grade Expo Action-sheet Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Action-sheet

## Overview
A high-performance action-sheet component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { CORNERS, FONT_SIZE } from '@/theme/globals';
import React, { useEffect, useState } from 'react';
import {
  ActionSheetIOS,
  Dimensions,
  Modal,
  Platform,
  Pressable,
  ScrollView,
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

export interface ActionSheetOption {
  title: string;
  onPress: () => void;
  destructive?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface ActionSheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  options: ActionSheetOption[];
  cancelButtonTitle?: string;
  style?: ViewStyle;
}

export function ActionSheet({
  visible,
  onClose,
  title,
 
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ActionSheet } from '@/components/ui/action-sheet';
import { Button } from '@/components/ui/button';
import { View } from '@/components/ui/view';
import React, { useState } from 'react';

export function ActionSheetDemo() {
  const [visible, setVisible] = useState(false);

  const options = [
    {
      title: 'Edit',
      onPress: () => console.log('Edit pressed'),
    },
    {
      title: 'Share',
      onPress: () => console.log('Share pressed'),
    },
    {
      title: 'Delete',
      onPress: () => console.log('Delete pressed'),
      destructive: true,
    },
  ];

  return (
    <View>
      <Button onPress={() => setVisible(true)}>Show Action Sheet</Button>
      <ActionSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title='Choose an action'
        message='Select one of the options below'
        options={options}
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
