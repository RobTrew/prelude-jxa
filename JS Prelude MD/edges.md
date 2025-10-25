```javascript
// edges :: Tree a -> [(a, a)]
const edges = tree => {
    // The edges of the tree as parent-child pairs in pre-order.
    const go = (sofar, parentValue, subTrees) =>
        subTrees.reduceRight(
            (a, t) => {
                const v = root(t);

                return [
                    Tuple(parentValue)(v),
                    ...go(a, v, nest(t))
                ];
            },
            sofar
        );

    return go([], root(tree), nest(tree));
};
```