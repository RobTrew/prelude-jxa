```js
// levels :: Tree a -> [[a]]
const levels = tree =>
    map(xs => map(x => x.root, xs),
        iterateUntil(
            xs => xs.length < 1,
            xs => concatMap(x => x.nest, xs), [tree]
        )
    );
```