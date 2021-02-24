```javascript
// treeFromJSON :: JSON String -> Tree a
const treeFromJSON = json => {
    // Assumes a recursive [root, nest] JSON format,
    // in which `root` is a parseable value string, and `nest`
    // is a possibly empty list of [`root`, `nest`] pairs.
    const go = ([rootValue, subNest]) =>
        Node(rootValue)(subNest.map(go));

    return go(JSON.parse(json));
};
```