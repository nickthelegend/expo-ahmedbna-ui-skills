---
name: expo-searchbar
description: Production-grade Expo Searchbar Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Searchbar

## Overview
A high-performance searchbar component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { CORNERS, FONT_SIZE, HEIGHT } from '@/theme/globals';
import { Search, X } from 'lucide-react-native';
import React, { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface SearchBarProps extends Omit<TextInputProps, 'style'> {
  loading?: boolean;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
  debounceMs?: number;
}

export function SearchBar({
  loading = false,
  onSearch,
  onClear,
  showClearButton = true,
  leftIcon,
  rightIcon,
  containerS
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { SearchBar } from '@/components/ui/searchbar';
import React, { useState } from 'react';

export function SearchBarDemo() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <SearchBar
      placeholder='Search for anything...'
      value={searchQuery}
      onChangeText={setSearchQuery}
      onSearch={handleSearch}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
