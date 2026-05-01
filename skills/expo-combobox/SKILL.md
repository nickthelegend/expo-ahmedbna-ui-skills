---
name: expo-combobox
description: Production-grade Expo Combobox Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Combobox

## Overview
A high-performance combobox component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS, FONT_SIZE, HEIGHT } from '@/theme/globals';
import { ChevronDown } from 'lucide-react-native';
import React, {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

// --- 1. DEFINE A SHARED OPTION TYPE ---
export interface OptionType {
  value: string;
  label: string;
}

// Helper to extract a simple string label from children
const getLabelFromChildren = (children: ReactNode): string => {
  let label = '';
  React.Children.forEach(children, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      label += child;
    }
  });
  return label;
};

interface ComboboxContextType {
  is
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
  OptionType,
} from '@/components/ui/combobox';
import React, { useState } from 'react';

const frameworks: OptionType[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'next', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
];

export function ComboboxDemo() {
  const [value, setValue] = useState<OptionType | null>(null);

  return (
    <Combobox value={value} onValueChange={setValue}>
      <ComboboxTrigger>
        <ComboboxValue placeholder='Select framework...' />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder='Search frameworks...' />
        <ComboboxList>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          {frameworks.
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
