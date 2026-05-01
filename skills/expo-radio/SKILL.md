---
name: expo-radio
description: Production-grade Expo Radio Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Radio

## Overview
A high-performance radio component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS, FONT_SIZE } from '@/theme/globals';
import React from 'react';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  style?: ViewStyle;
  optionStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

interface RadioButtonProps {
  option: RadioOption;
  selected: boolean;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export function RadioButton({
  option,
  selected,
  onPress,
  disabled = false,
  style,
  labelStyle,
}: RadioButtonProps) {
  const primaryColor = useColor('primary');
  const
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { RadioGroup } from '@/components/ui/radio';
import React, { useState } from 'react';

export function RadioDemo() {
  const [value, setValue] = useState('option1');

  return (
    <RadioGroup
      options={[
        { label: 'Default', value: 'option1' },
        { label: 'Comfortable', value: 'option2' },
        { label: 'Compact', value: 'option3' },
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
