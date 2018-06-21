```js
// treeLeaves :: Node -> [Node]
const treeLeaves = oNode => {
  const nest = oNode.nest;
  return nest.length > 0 ? (
    concatMap(treeLeaves, nest)
  ) : [oNode];
};
```