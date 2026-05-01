---
name: expo-alert
description: Production-grade Expo Alert Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Alert

## Overview
A high-performance alert component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';
import { Alert as RNAlert, TextStyle, ViewStyle } from 'react-native';

type AlertVariant = 'default' | 'destructive';

interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  style?: ViewStyle;
}

// Visual Alert Component (existing functionality)
export function Alert({ children, variant = 'default', style }: AlertProps) {
  const borderColor = useColor('border');
  const destructiveColor = useColor('destructive');
  const backgroundColor = useColor('card');

  return (
    <View
      style={[
        {
          padding: BORDER_RADIUS,
          borderRadius: BORDER_RADIUS,
          backgroundColor: backgroundColor,
          borderWidth: 1,
          borderColor:
            variant === 'destructive' ? destructiveColor 
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { createTwoButtonAlert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import React from 'react';

export function AlertDemo() {
  const handleTwoButtonAlert = () => {
    createTwoButtonAlert({
      title: 'Two Button Alert',
      message: 'This is a two-button alert example',
      buttons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
    });
  };

  return <Button onPress={handleTwoButtonAlert}>Show Two Button Alert</Button>;
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
