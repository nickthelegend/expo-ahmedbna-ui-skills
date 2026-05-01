---
name: expo-picker
description: Production-grade Expo Picker Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Picker

## Overview
A high-performance picker component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Icon } from '@/components/ui/icon';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS, FONT_SIZE, HEIGHT } from '@/theme/globals';
import { ChevronDown, LucideProps } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  TextInput,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface PickerOption {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

export interface PickerSection {
  title?: string;
  options: PickerOption[];
}

interface PickerProps {
  options?: PickerOption[];
  sections?: PickerSection[];
  value?: string;
  placeholder?: string;
  error?: string;
  variant?: 'outline' | 'filled' | 'group';
  onValueChange?: (value: string) => void;
  di
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Picker } from '@/components/ui/picker';
import React, { useState } from 'react';

export function PickerDemo() {
  const [value, setValue] = useState<string>('');

  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grape', value: 'grape' },
  ];

  return (
    <Picker
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder='Select a fruit...'
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
