# React Todo App - Quick Revision Notes

## 1. Project Flow

```text
TodoForm
   ↓
addTodo()
   ↓
setTodos()
   ↓
todos state updated
   ↓
useEffect()
   ↓
localStorage updated
   ↓
Page Refresh
   ↓
todos loaded from localStorage
```

---

# 2. Context API Setup

## Create Context

```js
export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
})
```

### Purpose

- Creates global state container.
- Provides default values.
- Prevents undefined errors.

---

## Custom Hook

```js
export const useTodo = () => {
    return useContext(TodoContext)
}
```

### Usage

```js
const { addTodo } = useTodo()
```

### Common Mistake

❌

```js
const { addTodo } = useTodo
```

✅

```js
const { addTodo } = useTodo()
```

---

## Provider

```js
export const TodoProvider = TodoContext.Provider
```

Usage:

```jsx
<TodoProvider value={{todos,addTodo}}>
    <App />
</TodoProvider>
```

---

# 3. useState

## Todos State

```js
const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || []
});
```

### Why Function?

This is called **Lazy Initialization**.

✅ Runs only once

✅ Loads todos before first render

✅ Avoids extra renders

---

# 4. Local Storage Persistence

## Load Data

```js
const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || []
})
```

## Save Data

```js
useEffect(() => {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    )
}, [todos])
```

### Conversion

JS Object → String

```js
JSON.stringify(todos)
```

String → JS Object

```js
JSON.parse(data)
```

---

# 5. Add Todo

```js
const addTodo = (todo) => {
    setTodos((prev) => [
        {
            id: Date.now(),
            ...todo
        },
        ...prev
    ])
}
```

### Example

Input:

```js
{
    title: "Learn React",
    done: false
}
```

Output:

```js
{
    id: 123456,
    title: "Learn React",
    done: false
}
```

### Spread Operator

```js
...todo
```

Copies all properties.

---

# 6. Update Todo

```js
const updateTodo = (todo,id) => {
    setTodos((prev) =>
        prev.map((curr) =>
            curr.id === id
                ? {...curr,...todo}
                : curr
        )
    )
}
```

### Why map()?

Returns new array with updated item.

### Example

Before

```js
[
 {id:1,title:"Study"},
 {id:2,title:"Gym"}
]
```

After

```js
[
 {id:1,title:"React Study"},
 {id:2,title:"Gym"}
]
```

---

# 7. Delete Todo

```js
const deleteTodo = (id) => {
    setTodos((prev) =>
        prev.filter(
            (curr) => curr.id !== id
        )
    )
}
```

### Why filter()?

Creates new array excluding selected todo.

---

# 8. Toggle Todo

```js
const toggleTodo = (id) => {
    setTodos((prev) =>
        prev.map((curr) =>
            curr.id === id
                ? {
                    ...curr,
                    done: !curr.done
                  }
                : curr
        )
    )
}
```

### Logic

```js
true  -> false
false -> true
```

using:

```js
!curr.done
```

---

# 9. Todo Form

## Local Input State

```js
const [todo, setTodo] = useState("")
```

---

## Add Todo

```js
const add = (e) => {
    e.preventDefault()

    if(!todo) return

    addTodo({
        title: todo,
        done: false
    })

    setTodo("")
}
```

### preventDefault()

Stops page refresh when form submits.

---

## Controlled Input

```jsx
<input
    value={todo}
    onChange={(e) =>
        setTodo(e.target.value)
    }
/>
```

### Flow

```text
Input
 ↓
onChange
 ↓
setTodo()
 ↓
State Update
 ↓
value Changes
```

---

# 10. Todo Item

## Editable State

```js
const [isTodoEditable,
       setIsTodoEditable] =
       useState(false)
```

### Purpose

Controls edit mode.

```js
false -> Readonly
true  -> Editable
```

---

## Todo Text State

```js
const [todoMsg,setTodoMsg] =
useState(todo.title)
```

Stores edited text locally.

---

## Edit Todo

```js
const editTodo = () => {
    updateTodo(
        {
            ...todo,
            title: todoMsg
        },
        todo.id
    )

    setIsTodoEditable(false)
}
```

---

## Save / Edit Button

```js
if (isTodoEditable) {
    editTodo()
}
else {
    setIsTodoEditable(true)
}
```

### Flow

```text
✏️ Click
 ↓
Edit Mode Enabled
 ↓
Change Text
 ↓
📁 Click
 ↓
updateTodo()
 ↓
Save Changes
```

---

# 11. Checkbox

```jsx
<input
    type="checkbox"
    checked={todo.done}
    onChange={toggleTodoList}
/>
```

Toggle Handler:

```js
const toggleTodoList = () => {
    toggleTodo(todo.id)
}
```

---

# 12. Readonly Input

```jsx
readOnly={!isTodoEditable}
```

### Result

```js
false => Editable
true  => Readonly
```

---

# 13. Conditional Styling

```jsx
todo.done
 ? "bg-[#c6e9a7]"
 : "bg-[#ccbed7]"
```

Completed:

```text
Green
```

Incomplete:

```text
Purple
```

---

# 14. Line Through Completed Task

```jsx
todo.done
 ? "line-through"
 : ""
```

Example

```text
Learn React
```

becomes

```text
~~Learn React~~
```

---

# 15. Rendering List

```jsx
{
    todos.map((currTodo) => (
        <TodoItem
            key={currTodo.id}
            todo={currTodo}
        />
    ))
}
```

### Why key?

React identifies each item uniquely.

✅ Better performance

✅ Correct re-rendering

---

# 16. Important Array Methods

## map()

Transforms items.

```js
arr.map()
```

Used For:

```js
updateTodo()
toggleTodo()
```

---

## filter()

Removes items.

```js
arr.filter()
```

Used For:

```js
deleteTodo()
```

---

# 17. React Concepts Used

- useState
- useEffect
- createContext
- useContext
- Custom Hooks
- Controlled Components
- Conditional Rendering
- Context API
- Local Storage
- Functional State Updates
- Spread Operator
- Event Handling
- Lazy State Initialization

---

# Common Interview Questions

### Why use Context API?

Avoid Prop Drilling.

---

### Why use useContext?

Consume global state.

---

### Why useState(() => {})?

Lazy Initialization.

Runs only once during first render.

---

### Why JSON.stringify()?

Store objects as strings in localStorage.

---

### Why JSON.parse()?

Convert stored string back to JavaScript object.

---

### Why use map() instead of forEach()?

map() returns a new array.

React state should be immutable.

---

### Why use key in list rendering?

Helps React efficiently track list items.