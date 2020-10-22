```js
// jsonFromTree :: Tree a -> String
const jsonFromTree = tree => {
    // A recursive [root, nest] JSON format,
    // in which `root` is a value string, and `nest`
    // is a possibly empty list of [`root`, `nest`] pairs.
    const go = node => [node.root, node.nest.map(go)];
    return JSON.stringify(go(tree));
};
```