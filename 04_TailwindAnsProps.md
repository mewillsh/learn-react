# React Props - Quick Revision Notes (Interview POV)

## What are Props?

- Props (Properties) are used to pass data from a Parent Component to a Child Component.
- Props are Read-Only (Immutable).
- Props help make components reusable.

---

## Parent Component

```jsx
<Card name="Harsh" obj={Data} arr={currArr}/>
<Card name="Devansh" obj={Data} arr={currArr}/>
```

### Data Types Passed via Props

```jsx
name="Harsh"        // String
obj={Data}          // Object
arr={currArr}       // Array
```

---

## Child Component

### Receiving Props

```jsx
function Card({ name, obj, arr }) {
    ...
}
```

This is called:

```text
Props Destructuring
```

Equivalent to:

```jsx
function Card(props) {
    props.name
    props.obj
    props.arr
}
```

---

## Accessing Props

### String

```jsx
{name}
```

### Object

```jsx
{obj["Color"]}
```

or

```jsx
{obj.Color}
```

### Array

```jsx
console.log(arr)
```

---

## Data Flow

```text
Parent Component
        ↓
       Props
        ↓
Child Component
```

React follows:

```text
One-Way Data Flow
```

Data moves:

```text
Parent → Child ✅
Child → Parent ❌
```

---

## Reusability

```jsx
<Card name="Harsh" />
<Card name="Devansh" />
```

Same component, different data.

Output changes based on props.

---

## Important JSX Rule

```jsx
class ❌
className ✅
```

In React JSX:

```jsx
<div className="max-w-sm">
```

not

```jsx
<div class="max-w-sm">
```

---

## Interview One-Liners

### Props

> Props are used to pass data from a parent component to a child component.

### Props Destructuring

> Destructuring allows direct access to prop values without using `props.propName`.

### Data Flow

> React follows one-way data binding, where data flows from parent to child via props.

### Reusability

> Props make components dynamic and reusable.

---

# Keywords

- Props
- Parent Component
- Child Component
- One-Way Data Flow
- Props Destructuring
- Reusable Components
- Read-Only Data
- JSX
- className