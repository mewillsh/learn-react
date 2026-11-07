# React `useState` Hook - Quick Revision

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [counter, setCounter] = useState(15);
```

- `counter` → current state value
- `setCounter()` → updates state
- `15` → initial state value

---

## Rules

- Never update state directly:

```jsx
counter = counter + 1 ❌
```

- Always use setter function:

```jsx
setCounter(counter + 1) ✅
```

- State update triggers component re-render.

---

## Event Handling

```jsx
<button onClick={addValue}>PLUS</button>
<button onClick={removeValue}>MINUS</button>
```

- `onClick` executes function on button click.
- Do not use `addValue()` directly inside JSX.

---

## Counter Logic

### Increment

```jsx
setCounter(counter + 1);
```

### Decrement

```jsx
setCounter(counter - 1);
```

### Upper Limit

```jsx
if (counter >= 20) {
  setCounter(20);
}
```

### Lower Limit

```jsx
if (counter <= 0) {
  setCounter(0);
}
```

---

## Output

```jsx
<h1>Total Click are {counter}</h1>
```

- JSX displays latest state value.
- UI updates automatically after state change.

---

## Interview Revision

- `useState` is a React Hook used to manage component state.
- Returns an array: `[state, setterFunction]`.
- State changes cause re-rendering.
- Setter function should be used to update state.
- Hooks can only be used inside React function components or custom hooks.