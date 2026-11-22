# useContext Quick Revision Notes

## Why useContext?
- Avoids **prop drilling** (passing props through many components).
- Lets multiple components access shared data directly.

---

## 1. Create Context

```js
import { createContext } from "react";

export const UserContext = createContext({
    themeMode: "light",
    setLight: () => {},
    setDark: () => {}
});
```

### Default Value
Used only when no Provider is found above the component.

---

## 2. Export Provider

```js
export const ThemeProvider = UserContext.Provider;
```

Instead of writing:

```jsx
<UserContext.Provider>
```

you can write:

```jsx
<ThemeProvider>
```

---

## 3. Create Custom Hook

```js
import { useContext } from "react";

export default function useTheme() {
    return useContext(UserContext);
}
```

### Benefit
Instead of:

```js
const data = useContext(UserContext);
```

you can simply write:

```js
const data = useTheme();
```

---

## 4. Provide Data

```jsx
<ThemeProvider value={{ themeMode, setLight, setDark }}>
    <App />
</ThemeProvider>
```

- `value` contains data/functions you want to share.
- Any child component can access them.

---

## 5. Consume Data

```js
const { themeMode, setDark, setLight } = useTheme();
```

No props required.

---

# Flow of Your Application

```text
App
 │
 └── ThemeProvider
      │
      ├── ThemeBtn
      └── Card
```

### App Component

Stores state:

```js
const [themeMode, setThemeMode] = useState("light");
```

Provides:

```js
{
    themeMode,
    setLight,
    setDark
}
```

to all child components.

---

### ThemeBtn Component

Consumes context:

```js
const { themeMode, setDark, setLight } = useTheme();
```

When checked:

```js
setDark();
```

When unchecked:

```js
setLight();
```

This updates state in **App**.

---

### Re-render Cycle

```text
ThemeBtn Click
      ↓
setDark()/setLight()
      ↓
themeMode state changes in App
      ↓
App re-renders
      ↓
New value passed to ThemeProvider
      ↓
All consumers get updated value
      ↓
ThemeBtn/Card re-render
```

---

## useEffect in Your App

```js
useEffect(() => {
    document.querySelector("html")
        .classList.remove("dark", "light");

    document.querySelector("html")
        .classList.add(themeMode);
}, [themeMode]);
```

Runs whenever:

```js
themeMode
```

changes.

Example:

```text
light → dark
```

Adds:

```html
<html class="dark">
```

which Tailwind's `dark:` classes use.

---

## Exam / Interview Point

### Context is NOT State Management

Context:

✅ Shares data

```text
Parent → Any Child
```

State is still stored in:

```js
useState
```

Context only provides access to that state.

---

## One-Line Definition

**useContext lets a component directly read data from the nearest Context Provider without passing props manually through intermediate components.**