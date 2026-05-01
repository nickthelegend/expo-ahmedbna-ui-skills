---
name: expo-tabs
description: Production-grade Expo Tabs Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Tabs

## Overview
A high-performance tabs component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS, FONT_SIZE, HEIGHT } from '@/theme/globals';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Dimensions,
  ScrollView,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const { width: screenWidth } = Dimensions.get('window');

// Types
interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  orientation: 'horizontal' | 'vertical';
  tabValues: string[];
  registerTab: (value: string) => void;
  unregisterTab: (value: string) => void;
  enableSwipe?: b
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import React from 'react';

export function TabsDemo() {
  return (
    <Tabs defaultValue='account' style={{ width: 400 }}>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='followers'>Followers</TabsTrigger>
        <TabsTrigger value='following'>Following</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
        <TabsTrigger value='more'>More</TabsTrigger>
      </TabsList>

      <TabsContent value='account'>
        <View style={{ paddingHorizontal: 16 }}>
          <Text variant='title' style={{ marginBottom: 8 }}>
            Account Settings
          </Text>
          <Text variant='body'>
            Manage your account information and preferences 
// ... (Code truncated, see references/ for full source)
```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
