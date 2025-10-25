```javascript
// leaves :: Tree a -> [a]
const leaves = tree => {
    // Ordered leaf values of a given tree
    const go = (vs, t) => {
        const ts = nest(t);

        return 0 < ts.length
            ? ts.reduce(go, vs)
            : vs.concat(root(t));
    };

    return go([], tree);
};
```