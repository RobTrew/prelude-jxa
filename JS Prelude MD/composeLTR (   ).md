```js
// composeLTR (>>>) :: (a -> b) -> (b -> c) -> a -> c
const composeLTR = (f, g) => x => f(g(x));
```