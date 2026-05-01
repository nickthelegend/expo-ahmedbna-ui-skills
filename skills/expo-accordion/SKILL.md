---
name: expo-accordion
description: Production-grade Expo Accordion Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Accordion

## Overview
A high-performance accordion component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { ChevronRight } from 'lucide-react-native';
import React, { createContext, useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';

// Context for accordion state
interface AccordionContextType {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

// Main Accordion component
interface AccordionProps {
  type: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
}

export function Accordion({
  type,
  collapsible = false,
  defaultValue,
  value: controlledValue,
  onValueChange,

// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';
import React from 'react';

export function AccordionDemo() {
  return (
    <Accordion type='single' collapsible defaultValue='item-1'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <Accor
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
