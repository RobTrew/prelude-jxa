```javascript
// elemTree :: a -> Tree a -> Bool
const elemTree = x =>
    // True if the root of any node in the tree
    // has the value x.
    tree => {
        const go = t =>
            x === t.root || t.nest.some(go);

        return go(tree);
    };
```