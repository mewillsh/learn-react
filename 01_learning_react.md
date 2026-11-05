# React Quick Revision Notes

## 1. Creating a Functional Component

```jsx
function App() {
  return (
    <h1>Hello World</h1>
  )
}
```

### Why?
- Components are reusable UI building blocks.
- A React component is just a JavaScript function.
- Component names must start with a **Capital Letter**.

---

## 2. JSX Expression

```jsx
function App() {
  let name = "Harsh";

  return (
    <h1>Hello {name}</h1>
  );
}
```

### Why?
- Curly braces `{}` allow JavaScript values inside JSX.
- Only **expressions** can be written inside `{}`.
- This is called an **Evaluated Expression**.

✅ Allowed:

```jsx
{name}
{10 + 20}
{isLoggedIn ? "Yes" : "No"}
```

❌ Not Allowed:

```jsx
{if(true){}}
{for(...){}}
```

---

## 3. Returning Multiple Elements

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
)
```

### Why?
- JSX can return only **one parent element**.
- Fragment (`<> </>`) acts as an invisible wrapper.
- Prevents adding unnecessary `<div>` tags.

---

## 4. Creating and Importing Components

### Chai.jsx

```jsx
function Chai() {
  return (
    <h1>This Text is coming from Chai Component</h1>
  )
}

export default Chai;
```

### App.jsx

```jsx
import Chai from "./chai";

function App() {
  return (
    <>
      <Chai />
    </>
  )
}
```

### Why?
- Components are split into separate files for better organization.
- `export default` makes component available outside the file.
- `import` brings component into another file.
- `<Chai />` executes the `Chai()` function and renders its JSX.

---

## 5. Rendering React App

```jsx
createRoot(document.getElementById("root")).render(
  <App />
);
```

### Why?
- `createRoot()` creates React's root container.
- `.render()` displays the component in the browser.
- React takes control of the element having id `"root"`.

---

## 6. StrictMode

```jsx
<StrictMode>
  <App />
</StrictMode>
```

### Why?
- Used during development.
- Detects potential problems and warnings.
- Helps write safer React code.
- Does not affect production build.

---

## 7. Local Component

```jsx
function Localcomponent() {
  return (
    <p>This is Getting called from Local Component</p>
  );
}
```

Usage:

```jsx
<Localcomponent />
```

### Why?
- Demonstrates that components are simply functions.
- Can be declared and used in the same file.

---

## 8. JSX Stored Inside Variable

```jsx
let AnotherComponent = (
  <a href="google.com" target="_blank">
    Click here to go google
  </a>
);
```

Usage:

```jsx
{AnotherComponent}
```

### Why?
- JSX ultimately becomes a JavaScript object.
- JSX can be stored in variables and rendered later.

---

## 9. React.createElement()

```jsx
let reactComponent = React.createElement(
  "a",
  {
    href: "www.google.com",
    id: "componentR"
  },
  "Click Parsed React Component"
);
```

Usage:

```jsx
{reactComponent}
```

### Why?
- This is what JSX gets converted into behind the scenes.
- JSX is syntactic sugar over `React.createElement()`.

JSX:

```jsx
<a href="www.google.com">
  Click Me
</a>
```

Equivalent:

```jsx
React.createElement(
  "a",
  { href: "www.google.com" },
  "Click Me"
);
```

---

## 10. Rendering Multiple Components

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {AnotherComponent}
    <Localcomponent />
    {reactComponent}
  </StrictMode>
);
```

### Why?
- React can render multiple React elements under one parent.
- Demonstrates different ways React elements can be rendered:
  - Component → `<App />`
  - JSX Variable → `{AnotherComponent}`
  - Local Component → `<Localcomponent />`
  - React Element Object → `{reactComponent}`

---

# Important Interview Points

### Component Naming

✅ Correct

```jsx
function Chai() {}
```

❌ Wrong

```jsx
function chai() {}
```

Reason:
- React treats lowercase tags as HTML tags.
- Uppercase names are treated as React Components.

---

### JSX Rules

1. Return only one parent element.
2. Use Fragment if multiple elements are needed.
3. JavaScript expressions go inside `{}`.
4. Component names start with a Capital Letter.
5. JSX is converted into `React.createElement()`.

---

# Mental Model

```text
Component Function
       ↓
Returns JSX
       ↓
JSX → React.createElement()
       ↓
React Element Object
       ↓
ReactDOM.render()
       ↓
Browser UI
```