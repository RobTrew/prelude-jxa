```javascript
// elemTree :: a -> Tree a -> Bool
const elemTree = x =>
    // True if the root of any node in the tree
    // has the value x.
    tree => {
        const go = v => t =>
            v === t.root || t.nest.some(go(v));

        return go(x)(tree);
    };
```