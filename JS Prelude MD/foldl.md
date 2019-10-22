```js
// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = f => a => xs =>
    xs.reduce(uncurry(f), a);
```