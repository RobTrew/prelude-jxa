```js
// treeLeaves :: Tree -> [Tree]
const treeLeaves = tree => {
  const nest = tree.nest;
  return (0 < nest.length) ? (
    concatMap(treeLeaves, nest)
  ) : [tree];
};
```