```js
// composeR (>>>) :: (a -> b) -> (b -> c) -> a -> c
const composeR = (f, g) => x => f(g(x));
```