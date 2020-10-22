```javascript
// foldlTree :: (b -> a -> b) -> b -> Tree a -> b
const foldlTree = f =>
    acc => node => {
        const go = (a, x) =>
            x.nest.reduce(go, f(a)(x.root));
        return go(acc, node);
    };
```