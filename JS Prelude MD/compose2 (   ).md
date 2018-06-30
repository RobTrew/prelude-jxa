```js
// compose2 (>>>) :: (a -> b) -> (b -> c) -> a -> c
const compose2 = (f, g) => x => f(g(x));
```