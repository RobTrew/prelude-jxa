```js
// levels :: Tree a -> [[a]]
const levels = tree => {
    const xs = [[root(tree)]];
    let level = [tree].flatMap(nest);
    while (0 < level.length) {
        xs.push(level.map(root));
        level = level.flatMap(nest);
    }
    return xs;
};
```