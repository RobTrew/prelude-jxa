```js
// levels :: Tree a -> [[a]]
const levels = tree =>
    // A list of tree nodes grouped by level.
    iterateUntil(isNull)(
        concatMap(nest)
    )([tree]).map(map(root));
```