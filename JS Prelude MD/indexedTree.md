```javascript
// indexedTree :: Tree a -> Tree (a, Int)
const indexedTree = tree => {
    // A tree in which each root value 
    // is paired with a top-down
    // left-right zero-based index,
    // where the root node has index 0;
    const go = n => node =>
        second(
            Node(
                Tuple(node.root)(n)
            )
        )(
            mapAccumL(go)(
                succ(n)
            )(node.nest)
        );
    return snd(go(0)(tree));
};
```