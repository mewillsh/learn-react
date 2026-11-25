# Redux Toolkit (RTK) Quick Revision Notes

## What is Redux?

Redux is a state management library.

It provides a **single source of truth** called the **Store**, where global application state is stored.

Instead of passing props through many components (prop drilling), Redux allows components to access shared state directly from the store.

---

## Redux Ecosystem

### Redux
Core library that manages state.

### React Redux
Provides the connection between React and Redux.

Important hooks:

- `useSelector()` → Read data from store.
- `useDispatch()` → Dispatch actions to update store.

### Redux Toolkit (RTK)
Official and recommended way to write Redux code.

Benefits:

- Less boilerplate
- Automatically configures store
- Includes Immer (allows mutation-like syntax)
- Generates action creators automatically

---

## Important Concepts

### Store

Single place where application state is stored.

```js
const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});
```

State structure:

```js
{
    todos: {
        todos: [...]
    }
}
```

---

### Slice

A slice contains:

1. Name
2. Initial State
3. Reducers

```js
createSlice({
    name: 'todo',
    initialState,
    reducers: {}
})
```

---

### Initial State

```js
const initialState = {
    todos: [
        {
            id: 1,
            title: "Complete your homework!",
            complete: false
        }
    ]
}
```

---

## Reducers

Reducers define how state changes.

They receive:

```js
(state, action)
```

### Parameters

#### state

Current state stored in Redux.

```js
addTodo(state, action)
```

#### action

Contains data sent during dispatch.

```js
action.payload
```

Example:

```js
dispatch(addTodo({
    title: "Learn Redux",
    complete: false
}))
```

Reducer receives:

```js
action.payload = {
    title: "Learn Redux",
    complete: false
}
```

---

## Why Mutation Works?

Normally Redux requires immutable updates.

❌ Traditional Redux

```js
state.todos.push(todo)
```

✅ Redux Toolkit

```js
state.todos.push(todo)
```

Works because RTK uses **Immer** internally.

Immer converts mutation-like code into immutable updates.

---

## Common Reducers

### Add Todo

```js
addTodo: (state, action) => {
    state.todos.push({
        id: nanoid(),
        title: action.payload.title,
        complete: action.payload.complete
    });
}
```

---

### Remove Todo

```js
removeTodo: (state, action) => {
    state.todos = state.todos.filter(
        todo => todo.id !== action.payload
    );
}
```

Payload:

```js
dispatch(removeTodo(id))
```

---

### Update Todo

```js
updateTodo: (state, action) => {
    state.todos = state.todos.map(todo =>
        todo.id === action.payload.id
            ? { ...todo, ...action.payload }
            : todo
    );
}
```

Payload:

```js
dispatch(updateTodo({
    id: 1,
    title: "Updated Todo"
}));
```

---

### Toggle Todo

```js
toggleTodo: (state, action) => {
    state.todos = state.todos.map(todo =>
        todo.id === action.payload
            ? {
                ...todo,
                complete: !todo.complete
            }
            : todo
    );
}
```

Payload:

```js
dispatch(toggleTodo(id))
```

---

## Actions

Generated automatically by Redux Toolkit.

```js
export const {
    addTodo,
    removeTodo,
    updateTodo,
    toggleTodo
} = todoSlice.actions;
```

Usage:

```js
dispatch(addTodo(data));
dispatch(removeTodo(id));
```

---

## useDispatch()

Used to send actions to Redux store.

```js
const dispatch = useDispatch();
```

Example:

```js
dispatch(addTodo({
    title: input,
    complete: false
}));
```

### Simple Definition

> useDispatch reducer ko invoke karke store ke state me changes karwata hai.

---

## useSelector()

Used to read data from store.

```js
const todos = useSelector(
    state => state.todos.todos
);
```

Receives current store state.

```js
state => state.todos.todos
```

Store:

```js
{
    todos: {
        todos: [...]
    }
}
```

First `todos` → reducer key

Second `todos` → array in state

---

## Provider

Makes Redux store available to all React components.

```js
<Provider store={store}>
    <App />
</Provider>
```

Without Provider:

```text
could not find react-redux context value
```

Error occurs because React components cannot access the Redux store.

---

## Typical Redux Flow

```text
User Action
     ↓
dispatch(action)
     ↓
Reducer executes
     ↓
Store updates
     ↓
useSelector gets latest state
     ↓
Component re-renders
```

---

## Interview Questions

### Why Redux Toolkit over Redux?

- Less boilerplate
- Easier syntax
- Built-in Immer
- Auto-generated actions
- Better developer experience

---

### Difference Between useSelector and useDispatch?

| useSelector | useDispatch |
|------------|------------|
| Reads data from store | Updates data in store |
| Subscribes component to state changes | Sends actions |
| Returns state | Returns dispatch function |

---

### What does createSlice do?

Creates:

- Reducers
- Actions
- Slice name

all in one place.

---

### Why configureStore?

- Creates store
- Adds Redux DevTools
- Configures middleware automatically

---

### What is action.payload?

Data sent while dispatching action.

```js
dispatch(addTodo({
    title: "Learn Redux"
}))
```

Reducer receives:

```js
action.payload.title
```

---

## One-Line Revision

Store = Global State

Slice = Part of Store

Reducer = Updates State

Action = Information sent to Reducer

Dispatch = Sends Action

useDispatch = Dispatch Actions

useSelector = Read Store State

Provider = Gives Store Access

Redux Toolkit = Simplified Redux + Immer