# Password Generator - React Quick Revision

## State Management (`useState`)

```js
const [passLen, setPassLen] = useState(12)
const [isNumber, setNumber] = useState(false)
const [isSymbol, setSymbol] = useState(false)
const [password, setPassword] = useState("")
```

- Stores component data.
- Updating state triggers a re-render.
- Used for password length, options, and generated password.

---

## Function Memoization (`useCallback`)

```js
const passwordGenerator = useCallback(() => {
  ...
}, [passLen, isNumber, isSymbol])
```

- Memoizes a function.
- Function is recreated only when dependencies change.
- Useful when passing functions to hooks/components.

**Dependencies:**

```js
[passLen, isNumber, isSymbol]
```

---

## Side Effects (`useEffect`)

```js
useEffect(passwordGenerator, [passLen, isNumber, isSymbol])
```

- Runs after render.
- Regenerates password whenever length, numbers, or symbols change.
- Dependency array controls when effect runs.

---

## DOM Access (`useRef`)

```js
const passwordRef = useRef(null)
```

- Stores reference to a DOM element.
- Changing `.current` does not trigger re-render.

Attach:

```jsx
ref={passwordRef}
```

Access:

```js
passwordRef.current
```

Example:

```js
passwordRef.current.select()
```

Selects the generated password text.

---

## Previous State Pattern

```js
setNumber(prev => !prev)
setSymbol(prev => !prev)
```

- React automatically provides `prev`.
- Safest way to update state based on previous value.

---

## Password Logic

```js
Math.random()
```

- Generates random decimal between 0 and 1.

```js
Math.floor(Math.random() * passSet.length)
```

- Generates a valid random index from the character set.

```js
pass += passSet.charAt(index)
```

- Appends a random character to the password.

---

## Controlled Components

```jsx
value={passLen}
onChange={(e) => setPassLen(Number(e.target.value))}
```

- React state controls the input value.
- UI and state stay synchronized.

---

## JSX Reminders

```jsx
className=""
```

✅ React

```html
class=""
```

❌ HTML only

---

```jsx
readOnly
```

✅ React

```html
readonly
```

❌ HTML only

---

```jsx
htmlFor="numbers"
```

✅ React label binding

```html
for="numbers"
```

❌ HTML only

---

## Interview One-Liners

- `useState` → Stores state and triggers re-render.
- `useEffect` → Runs side effects after render.
- `useCallback` → Memoizes functions.
- `useRef` → Access DOM or persist mutable values without re-render.
- `prev => !prev` → Updates state using previous value safely.
- Controlled component → Input value comes from React state.