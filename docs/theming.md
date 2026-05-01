# Theming Guide

Expo UI Skills uses a robust, context-aware theming system.

## 1. Theme Tokens
Colors are defined in `skills/expo-colors/references/colors.ts`. You can customize them to match your brand.

## 2. useColor Hook
Use the `useColor` hook to fetch colors dynamically based on the current color scheme:
```tsx
const primary = useColor('primary');
```

## 3. Dark Mode Support
Every component is built with dark mode in mind. Use the `ModeToggle` component to allow users to switch themes.
