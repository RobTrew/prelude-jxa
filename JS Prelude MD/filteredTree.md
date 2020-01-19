```js
// filteredTree (a - Bool) -> Tree a -> Tree a
const filteredTree = p =>
    // A tree including only those children which:
    // either match the predicate p, or have
    // descendants which match the predicate p.
    foldTree(x => xs =>
        Node(x)(xs.filter(
            tree => (0 < tree.nest.length) || (
                p(tree.root)
            )
        ))
    );
```