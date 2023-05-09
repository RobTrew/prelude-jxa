```javascript
// showOutline :: Tree String -> String
const showOutline = tree => {
    const go = indent => x =>
        unlines(
            [indent + x.root].concat(
                x.nest.flatMap(go(`    ${indent}`))
            )
        );

    return go("")(tree);
};
```