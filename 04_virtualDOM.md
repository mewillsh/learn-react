# React Rendering Process (Interview Revision)

## createRoot()

```jsx
createRoot(document.getElementById("root")).render(<App />);
```

- `createRoot()` creates React's root container.
- React builds a **Virtual DOM tree** (JavaScript object representation of UI).
- React does **not directly manipulate the Browser DOM** on every update.

---

## Virtual DOM

- Lightweight JavaScript copy of the Real DOM.
- Created whenever a component renders.
- React compares old Virtual DOM with new Virtual DOM after state/props change.

### Why?

- Real DOM operations are expensive.
- Virtual DOM comparison is much faster.

---

## Reconciliation

- Process of comparing:
  - Previous Virtual DOM
  - New Virtual DOM

```text
Old Virtual DOM
        ↓
State Change
        ↓
New Virtual DOM
        ↓
Comparison
```

- React identifies exactly what changed.
- Only changed nodes are marked for update.

---

## Fiber

- React's reconciliation engine (introduced in React 16).
- Responsible for:
  - Reconciliation
  - Scheduling updates
  - Prioritizing tasks
  - Interruptible rendering

### Interview One-Liner

> Fiber is the internal React algorithm that efficiently performs reconciliation and prioritizes UI updates.

---

## DOM Update Flow

```text
State Change
      ↓
New Virtual DOM Created
      ↓
Fiber Reconciliation
      ↓
Differences Identified
      ↓
Only Changed Elements Updated
      ↓
Real DOM Updated
```

---

## Browser Reload vs React Update

### Browser Page Reload

```text
Entire HTML
Entire CSS
Entire JS
Entire DOM
Reloaded Again
```

- Full page refresh.
- Everything is recreated.

### React Update

```text
State Changes
      ↓
Virtual DOM Compare
      ↓
Only Changed Node Updated
```

Example:

```jsx
<h1>{count}</h1>
```

If `count` changes from:

```text
15 → 16
```

React updates only:

```html
<h1>15</h1>
```

to

```html
<h1>16</h1>
```

instead of rebuilding the entire page.

---

## Interview Keywords

- `createRoot()` → Creates React Root.
- Virtual DOM → JS representation of UI.
- Reconciliation → Diffing old vs new Virtual DOM.
- Fiber → React's reconciliation & scheduling engine.
- State Change → Triggers re-render.
- React updates only changed parts of Real DOM.
- Browser Reload ≠ React Re-render.