```js
// showOutline :: Tree String -> String
const showOutline = tree => {
    const go = indent => tree =>
        unlines(
            [indent + tree.root]
            .concat(concatMap(go('    ' + indent), tree.nest))
        );
    return go('')(tree);
};
```