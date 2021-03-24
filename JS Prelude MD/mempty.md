```javascript
// mempty :: a -> a
const mempty = v => {
    const t = typeName(v);

    return ({
        "List": () => [],
        "Maybe": () => Nothing(),
        "Num": () => 0,
        "String": () => "",
        "Tuple": () => Tuple(mempty(v[0]))(mempty(v[1])),
        "Node": () => Node("")([])
    })[t]();
};
```