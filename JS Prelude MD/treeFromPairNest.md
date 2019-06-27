```js
// treeFromPairNest :: PairNest a -> Tree a
const treeFromPairNest = vxs => {
    const go = vxs => Node(vxs[0], vxs[1].map(go));
    return go(vxs);
};
```