```js
// bindFn :: (a -> b) -> (b -> c) -> a -> c
const bindFn = (m, mf) =>
    x => mf(y => m(x, y))(x);
```