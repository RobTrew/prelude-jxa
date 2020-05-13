```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f =>
    xs => list(xs).flatMap(f);
```