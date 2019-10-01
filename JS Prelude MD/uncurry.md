```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
```

```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    (x, y) => f(x)(y);
```