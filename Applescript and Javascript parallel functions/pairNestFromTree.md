```applescript
-- pairNestFromTree :: Tree a -> PairNest a
on pairNestFromTree(tree)
    script go
        on |λ|(x)
            {root of x, map(go, nest of x)}
        end |λ|
    end script
    |λ|(tree) of go
end pairNestFromTree
```

```js
// pairNestFromTree :: Tree a -> PairNest a
const pairNestFromTree = tree => {
    const go = node => [node.root, node.nest.map(go)];
    return go(tree);
};
```