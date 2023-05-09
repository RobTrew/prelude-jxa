```javascript
// parentIndexedTree :: Tree (a, {...index :: Int}) ->
// Tree (a, {...index :: Int, parent :: Maybe Int})
const parentIndexedTree = tree => {
    // A tree additionally decorated with parent indices,
    // derived from a measured tree already decorated with
    // node indices. (See measuredTree).
    const go = mb => node => {
        const
            x = root(node),
            measures = x[1];

        return Node(
            Tuple(x[0])(
                Object.assign(measures, {
                    parent: mb
                })
            )
        )(nest(node).map(go(Just(measures.index))));
    };

    return go(Nothing())(tree);
};
```