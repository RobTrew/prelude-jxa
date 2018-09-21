```js
// Derive a function from the name of a JS infix operator
```

```js
// op :: String -> (a -> a -> b)
const op = strOp =>
    eval(`(a, b) => a ${strOp} b`);
```