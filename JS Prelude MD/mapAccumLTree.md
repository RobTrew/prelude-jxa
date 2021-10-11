```javascript
// mapAccumLTree :: (acc -> x -> (acc, y)) ->
// acc -> Tree -> (acc, Tree)
const mapAccumLTree = f => {
    const go = a => x => {
        const [acc, v] = f(a)(root(x));

        return second(Node(v))(
            mapAccumL(go)(acc)(nest(x))
        );
    };

    return go;
};
```