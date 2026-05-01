---
name: expo-useKeyboardHeight
description: Production-grade Expo UseKeyboardHeight Hook.
category: Hooks
difficulty: Intermediate
version: "1.0.0"
---

# Expo UseKeyboardHeight

## Overview
A high-performance useKeyboardHeight hook for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx

// File: templates/hooks/useKeyboardHeight.ts
import { useState, useEffect, useRef } from 'react';
import {
  Keyboard,
  Platform,
  Dimensions,
  KeyboardEvent,
  EmitterSubscription,
} from 'react-native';

interface UseKeyboardHeightReturn {
  keyboardHeight: number;
  isKeyboardVisible: boolean;
  keyboardAnimationDuration: number;
}

export const useKeyboardHeight = (): UseKeyboardHeightReturn => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);
  const [keyboardAnimationDuration, setKeyboardAnimationDuration] =
    useState<number>(0);

  // Store previous height to handle edge cases
  const previousHeightRef = useRef<number>(0);

  useEffect(() => {
    let showSubscription: EmitterSubscription;
    let hideSubscription: EmitterSubscription;

    // Determine which events to listen to based on platform
    const showEvent =
      Platform.OS === 'ios' 
// ... (Code truncated, see references/ for full source)
```



## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
