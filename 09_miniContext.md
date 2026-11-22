# useContext Revision Notes (User Login Example)

## Purpose

Share user data between components without passing props.

Instead of:

```text
App → Login → SomeComponent → Profile
```

passing props at every level,

use:

```text
Context
```

and access data directly wherever needed.

---

# Project Structure

```text
App
 │
 └── UserContextProvider
      │
      ├── Login
      └── Profile
```

---

# 1. Create Context

```js
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

### What it does?

Creates a shared data container.

Think of it as:

```text
Global Box
```

that components can access.

---

# 2. Create Provider Component

```js
import UserContext from "./UserContext";
import { useState } from "react";

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
```

### Responsibilities

✅ Stores shared state

```js
user
```

✅ Provides updater function

```js
setUser
```

✅ Wraps all components needing access

---

# 3. Wrap Components with Provider

```jsx
<UserContextProvider>
    <Login />
    <Profile />
</UserContextProvider>
```

Now both components can access:

```js
user
setUser
```

---

# 4. Consume Context in Login

```js
const { setUser } = useContext(UserContext);
```

### On Button Click

```js
setUser({
    username,
    password
});
```

Example:

```js
setUser({
    username: "Harsh",
    password: "123"
});
```

This updates context state.

---

# 5. Consume Context in Profile

```js
const { user } = useContext(UserContext);
```

Read shared data directly.

```js
if(user){
    statement = `Hello ${user.username}`;
}
```

No props required.

---

# Complete Flow

```text
Login
  ↓
User enters username
  ↓
Click Button
  ↓
setUser(...)
  ↓
user state changes in Provider
  ↓
Provider re-renders
  ↓
All components using UserContext re-render
  ↓
Profile receives updated user
  ↓
Displays username
```

---

# Data Flow Visualization

```text
                 UserContext
                       │
        ┌──────────────┴──────────────┐
        │                             │
      Login                       Profile
        │                             │
        └────── setUser() ───────────►│
                                      │
                               reads user
```

---

# Why children is used?

```js
function UserContextProvider({ children })
```

When App writes:

```jsx
<UserContextProvider>
    <Login />
    <Profile />
</UserContextProvider>
```

React automatically passes:

```jsx
<>
    <Login />
    <Profile />
</>
```

as:

```js
children
```

Then Provider renders them:

```jsx
<UserContext.Provider value={...}>
    {children}
</UserContext.Provider>
```

---

# Re-render Rule

Only components using:

```js
useContext(UserContext)
```

get updated when context value changes.

Example:

```text
setUser()
   ↓
Provider re-renders
   ↓
Login re-renders
Profile re-renders
```

because both use the context.

---

# Interview Points

### Why useContext?

```text
Avoid Prop Drilling
Share Data Globally
Cleaner Component Structure
```

---

### Does useContext store data?

❌ No

Context does NOT store data.

Data is stored in:

```js
useState()
```

Context only shares it.

---

### What causes Profile to update?

```js
setUser(...)
```

changes Provider state.

New value is passed through Context.

Profile receives updated value and re-renders.

---

# Difference Between This Pattern & Theme Example

### Theme Example

```js
createContext(defaultValue)
```

and custom hook:

```js
useTheme()
```

---

### Login Example

```js
createContext()
```

and direct usage:

```js
useContext(UserContext)
```

---

### Preferred Production Pattern

```js
createContext()

function useUser(){
    return useContext(UserContext);
}
```

Then:

```js
const { user, setUser } = useUser();
```

Cleaner and reusable.

---

# One-Line Definition

**useContext allows Login to update the user data and Profile to read the same user data directly from a shared Context Provider without passing props through App.**