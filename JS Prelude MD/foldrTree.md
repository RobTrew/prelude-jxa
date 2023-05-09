```javascript
// foldrTree :: (a -> b -> b) -> b -> Tree a -> b
const foldrTree = f =>
    acc => node => {
        const go = (a, x) =>
            f(x.root)(
                x.nest.reduceRight(go, a)
            );

        return go(acc, node);
    };
```