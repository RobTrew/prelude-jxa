```js
// treeLeaves :: Tree -> [Tree]
const treeLeaves = oNode => {
  const nest = oNode.nest;
  return (0 < nest.length) ? (
    concatMap(treeLeaves, nest)
  ) : [oNode];
};
```