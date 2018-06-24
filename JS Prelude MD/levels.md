```js
// levels :: Tree a -> [[a]]
const levels = tree =>
    map(xs => map(x => x.root, xs),
        iterateUntil(
            xs => 1 > xs.length,
            xs => concatMap(x => x.nest, xs), [tree]
        )
    );
```