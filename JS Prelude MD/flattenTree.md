```javascript
// flattenTree :: Tree a -> [a]
const flattenTree = tree => {
    const
        go = (xs, node) => [node.root].concat(
            node.nest.reduceRight(go, xs)
        );
    return go([], tree);
};
```