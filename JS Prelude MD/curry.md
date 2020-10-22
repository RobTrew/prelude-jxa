```js
// curry :: ((a, b) -> c) -> a -> b -> c
const curry = f =>
    a => b => f(a, b);
```