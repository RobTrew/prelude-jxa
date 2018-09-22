```js
// curry3 :: ((a, b, c) -> d) -> a -> b -> c -> d
const curry3 = f =>
    a => b => c => f(a, b, c);
```