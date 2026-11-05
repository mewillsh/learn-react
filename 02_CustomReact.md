# Custom React Renderer - Revision Notes

## Goal

Understand how React works internally by manually converting a JavaScript object into a real DOM element.

Instead of React doing:

```jsx
<a href="https://google.com">
  Click Me
</a>
```

we build the DOM manually using JavaScript.

---

# HTML Setup

```html
<div id="root"></div>
```

### Why?

- Acts as the mounting point.
- Similar to React's root container.

```js
createRoot(document.getElementById("root"))
```

In our custom implementation:

```js
let rootTag = document.querySelector("#root")
```

---

# React Element Object

```js
let reactElement = {
  tag: "a",
  childern: "This is Custom tag",
  prop: {
    href: "https://www.google.com",
    id: "anchor"
  }
}
```

### Why?

- Simulates what React creates internally.
- Stores everything needed to build a DOM element.

Contains:

| Property | Purpose |
|-----------|----------|
| tag | Which HTML element to create |
| childern | Text inside element |
| prop | Attributes of element |

Example:

```js
{
  tag: "a",
  childern: "Click Me",
  prop: {
    href: "https://google.com"
  }
}
```

Represents:

```html
<a href="https://google.com">
  Click Me
</a>
```

---

# Custom Render Function

```js
function addElement(reactElement, rootTag) {

}
```

### Why?

- Mimics ReactDOM's render method.
- Converts a JavaScript object into an actual DOM node.

Comparable to:

```js
ReactDOM.createRoot(root).render(<App />)
```

---

# Creating DOM Element

```js
let element = document.createElement(
  reactElement["tag"]
)
```

### Why?

Reads:

```js
reactElement.tag
```

which is:

```js
"a"
```

and creates:

```html
<a></a>
```

---

# Adding Content

```js
element.innerHTML = reactElement["childern"]
```

### Why?

Reads:

```js
"This is Custom tag"
```

and inserts it inside:

```html
<a>This is Custom tag</a>
```

---

# Looping Through Props

```js
for (let key in reactElement["prop"]) {

}
```

### Why?

Dynamically applies all attributes.

Object:

```js
{
  href: "https://www.google.com",
  id: "anchor"
}
```

Loop visits:

```js
href
id
```

one by one.

---

# Setting Attributes

```js
element.setAttribute(
  key,
  reactElement["prop"][key]
)
```

### Why?

Converts object properties into HTML attributes.

Example:

```js
element.setAttribute(
  "href",
  "https://www.google.com"
)
```

Creates:

```html
<a href="https://www.google.com">
```

Then:

```js
element.setAttribute(
  "id",
  "anchor"
)
```

Creates:

```html
<a href="https://www.google.com" id="anchor">
```

---

# Appending To DOM

```js
rootTag.appendChild(element)
```

### Why?

Adds the created element inside:

```html
<div id="root"></div>
```

Result:

```html
<div id="root">
  <a href="https://www.google.com" id="anchor">
    This is Custom tag
  </a>
</div>
```

---

# Execution Flow

```js
addElement(reactElement, rootTag)
```

### What Happens?

```text
reactElement Object
        ↓
document.createElement()
        ↓
Create <a>
        ↓
Add text content
        ↓
Add attributes
        ↓
appendChild()
        ↓
Browser DOM
```

---

# Relation With Real React

Your Object:

```js
{
  tag: "a",
  childern: "Click Me",
  prop: {
    href: "https://google.com"
  }
}
```

React Equivalent:

```jsx
<a href="https://google.com">
  Click Me
</a>
```

---

# How React Actually Works

JSX:

```jsx
<a href="https://google.com">
  Click Me
</a>
```

gets converted into:

```js
React.createElement(
  "a",
  {
    href: "https://google.com"
  },
  "Click Me"
)
```

which creates a React Element Object:

```js
{
  type: "a",
  props: {
    href: "https://google.com",
    children: "Click Me"
  }
}
```

React then renders it into the DOM.

---

# Mistakes In Current Code

## Typo

Current:

```js
childern
```

Recommended:

```js
children
```

---

## Unnecessary Check

Current:

```js
if(key === "childern") continue;
```

### Why unnecessary?

Because:

```js
childern
```

is not inside:

```js
prop
```

object.

So this check never becomes true.

---

## Incorrect href Value

Current:

```js
href:"<a href='https://www.google.com'>"
```

Wrong because href should contain only URL.

Correct:

```js
href:"https://www.google.com"
```

---

# Mental Model

```text
JSX
 ↓
React.createElement()
 ↓
React Element Object
 ↓
ReactDOM Renderer
 ↓
DOM Element Creation
 ↓
Browser UI
```

Your `addElement()` function is a simplified version of the last two steps performed manually.

---

# One-Line Summary

**This code teaches the core React idea: a UI can be represented as a JavaScript object, and a renderer converts that object into real DOM elements displayed in the browser.**