```js
// | Build a forest from a list of seed values
```

```js
// unfoldForest :: (b -> (a, [b])) -> [b] -> [Tree]
const unfoldForest = (f, xs) =>
    xs.map(b => unfoldTree(f, b));
```