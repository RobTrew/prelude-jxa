```js
// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
  iterateUntil(
    xs => 1 > xs.length,
    xs => concatMap(x => x.nest, xs), [tree]
  );
```