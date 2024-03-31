```javascript
// prunedForest (a -> Bool) -> Forest a -> Forest a
const prunedForest = p => {
    // A forest of trees in which every node matches p.
    // That is, a forest including only nodes which:
    // 1. match the predicate p, AND
    // 2. have no ancestors which do not match p.
    const
        go = trees => trees.flatMap(tree => {
            const x = tree.root;

            return p(x)
                ? [
                    Node(x)(
                        go(tree.nest)
                    )
                ]
                : [];
        });

    return go;
};
```