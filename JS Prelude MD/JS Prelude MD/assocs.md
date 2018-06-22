```js
// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    Object.keys(m).sort().map(k => Tuple(k, m[k]));
```