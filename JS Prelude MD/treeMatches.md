```javascript
// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = p => {
    // A list of all nodes in the tree which match 
    // a predicate p.
    // For the first match only, see findTree.
    const go = tree =>
        p(tree.root) ? (
            [tree]
        ) : tree.nest.flatMap(go);
    return go;
};
```