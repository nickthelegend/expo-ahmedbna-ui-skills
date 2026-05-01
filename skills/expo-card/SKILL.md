---
name: expo-card
description: Production-grade Expo Card Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Card

## Overview
A high-performance card component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS } from '@/theme/globals';
import { TextStyle, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function Card({ children, style }: CardProps) {
  const cardColor = useColor('card');
  const foregroundColor = useColor('foreground');

  return (
    <View
      style={[
        {
          width: '100%',
          backgroundColor: cardColor,
          borderRadius: BORDER_RADIUS,
          padding: 18,
          shadowColor: foregroundColor,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 3,
          elevation: 2,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  style?: ViewStyle;
}


// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import React from 'react';

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a description of the card content. It provides additional
          context about what this card contains.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          This is the main content area of the card. You can put any content
          here including text, images, forms, or other components.
        </Text>
      </CardContent>
      <CardFooter>
        <Button variant='outline'>Cancel</Button>
        <Button style={{ flex: 1 }}>Confirm</Button>
      </CardFooter>
    </Card>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
