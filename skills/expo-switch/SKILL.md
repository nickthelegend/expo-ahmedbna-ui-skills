---
name: expo-switch
description: Production-grade Expo Switch Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Switch

## Overview
A high-performance switch component for Expo and React Native applications.

## Implementation

### Code
```tsx
import { useColor } from '@/hooks/useColor';
import React from 'react';

import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import {
  Switch as RNSwitch,
  SwitchProps as RNSwitchProps,
  TextStyle,
} from 'react-native';

interface SwitchProps extends RNSwitchProps {
  label?: string;
  error?: string;
  labelStyle?: TextStyle;
}

export function Switch({ label, error, labelStyle, ...props }: SwitchProps) {
  const mutedColor = useColor('muted');
  const primary = useColor('primary');
  const danger = useColor('red');

  return (
    <View style={{ marginBottom: 8 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 32, // Ensure consistent height
        }}
      >
        {label && (
          <Text
            variant='caption'
            numberOfLines={2} // Allow wrapping for longer labels
            ellipsizeMode='tail'
            style={[
              {
                color: error ? danger : primary,
                flex: 1, // Take available space
                marginRight: 12, // Add spacing between label and switch
              },
              labelStyle,
            ]}
            pointerEvents='none'
          >
            {label}
          </Text>
        )}

        <RNSwitch
          trackColor={{ false: mutedColor, true: '#7DD87D' }}
          thumbColor={props.value ? '#ffffff' : '#f4f3f4'}
          {...props}
        />
      </View>

      {error && (
        <Text
          variant='caption'
          numberOfLines={2}
          ellipsizeMode='tail'
          style={[
            {
              fontSize: 12, // Slightly smaller for error text
              color: danger, // Always use danger color for errors
              marginTop: 4, // Add spacing above error text
            },
          ]}
          pointerEvents='none'
        >
          {error}
        </Text>
      )}
    </View>
  );
}

```

## Usage Example
```tsx
import { Switch } from '@/components/ui/switch';
import React, { useState } from 'react';

export function SwitchDemo() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      label='Enable notifications'
      value={isEnabled}
      onValueChange={setIsEnabled}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review this switch implementation and suggest optimizations."
