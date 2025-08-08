```javascript
// levels :: Tree a -> [[a]]
const levels = tree =>
    iterateUntil(
        xs => 0 === xs.length
    )(
        xs => xs.flatMap(nest)
    )(
        [tree]
    )
        .map(xs => xs.map(root))
        .slice(0, -1);
```