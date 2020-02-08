```js
// filteredSubTrees :: (Tree a -> Bool) -> Tree a -> [Tree a]
const filteredSubTrees = p =>
    tree => {
        const go = subTree => (
            p(subTree.root) ? (
                [subTree]
            ) : []
        ).concat(subTree.nest.flatMap(go));
        return go(tree);
    };
```