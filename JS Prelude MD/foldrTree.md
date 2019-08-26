```js
// foldrTree :: (a -> b -> b) -> b -> Tree a -> b
const foldrTree = f => acc => node => {
    const go = (a, x) =>
        x.nest.reduceRight(go, f(x.root)(a));
    return go(acc, node);
};
```