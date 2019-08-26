```js
// showOutline :: Tree String -> String
const showOutline = tree => {
    const go = indent => tree =>
        unlines(
            [indent + tree.root]
            .concat(tree.nest.flatMap(go('    ' + indent)))
        );
    return go('')(tree);
};
```