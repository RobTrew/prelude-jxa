```js
// compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
const compose = (f, g) => x => f(g(x));
```