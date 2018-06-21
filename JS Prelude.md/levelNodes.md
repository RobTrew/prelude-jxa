```js
// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
  iterateUntil(
    xs => xs.length < 1,
    xs => concatMap(x => x.nest, xs), [tree]
  );
```