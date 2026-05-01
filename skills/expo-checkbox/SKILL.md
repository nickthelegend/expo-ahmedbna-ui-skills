---
name: expo-checkbox
description: Production-grade Expo Checkbox Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Checkbox

## Overview
A high-performance checkbox component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import { Check } from 'lucide-react-native';
import React from 'react';
import { TextStyle, TouchableOpacity } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  label?: string;
  error?: string;
  disabled?: boolean;
  labelStyle?: TextStyle;
  onCheckedChange: (checked: boolean) => void;
}

export function Checkbox({
  checked,
  error,
  disabled = false,
  label,
  labelStyle,
  onCheckedChange,
}: CheckboxProps) {
  const primary = useColor('primary');
  const primaryForegroundColor = useColor('primaryForeground');
  const danger = useColor('red');
  const borderColor = useColor('border');

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        opacity: disabled ? 0.5 : 1,
        paddi
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Checkbox } from '@/components/ui/checkbox';
import React, { useState } from 'react';

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label='Accept terms and conditions'
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
