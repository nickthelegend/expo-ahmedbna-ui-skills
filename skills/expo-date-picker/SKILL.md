---
name: expo-date-picker
description: Production-grade Expo Date-picker Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo Date-picker

## Overview
A high-performance date-picker component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { BottomSheet, useBottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { BORDER_RADIUS, CORNERS, FONT_SIZE, HEIGHT } from '@/theme/globals';
import {
  Calendar,
  CalendarClock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  CalendarRange,
  ArrowRight,
} from 'lucide-react-native';
import { useCallback, useMemo, useState } from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

// Conditional typing based on mode
interface BaseDatePickerProps {
  label?: string;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  style?: View
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { DatePicker } from '@/components/ui/date-picker';
import React, { useState } from 'react';

export function DatePickerDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <DatePicker
      label='Select Date'
      value={selectedDate}
      onChange={setSelectedDate}
      placeholder='Choose a date'
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
