```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f => xs =>
    xs.flatMap(f);
```