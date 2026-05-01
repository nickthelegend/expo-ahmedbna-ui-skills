---
name: expo-link
description: Production-grade Expo Link Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Link

## Overview
A high-performance link component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { Link as ERLink, Href, useRouter } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Linking, Platform } from 'react-native';

type Props = Omit<ComponentProps<typeof ERLink>, 'href'> & {
  href: Href;
  asChild?: boolean;
  browser?: 'in-app' | 'external';
  children: React.ReactNode;
};

// Helper function to determine if URL is external
const isExternalUrl = (href: Href): boolean => {
  // If href is an object, it's always internal navigation
  if (typeof href === 'object') {
    return false;
  }

  // Check if string href is external
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('sms:') ||
    href.startsWith('whatsapp:') ||
    href.startsWith('ftp://') ||
    href.startsWith('file://')
  );
};

// Help
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Link } from '@/components/ui/link';
import { View } from '@/components/ui/view';
import React from 'react';

export function LinkDemo() {
  return (
    <View style={{ gap: 12 }}>
      <Link href='/'>Go to Profile</Link>
      <Link href='/'>Settings</Link>
      <Link href={{ pathname: '/', params: { id: '123' } }}>User Details</Link>
    </View>
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
