```javascript
// indexForest :: [Tree (a,  { nodeSum :: Int })] -> Int ->
// Maybe Tree (a, { nodeSum :: Int })
const indexForest = trees =>
    // Index into a forest of measured trees.
    // (see measuredTree)
    i => 0 < trees.length ? (() => {
        const
            headNode = trees[0],
            headSize = headNode.root[1].nodeSum;
        return i > (headSize - 1) ? (
            indexForest(trees.slice(1))(i - headSize)
        ) : indexTree(headNode)(i);
    })() : Nothing();
```