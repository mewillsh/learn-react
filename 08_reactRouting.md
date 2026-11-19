# React Router Quick Revision Notes 🚀

---

# 1. createBrowserRouter

Used to create routing configuration.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />
      }
    ]
  }
]);
```

✅ Modern React Router routing approach.

---

# 2. RouterProvider

Makes router available throughout application.

```jsx
<RouterProvider router={router} />
```

✅ Root component of routing system.

---

# 3. Layout Route

Common UI shared by multiple pages.

```jsx
{
  path: "/",
  element: <Layout />,
  children: [...]
}
```

Example:

- Header
- Footer
- Sidebar

stay fixed while page content changes.

---

# 4. Outlet

Placeholder where child routes render.

```jsx
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```

Flow:

```text
Parent Route
    ↓
Outlet
    ↓
Child Route Content
```

---

# 5. Index Route

Default child route.

```jsx
{
  index: true,
  element: <Main />
}
```

Equivalent to:

```text
/
```

✅ Loads automatically when parent route loads.

---

# 6. Child Routes

```jsx
{
  path: "about",
  element: <About />
}
```

URL:

```text
/about
```

---

# 7. Nested Routes

Parent:

```jsx
{
  path: "about",
  element: <About />,
}
```

Child:

```jsx
{
  path: "about/company",
  element: <Company />
}
```

URL:

```text
/about/company
```

✅ Child route can render inside parent's Outlet.

---

# 8. Link

Navigation without page reload.

```jsx
<Link to="/about">
  About
</Link>
```

Instead of:

```html
<a href="/about">About</a>
```

React Router prevents full refresh.

---

# 9. NavLink

Special Link that knows active route.

```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive
      ? "text-orange-700"
      : "text-black"
  }
>
  About
</NavLink>
```

✅ Used in navigation bars.

---

# 10. end Prop

Without end:

```jsx
<NavLink to="/about" />
```

These URLs activate it:

```text
/about
/about/company
/about/team
```

With end:

```jsx
<NavLink
  to="/about"
  end
/>
```

Only:

```text
/about
```

will be active.

✅ Used to prevent parent links from remaining active.

---

# 11. URL Parameters

Route:

```jsx
{
  path: "user/:userID",
  element: <User />
}
```

URL:

```text
/user/123
```

Component:

```jsx
const { userID } = useParams();
```

Result:

```jsx
userID = "123"
```

---

# 12. useParams()

Reads dynamic values from URL.

```jsx
const { userID } = useParams();
```

URL:

```text
/user/harsh
```

Result:

```jsx
userID = "harsh"
```

---

# 13. Loader

Fetches data BEFORE component renders.

```jsx
export async function dataLoader() {
  let result = await fetch(
    "https://api.github.com/users/mewillsh"
  );

  return result.json();
}
```

Route:

```jsx
{
  path: "github",
  element: <GithubCard />,
  loader: dataLoader
}
```

Flow:

```text
Route Opened
      ↓
Loader Runs
      ↓
Data Fetched
      ↓
Component Rendered
```

---

# 14. useLoaderData()

Receives loader data.

```jsx
const user = useLoaderData();
```

No need for:

```jsx
useState()
useEffect()
fetch()
```

inside component.

---

# 15. Loader vs useEffect

## useEffect

```jsx
Component Render
      ↓
Loading...
      ↓
Fetch Data
      ↓
Update State
      ↓
Render Again
```

Example:

```jsx
useEffect(() => {
  fetch(...)
}, []);
```

---

## Loader

```jsx
Route Opened
      ↓
Fetch Data
      ↓
Render Component
```

Example:

```jsx
loader: dataLoader
```

✅ Cleaner for route data.

✅ Recommended in Data Mode.

---

# 16. Dynamic Loader Example

Route:

```jsx
{
  path: "github/:username",
  element: <GithubCard />,
  loader: githubLoader
}
```

Loader:

```jsx
export async function githubLoader({
  params
}) {
  return fetch(
    `https://api.github.com/users/${params.username}`
  );
}
```

URL:

```text
/ github/octocat
```

Result:

```jsx
params.username === "octocat"
```

---

# 17. Navigation Flow

```text
User Clicks Link
        ↓
Router Matches Route
        ↓
Loader Runs (if present)
        ↓
useLoaderData receives data
        ↓
Component Renders
```

---

# 18. React Router Hooks

| Hook | Purpose |
|--------|----------|
| useParams() | Read URL params |
| useLoaderData() | Read loader data |
| useNavigate() | Navigate programmatically |
| useLocation() | Current URL info |

---

# 19. Route Configuration Cheat Sheet

```jsx
{
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Main />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "user/:userID",
      element: <User />
    },
    {
      path: "github",
      element: <GithubCard />,
      loader: dataLoader
    }
  ]
}
```

---

# Interview One-Liners

✅ Link → Navigation without refresh

✅ NavLink → Link + active state

✅ Outlet → Renders child routes

✅ Index Route → Default child route

✅ useParams → Reads URL parameters

✅ Loader → Fetches data before rendering

✅ useLoaderData → Access loader result

✅ useNavigate → Navigation from JavaScript

✅ end prop → Prevents parent NavLink staying active

✅ createBrowserRouter → Defines route tree

✅ RouterProvider → Injects router into app