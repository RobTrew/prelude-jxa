```js
// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
const on = f =>
    // e.g. sortBy(on(compare,length), xs)
    g => a => b => f(g(a))(g(b));
```