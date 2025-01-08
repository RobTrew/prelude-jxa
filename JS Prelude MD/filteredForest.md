```javascript
// filteredForest :: (a -> Bool) -> [Tree a] -> [Tree a]
const filteredForest = p =>
    // Nothing, if the root does not match the predicate,
    // or a tree containing only elements that do match
    // the predicate.
    trees => {
        const go = t => {
            const v = root(t);

            return p(v)
                ? Node(v)(
                    nest(t).flatMap(go)
                )
                : [];
        };

        return trees.flatMap(go);
    };
```