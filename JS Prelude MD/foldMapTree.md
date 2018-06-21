```js
// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = (f, node) => {
    const go = x =>
        x.nest.length > 0 ? mappend(
            f(x.root),
            foldl1(mappend, x.nest.map(go))
        ) : f(x.root);
    return go(node);
};
```