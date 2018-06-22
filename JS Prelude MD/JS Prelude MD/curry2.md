```js
// Simpler 2 argument only version of curry
```

```js
// curry2 :: ((a, b) -> c) -> a -> b -> c
const curry2 = f => a => b => f(a, b);
```