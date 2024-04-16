```javascript
// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = p => {
    // A list of all nodes in the tree which match
    // a predicate p.
    // For the first matching value only, see findTree.
    // To ignore descendants where an ancestor already matches
    // write just [tree] in lieu of [tree, ...tree.nest.flatMap(go)]
    const go = tree =>
        p(tree.root)
            ? [tree, ...tree.nest.flatMap(go)]
            : tree.nest.flatMap(go);

    return go;
};
```