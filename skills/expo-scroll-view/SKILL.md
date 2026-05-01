---
name: expo-scroll-view
description: Production-grade Expo Scroll-view Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Scroll-view

## Overview
A high-performance scroll-view component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { forwardRef } from 'react';
import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native';

export const ScrollView = forwardRef<RNScrollView, ScrollViewProps>(
  ({ style, ...otherProps }, ref) => {
    return (
      <RNScrollView
        ref={ref}
        style={[{ backgroundColor: 'transparent' }, style]}
        {...otherProps}
      />
    );
  }
);

```

## Usage Example
```tsx
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import React from 'react';

export function ScrollViewDemo() {
  const card = useColor('card');

  return (
    <View
      style={{
        height: 200,
        borderWidth: 1,
        borderColor: card,
        borderRadius: BORDER_RADIUS,
      }}
    >
      <ScrollView style={{ padding: 16 }}>
        {Array.from({ length: 20 }, (_, i) => (
          <Text
            key={i}
            style={{
              marginBottom: 8,
              padding: 12,
              backgroundColor: card,
              borderRadius: 6,
            }}
          >
            Scrollable item {i + 1}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
