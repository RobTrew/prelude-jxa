```js
-- | Build a tree from a seed value
```

```applescript
-- unfoldTree :: (b -> (a, [b])) -> b -> Tree aon unfoldTree(f, b)	set g to mReturn(f)	set tpl to g's |λ|(b)	Node(|1| of tpl, unfoldForest(g, |2| of tpl))end unfoldTree
```

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