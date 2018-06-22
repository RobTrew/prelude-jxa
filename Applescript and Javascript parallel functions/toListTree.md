```applescript
-- toListTree :: Tree a -> [a]on toListTree(tree)	script go		on |λ|(x)			{root of x} & concatMap(go, nest of x)		end |λ|	end script	|λ|(tree) of goend toListTree
```

```js
// toListTree :: Tree a -> [a]
const toListTree = tree => {
    const go = x => [
      x.root,
      ...[].concat.apply([], x.nest.map(go))
    ];
    return go(tree);
};
```