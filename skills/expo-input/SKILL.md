---
name: expo-input
description: Production-grade Expo Input Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Input

## Overview
A high-performance input component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS, FONT_SIZE, HEIGHT } from '@/theme/globals';
import { LucideProps } from 'lucide-react-native';
import React, { forwardRef, ReactElement, useState } from 'react';
import {
  Pressable,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  icon?: React.ComponentType<LucideProps>;
  rightComponent?: React.ReactNode | (() => React.ReactNode);
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  variant?: 'filled' | 'outline';
  disabled?: boolean;
  type?: 'input' | 'textarea';
  placeholder?: string;
  rows?: number; // Only used when type="textarea"
}

export const Input = forwardRef<TextInput, Inp
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Input } from '@/components/ui/input';
import { User } from 'lucide-react-native';
import React from 'react';

export function InputDemo() {
  return (
    <Input label='Username' placeholder='Enter your username' icon={User} />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
