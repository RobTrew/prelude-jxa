```javascript
// indexedTree :: Int -> Tree a -> Tree (a, Int)
const indexedTree = rootIndex =>
    // A tree in which each root value
    // is paired with a top-down
    // left-right index, where the root node
    // starts at the supplied rootIndex;
    tree => {
        const go = n => node =>
            second(
                Node(Tuple(root(node))({
                    index: n
                }))
            )(
                mapAccumL(go)(1 + n)(
                    nest(node)
                )
            );

        return snd(go(rootIndex)(tree));
    };
```