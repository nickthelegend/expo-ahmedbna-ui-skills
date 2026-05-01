# Expo UI Skills Cheat Sheet

## Installation
```bash
npx skills add nickthelegend/expo-ahmedbna-ui-skills
```

## Quick Reference

| Component | Usage |
| :--- | :--- |
| **Button** | `<Button onPress={...}>Label</Button>` |
| **Input** | `<Input placeholder="..." icon={Mail} />` |
| **Card** | `<Card><CardHeader>...</CardHeader></Card>` |
| **LineChart** | `<LineChart data={[...]} />` |

## Theme Hooks
- `useColor(token)`: Fetch a theme color.
- `useColorScheme()`: Detect light/dark mode.
- `useModeToggle()`: Toggle between light/dark.

## Pro Tips
- Use `variant="destructive"` for delete buttons.
- Most components support an `icon` prop using Lucide icons.
- Check `EXAMPLES/` for full-page templates.
