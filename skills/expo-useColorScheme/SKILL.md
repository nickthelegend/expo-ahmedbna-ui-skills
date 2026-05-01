---
name: expo-useColorScheme
description: Production-grade Expo UseColorScheme Hook.
category: Hooks
difficulty: Intermediate
version: "1.0.0"
---

# Expo UseColorScheme

## Overview
A high-performance useColorScheme hook for Expo and React Native applications.

## Implementation

### Code
```tsx

// File: templates/hooks/useColorScheme.ts
export { useColorScheme } from 'react-native';


// File: templates/hooks/useColorScheme.web.ts
import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    return colorScheme;
  }

  return 'light';
}


```



## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review this useColorScheme implementation and suggest optimizations."
