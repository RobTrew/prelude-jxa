```applescript
-- treeFromPairNest :: PairNest a -> Tree a
on treeFromPairNest(vxs)
    script go
        on |λ|(pair)
            Node(item 1 of pair, map(go, item 2 of pair))
        end |λ|
    end script
    |λ|(vxs) of go
end treeFromPairNest
```

```js
// treeFromPairNest :: PairNest a -> Tree a
const treeFromPairNest = vxs => {
    const go = vxs => Node(vxs[0], vxs[1].map(go));
    return go(vxs);
};
```