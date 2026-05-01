---
name: expo-onboarding
description: Production-grade Expo Onboarding Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Onboarding

## Overview
A high-performance onboarding component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useColor } from '@/hooks/useColor';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  image?: React.ReactNode;
  icon?: React.ReactNode;
  backgroundColor?: string;
}

export interface OnboardingProps {
  steps: OnboardingStep[];
  onComplete: () => void;
  onSkip?: () => void;
  showSkip?: boolean;
  showProgress?: boolean;
  swipeEnabled?: boolean;
  primaryButtonText?: string;
  skipButtonText?: string;
  nextButtonText
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Onboarding, useOnboarding } from '@/components/ui/onboarding';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';

export const OnboardingPresets = {
  welcome: [
    {
      id: 'welcome',
      title: 'Welcome to Our App',
      description:
        'Discover amazing features and get started with your journey.',
      icon: <Text style={{ fontSize: 80 }}>👋</Text>,
    },
    {
      id: 'features',
      title: 'Powerful Features',
      description:
        'Experience cutting-edge functionality designed to make your life easier.',
      icon: <Text style={{ fontSize: 80 }}>⚡</Text>,
    },
    {
      id: 'personalize',
      title: 'Personalize Your Experience',
      description: 'Customize the app to match your preferences and workflow.',
      icon: <Text style={{ fontSize: 80 }}>🎨</Text>,
    },
    {
      id: 'ready',
      title: "You're All Set!",
      description:
        "Everything is ready
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
