# Redux Notes

## What is Redux?

Redux is a **state management library** for JavaScript applications.

React mein jab multiple components ko same data chahiye hota hai, state manage karna difficult ho sakta hai.

Redux application ki **global state** ko ek central place par manage karta hai.

```text
Component A
     ↓
Redux Store
     ↑
Component B
```

---

## Why Do We Use Redux?

Redux useful hota hai jab:

* Multiple components ko same data chahiye ho.
* State different parts of the app mein shared ho.
* State logic difficult ho jaye.
* State ko predictable way mein update karna ho.

Example:

```text
User
Cart
Products
Orders
Theme
```

In states ko Redux ke through manage kiya ja sakta hai.

---

# Redux Core Concepts

Redux ke main concepts:

1. **Store**
2. **State**
3. **Action**
4. **Reducer**
5. **Dispatch**
6. **Selector**

---

## 1. Store

**Store** wo place hai jahan Redux application ki global state rakhta hai.

Example:

```js
{
  user: {
    name: "Talha"
  },
  cart: [],
  theme: "dark"
}
```

Simple words mein:

> Store = Application ki state ka central place.

---

## 2. State

**State** actual data hota hai jo Redux Store mein stored hota hai.

Example:

```js
{
  count: 0
}
```

Yahan:

```text
count = state
```

---

## 3. Action

**Action** Redux ko batata hai ke **kya hua**.

Example:

```js
{
  type: "counter/increment"
}
```

Agar data bhi send karna ho:

```js
{
  type: "user/login",
  payload: {
    name: "Talha"
  }
}
```

Action usually contain karta hai:

```js
{
  type: "...",
  payload: "..."
}
```

### type

`type` batata hai ke **konsa action perform hua**.

### payload

`payload` mein wo **data hota hai jo action ke saath send karna ho**.

---

## 4. Reducer

**Reducer** decide karta hai ke state ko **kaise change karna hai**.

Example:

```js
const counterReducer = (state, action) => {
  if (action.type === "increment") {
    state.count += 1;
  }

  return state;
};
```

Simple flow:

```text
Action
  ↓
Reducer
  ↓
Updated State
```

---

## 5. Dispatch

`dispatch()` ka use **action ko Redux ko send karne** ke liye hota hai.

Example:

```js
dispatch({
  type: "counter/increment"
});
```

Flow:

```text
dispatch()
    ↓
  Action
    ↓
  Reducer
    ↓
State Updated
```

---

## 6. Selector

**Selector** Redux Store se data **read/get** karne ke liye use hota hai.

React Redux mein:

```js
const count = useSelector(
  (state) => state.counter.count
);
```

`useSelector()` Redux se data get karta hai.

---

# Redux Flow

Redux ka basic flow:

```text
User interacts with UI
        ↓
     dispatch()
        ↓
      Action
        ↓
     Reducer
        ↓
   State Updated
        ↓
      Store
        ↓
Component gets new state
        ↓
       UI updates
```

---

# Redux Toolkit

Aaj kal normally **Redux Toolkit (RTK)** use kiya jata hai instead of manually Redux likhne ke.

Redux Toolkit Redux ko:

* Easier
* Shorter
* Cleaner
* Less repetitive

banata hai.

### Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

# createSlice()

`createSlice()` Redux mein ek **slice create** karne ke liye use hota hai.

Example:

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

---

# What is a Slice?

**Slice** Redux State ka ek specific part hota hai.

Example:

```text
Redux Store
│
├── userSlice
├── cartSlice
├── productSlice
└── counterSlice
```

Example:

```text
counterSlice
     ↓
   count
   increment
   decrement
```

---

# configureStore()

`configureStore()` Redux Store create karta hai.

Example:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

Store mein state kuch aisi hogi:

```js
{
  counter: {
    count: 0
  }
}
```

---

# Provider

React ko Redux Store ke baare mein batane ke liye `<Provider>` use hota hai.

Example:

```jsx
import { Provider } from "react-redux";
import { store } from "./store";

<Provider store={store}>
  <App />
</Provider>
```

Ab `<Provider>` ke andar jitne bhi components hain wo Redux Store ko access kar sakte hain.

---

# useSelector()

`useSelector()` Redux se **data read** karne ke liye use hota hai.

Example:

```jsx
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector(
    (state) => state.counter.count
  );

  return <h1>{count}</h1>;
}
```

---

# useDispatch()

`useDispatch()` Redux ko **action send** karne ke liye use hota hai.

Example:

```jsx
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      Increment
    </button>
  );
}
```

---

# Complete Simple Example

## counterSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

---

## store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

---

## main.jsx

```jsx
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

<Provider store={store}>
  <App />
</Provider>
```

---

## Counter.jsx

```jsx
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement
} from "./counterSlice";

function Counter() {
  const count = useSelector(
    (state) => state.counter.count
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default Counter;
```

---

# Important Difference

## useSelector

Data **read** karne ke liye:

```js
const count = useSelector(
  (state) => state.counter.count
);
```

## useDispatch

Action **send** karne ke liye:

```js
const dispatch = useDispatch();

dispatch(increment());
```

Simple:

```text
useSelector → Data lena

useDispatch → Action bhejna
```

---

# Redux vs Context API

### Context API

React ka built-in feature hai.

```text
React
 └── Context API
```

### Redux

External state management library hai.

```text
React
 └── Redux
      └── Redux Toolkit
```

Context API small/simple global state ke liye useful ho sakta hai.

Redux large applications mein complex shared state ko organize karne ke liye useful hota hai.

---

# Redux Important Terms

| Term              | Meaning                                       |
| ----------------- | --------------------------------------------- |
| **Store**         | Global state rakhta hai                       |
| **State**         | Actual data                                   |
| **Action**        | Batata hai kya hua                            |
| **Payload**       | Action ke saath data                          |
| **Reducer**       | State update karta hai                        |
| **Dispatch**      | Action send karta hai                         |
| **Selector**      | Store se data read karta hai                  |
| **Slice**         | State ka ek part                              |
| **Provider**      | Redux Store ko React app se connect karta hai |
| **Redux Toolkit** | Redux use karne ka easier way                 |

---

# One-Line Summary

```text
Redux = Application ki shared/global state ko
predictable way mein manage karne ka tool.
```

## Most Important Flow

```text
UI
 ↓
dispatch(action)
 ↓
Reducer
 ↓
Store updates
 ↓
useSelector()
 ↓
UI updates
```
