---
name: expo-share
description: Production-grade Expo Share Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Share

## Overview
A high-performance share component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Button, ButtonVariant } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import { FONT_SIZE } from '@/theme/globals';
import { Share as ShareIcon } from 'lucide-react-native';
import React, { useCallback, useMemo } from 'react';
import {
  Alert,
  Platform,
  Share as RNShare,
  ShareOptions,
  TextStyle,
  View,
} from 'react-native';

export interface ShareContent {
  message?: string;
  url?: string;
  title?: string;
  subject?: string; // For email sharing on iOS
}

export interface ShareButtonOptions {
  dialogTitle?: string; // Android only
  excludedActivityTypes?: string[]; // iOS only
  tintColor?: string; // iOS only
  anchor?: number; // iOS only - for iPad anchoring
}

interface ShareButtonProps {
  content: ShareContent;
  options?: ShareButtonOptions;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disa
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { ShareButton } from '@/components/ui/share';
import React from 'react';

export function ShareDemo() {
  return (
    <ShareButton
      content={{
        message: 'Check out this amazing app!',
        url: 'https://example.com',
        title: 'Amazing App',
      }}
      onShareSuccess={(activityType) => {
        console.log('Shared successfully:', activityType);
      }}
      onShareError={(error) => {
        console.error('Share failed:', error);
      }}
    >
      Share
    </ShareButton>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
