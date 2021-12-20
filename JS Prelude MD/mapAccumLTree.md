```javascript
// mapAccumLTree :: (s -> a -> (s, b)) -> s ->
// Tree a -> (s, Tree b)
const mapAccumLTree = f => {
    // A tuple of an accumulation and a tree
    // obtained by a combined map and fold,
    // with accumulation from left to right over
    // the subForest.
    const go = a => x => {
        const [acc, v] = f(a)(root(x));

        return second(Node(v))(
            mapAccumL(go)(acc)(nest(x))
        );
    };

    return go;
};
```