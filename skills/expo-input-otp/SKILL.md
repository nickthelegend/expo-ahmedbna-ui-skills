---
name: expo-input-otp
description: Production-grade Expo Input-otp Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Input-otp

## Overview
A high-performance input-otp component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import { CORNERS, FONT_SIZE } from '@/theme/globals';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export interface InputOTPProps
  extends Omit<TextInputProps, 'style' | 'value' | 'onChangeText'> {
  /** Number of OTP digits */
  length?: number;
  /** Current OTP value */
  value?: string;
  /** Called when OTP value changes */
  onChangeText?: (value: string) => void;
  /** Called when OTP is complete */
  onComplete?: (value: string) => void;
  /** Error message to display */
  error?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Container style */
  containerStyle?: ViewStyle;
  /** Individual slot style */
  slotStyle
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { InputOTP } from '@/components/ui/input-otp';
import React, { useState } from 'react';

export function InputOTPDemo() {
  const [otp, setOtp] = useState('');

  return (
    <InputOTP
      length={6}
      value={otp}
      onChangeText={setOtp}
      onComplete={(value) => {
        console.log('OTP Complete:', value);
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
