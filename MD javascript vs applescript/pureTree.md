```applescript
-- pureTree :: a -> Tree a
on pureTree(x)
    Node(x, {})
end pureTree
```


```javascript
// pureTree :: a -> Tree a
const pureTree = x =>
    Node(x)([]);
```