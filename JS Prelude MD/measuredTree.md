```js
// measuredTree :: Tree a -> Tree (a, (Int, Int))
const measuredTree = tree =>
    // A tree in which each node is decorated with 
    // a (Width, Height) measure of its sub-tree.
    foldTree(
        x => xs => Node(
            Tuple(x)(
                0 < xs.length ? secondArrow(succ)(
                    xs.reduce(
                        (tplAcc, node) => {
                            const tplX = node.root[1];
                            return Tuple(
                                tplAcc[0] + tplX[0]
                            )(max(tplAcc[1])(tplX[1]));
                        },
                        Tuple(0)(0)
                    )
                ) : Tuple(1)(1)
            )
        )(xs)
    )(tree);
```