```js
// filePathTree :: filePath -> [Tree String] -> Tree filePath
const filePathTree = (fpAnchor, trees) => {
    const go = fp => tree => {
        const path = `${fp}/${tree.root}`;
        return Node(
            path,
            tree.nest.map(go(path))
        );
    };
    return Node(fpAnchor, trees.map(go(fpAnchor)));
};
```