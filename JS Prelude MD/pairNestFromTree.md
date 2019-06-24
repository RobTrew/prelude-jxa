```js
// pairNestFromTree :: Tree a -> PairNest a
const pairNestFromTree = tree =>
    foldTree(
        (v, xs) => [v, xs],
        tree
    );
```