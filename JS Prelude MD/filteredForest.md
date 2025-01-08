```javascript
// filteredForest :: (a -> Bool) -> [Tree a] -> [Tree a]
const filteredForest = p =>
    // A forest of trees which all subtrees match the predicate.
    trees => {
        const go = t => {
            const v = root(t);

            return p(v)
                ? [
                    Node(v)(
                        nest(t).flatMap(go)
                    )
                ]
                : [];
        };

        return trees.flatMap(go);
    };
```