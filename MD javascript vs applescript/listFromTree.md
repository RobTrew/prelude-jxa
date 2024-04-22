```javascript
// listFromTree :: Tree a -> [a]
const listFromTree = tree => {
    const go = x => [
        root(x),
        ...[].concat(...nest(x).map(go))
    ];

    return go(tree);
};
```


```applescript
-- listFromTree :: Tree a -> [a]
on listFromTree(tree)
    script go
        on |λ|(x)
            {root of x} & concatMap(go, nest of x)
        end |λ|
    end script
    |λ|(tree) of go
end listFromTree
```