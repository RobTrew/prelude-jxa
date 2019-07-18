```js
// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
  iterateUntil(
    xs => 1 > xs.length,
    xs => xs.flatMap(x => x.nest), [tree]
  );
```