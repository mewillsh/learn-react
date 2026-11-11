# React + JavaScript Revision Notes

## Imports

```js
import { useState } from "react";
```

- `useState` is a React Hook.
- Used to store and update component state.
- State updates trigger re-rendering.

---

## State

```js
const [color, setColor] = useState("#eea990");
```

- `color` → current state value.
- `setColor()` → updates state.
- Initial value: `#eea990`.

---

## State Update

```js
function colorChanger(currColor) {
  setColor(currColor);
}
```

- State should be updated using setter function.
- Never modify state directly.

❌

```js
color = "blue";
```

✅

```js
setColor("blue");
```

---

## Event Handling

```jsx
onClick={() => colorChanger("blue")}
```

- `onClick` expects a function reference.
- Arrow function delays execution until click.

❌

```jsx
onClick={colorChanger("blue")}
```

(Executes immediately)

✅

```jsx
onClick={() => colorChanger("blue")}
```

---

## JSX

```jsx
return (
  <div>
    <button>Click</button>
  </div>
);
```

- JSX looks like HTML but is JavaScript.
- Must return a single parent element.

---

## Inline Styles

```jsx
style={{ backgroundColor: color }}
```

- `style` receives a JavaScript object.
- CSS properties become camelCase.

Examples:

```jsx
style={{ backgroundColor: "red" }}
style={{ fontSize: "20px" }}
style={{ marginTop: "10px" }}
```

---

## Passing Arguments to Events

```jsx
<button onClick={() => colorChanger("purple")}>
```

- Use arrow function when passing parameters.
- Prevents immediate execution.

---

## Component Function

```js
function App() {
  return <div>Hello</div>;
}
```

- React component is a JavaScript function.
- Component name must start with a capital letter.

✅

```js
function App() {}
```

❌

```js
function app() {}
```

---

## Re-render Flow

```text
Click Button
    ↓
onClick fires
    ↓
setColor()
    ↓
State changes
    ↓
Component re-renders
    ↓
Background color updates
```

---

## Export

```js
export default App;
```

- Makes component available to other files.

Import:

```js
import App from "./App";
```

---

## Quick Reminders

- React uses `className`, not `class`.
- State updates are asynchronous.
- Never mutate state directly.
- Hooks must be called at the top level.
- `onClick` expects a function.
- JSX expressions use `{}`.
- Inline styles use `{{}}`.
- UI updates when state changes.