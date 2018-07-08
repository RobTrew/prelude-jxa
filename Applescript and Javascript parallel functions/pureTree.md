```applescript
-- pureTree :: a -> Tree a
on pureTree(x)
    Node(x, {})
end pureTree
```

```js
// pureTree :: a -> Tree a
const pureTree = x => Node(x, []);
```