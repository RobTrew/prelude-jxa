```js
// intersection :: Ord a => Set a -> Set a -> Set a
const intersection = s => s1 =>
    new Set([...s].filter(x => s1.has(x)));
```