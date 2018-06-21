```js
// | Build a tree from a seed value
```

```js
// unfoldTree :: (b -> (a, [b])) -> b -> Tree a
const unfoldTree = (f, b) => {
    const tpl = f(b);
    return Node(tpl[0], unfoldForest(f, tpl[1]));
};
```