```js
// A list of all nodes in the tree which match 
// a predicate p.
// For the first match only, see findTree.
```

```js
// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = p => tree => {
    const go = node =>
        p(node.root) ? (
            [node]
        ) : node.nest.flatMap(go);
    return go(tree);
};
```