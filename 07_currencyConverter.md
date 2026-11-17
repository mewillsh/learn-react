# Currency Converter App - Ultra Quick Revision

## InputBox Component

### Purpose
Reusable component for:
- Amount Input
- Currency Dropdown

### useId()
```js
const amountInputId = useId()
```
Generates a unique id to connect:

```js
<label htmlFor={amountInputId} />
<input id={amountInputId} />
```

### Controlled Input
```js
value={amount}
```
Input value is controlled by React state.

### Amount Change
```js
onChange={(e)=>
  onAmountChange &&
  onAmountChange(Number(e.target.value))
}
```

Flow:

```text
User Types
    ↓
onChange
    ↓
Parent State Updates
```

### Dropdown Rendering
```js
currenyOption.map((currency)=>(
  <option key={currency} value={currency}>
    {currency}
  </option>
))
```

Creates options dynamically from array.

---

# UseFetchCurrency Custom Hook

### Purpose
Fetch exchange rates based on selected currency.

### State
```js
const [curr, setCurrency] = useState({})
```

Stores exchange rates.

### useEffect
```js
useEffect(()=>{
   fetch(...)
}, [currency])
```

Runs:
- On first render
- Whenever `currency` changes

### API Response
```js
{
  inr:{
    usd:0.012,
    eur:0.011
  }
}
```

Stored as:

```js
{
  usd:0.012,
  eur:0.011
}
```

### Return
```js
return curr
```

Returns exchange-rate object.

---

# App Component

## State

```js
from
```
Base currency

```js
to
```
Target currency

```js
current
```
User amount

```js
converted
```
Converted value

---

## Fetch Rates

```js
const list = UseFetchCurrency(from)
```

Example:

```js
{
  usd:0.012,
  eur:0.011
}
```

---

## Currency Array

```js
Object.keys(list)
```

Converts:

```js
{
  usd:0.012,
  eur:0.011
}
```

to

```js
["usd","eur"]
```

Used for dropdown options.

---

## Conversion Logic

```js
let calculate = current * Number(list[to])
```

Example:

```js
100 INR × 0.012
= 1.2 USD
```

Update state:

```js
setConverted(calculate)
```

---

## Form Submit

```js
onSubmit={(e)=>{
  e.preventDefault()
  converter()
}}
```

### e.preventDefault()

✅ Prevent page refresh

✅ Keep React in control

---

# Data Flow

```text
User Input
    ↓
setCurrent()
    ↓
State Updated
    ↓
Submit Form
    ↓
converter()
    ↓
current × exchangeRate
    ↓
setConverted()
    ↓
UI Re-render
```

---

# Architecture

```text
App
 │
 ├─ Holds State
 │
 ├─ Uses Custom Hook
 │
 └─ Passes Props
      ↓
  InputBox
      ↓
User Interaction
      ↓
Callback Functions
      ↓
App State Updates
```

---

# Interview One-Liners

✅ **InputBox** = Reusable controlled form component.

✅ **useId()** = Generates unique IDs for accessibility.

✅ **UseFetchCurrency** = Custom hook that fetches currency rates when base currency changes.

✅ **useEffect()** = Runs fetch logic on mount and dependency change.

✅ **Object.keys()** = Converts exchange-rate object into currency array.

✅ **App Component** = State owner and conversion controller.

✅ **Data Flow** = Parent → Props → Child → Callback → Parent State Update.