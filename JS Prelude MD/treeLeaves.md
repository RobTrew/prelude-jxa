```js
// treeLeaves :: Tree -> [Tree]
const treeLeaves = oNode => {
  const nest = oNode.nest;
  return nest.length > 0 ? (
    concatMap(treeLeaves, nest)
  ) : [oNode];
};
```