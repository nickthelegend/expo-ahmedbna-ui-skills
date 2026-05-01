---
name: expo-collapsible
description: Production-grade Expo Collapsible Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Collapsible

## Overview
A high-performance collapsible component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { ChevronRight } from 'lucide-react-native';
import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity } from 'react-native';

export function Collapsible({
  children,
  title,
}: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
        }}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Icon
          name={ChevronRight}
          size={18}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <Text variant='subtitle'>{title}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View
          style={{
          
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Collapsible } from '@/components/ui/collapsible';
import { Text } from '@/components/ui/text';
import React from 'react';

export function CollapsibleDemo() {
  return (
    <Collapsible title='What is React Native?'>
      <Text variant='body'>
        React Native is an open-source UI software framework created by Meta. It
        is used to develop applications for Android, iOS, macOS, tvOS, Web,
        Windows and UWP by enabling developers to use React's framework along
        with native platform capabilities.
      </Text>
    </Collapsible>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
