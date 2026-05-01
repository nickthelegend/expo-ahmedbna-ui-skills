---
name: expo-icon
description: Production-grade Expo Icon Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Icon

## Overview
A high-performance icon component for Expo and React Native applications.

## Implementation

### Code
```tsx
import { useColor } from '@/hooks/useColor';
import { LucideProps } from 'lucide-react-native';
import React from 'react';

export type Props = LucideProps & {
  lightColor?: string;
  darkColor?: string;
  name: React.ComponentType<LucideProps>;
};

export function Icon({
  lightColor,
  darkColor,
  name: IconComponent,
  color,
  size = 24,
  strokeWidth = 1.8,
  ...rest
}: Props) {
  const themedColor = useColor('icon', { light: lightColor, dark: darkColor });

  // Use provided color prop if available, otherwise use themed color
  const iconColor = color || themedColor;

  return (
    <IconComponent
      color={iconColor}
      size={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      {...rest}
    />
  );
}

```

## Usage Example
```tsx
import { Icon } from '@/components/ui/icon';
import { Heart } from 'lucide-react-native';
import React from 'react';

export function IconDemo() {
  return <Icon name={Heart} size={24} />;
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review this icon implementation and suggest optimizations."
