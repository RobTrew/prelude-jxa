```js
// | Build a forest from a list of seed values
```

```js
// unfoldForest :: (b -> (a, [b])) -> [b] -> [Tree]
const unfoldForest = f => 
    x => xs => xs.map(unfoldTree(f));
```