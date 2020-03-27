```js
// A list of all nodes in the tree which match 
// a predicate p.
// For the first match only, see findTree.
```

```js
// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = p => {
    const go = tree =>
        p(tree.root) ? (
            [tree]
        ) : tree.nest.flatMap(go);
    return go;
};
```