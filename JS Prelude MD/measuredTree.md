```javascript
// measuredTree :: Tree a ->
// Tree (a, {leafSum::Int, layerSum::Int,
//           nodeSum::Int, index::Int})
// eslint-disable-next-line max-lines-per-function
const measuredTree = tree => {
    // A tree in which each node is tupled with
    // a (leafSum, layerSum, nodeSum) measure of its sub-tree,
    // where leafSum is the number of descendant leaves,
    // and layerSum is the number of descendant levels,
    // and nodeSum counts all nodes, including the root.
    // Index is a position in a zero-based top-down
    // left to right series.
    // For additional parent indices, see parentIndexedTree.
    const whni = (leafSum, layerSum, nodeSum, ndx) => ({
        leafSum,
        layerSum,
        nodeSum,
        index : ndx
    });
    let i = 0;

    return foldTree(
        x => {
        // eslint-disable-next-line no-plusplus
            const topDown = i++;

            return xs => Node(
                Tuple(x)(
                    0 < xs.length
                        ? (() => {
                            const dct = xs.reduce(
                                (a, node) => {
                                    const dimns = node.root[1];

                                    return whni(
                                        a.leafSum + dimns.leafSum,
                                        Math.max(a.layerSum)(
                                            dimns.layerSum
                                        ),
                                        a.nodeSum + dimns.nodeSum,
                                        topDown
                                    );
                                }, whni(0, 0, 0, topDown)
                            );

                            return whni(
                                dct.leafSum,
                                1 + dct.layerSum,
                                1 + dct.nodeSum,
                                topDown
                            );
                        })()
                        : whni(1, 0, 1, topDown)
                )
            )(xs);
        }
    )(tree);
};
```