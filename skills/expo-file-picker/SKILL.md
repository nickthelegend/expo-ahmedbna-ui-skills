---
name: expo-file-picker
description: Production-grade Expo File-picker Component.
category: Components
difficulty: Intermediate
version: "1.0.0"
---

# Expo File-picker

## Overview
A high-performance file-picker component for Expo and React Native applications.

## Implementation

### Code
Check the [references/](references/) directory for the full source code.

```tsx
import { Button, ButtonVariant } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { CORNERS, FONT_SIZE } from '@/theme/globals';
import * as DocumentPicker from 'expo-document-picker';
import { File, Image, X } from 'lucide-react-native';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export type FileType = 'image' | 'document' | 'all';

export interface SelectedFile {
  uri: string;
  name: string;
  type?: string;
  size?: number;
  mimeType?: string;
}

export interface FilePickerProps {
  // Core functionality
  onFilesSelected: (files: SelectedFile[]) => void;
  onError?: (error: string) => void;

  // Configuration
  fileType?: FileType;
  multiple?: boolean;
  maxFiles?: number;
  maxSizeBytes?: number;
// ... (Code truncated, see references/ for full source)
```

## Usage Example
```tsx
import { FilePicker } from '@/components/ui/file-picker';
import React from 'react';

export function FilePickerDemo() {
  return (
    <FilePicker
      onFilesSelected={(files) => console.log('Selected files:', files)}
      onError={(error) => console.error('Error:', error)}
      fileType='all'
      multiple={true}
      maxFiles={5}
      placeholder='Select your files'
      showFileInfo={true}
    />
  );
}

```


## Best Practices
- Ensure proper accessibility.
- Use context-based state management where appropriate.

## AI Agent Prompt
> "Act as a Senior Expo Developer. Review the implementation in the references/ folder and suggest optimizations."
