```applescript
-- treeLeaves :: Tree -> [Tree]
on treeLeaves(oNode)
    script go
        on |λ|(x)
            set lst to nest of x
            if length of lst > 0 then
                concatMap(my treeLeaves, lst)
            else
                {x}
            end if
        end |λ|
    end script
    |λ|(oNode) of go
end treeLeaves
```

```js
// treeLeaves :: Tree -> [Tree]
const treeLeaves = oNode => {
  const nest = oNode.nest;
  return (0 < nest.length) ? (
    concatMap(treeLeaves, nest)
  ) : [oNode];
};
```