```js
// catMaybes :: [Maybe a] -> [a]
const catMaybes = mbs =>
    concatMap(m => m.Nothing ? [] : [m.Just], mbs);
```