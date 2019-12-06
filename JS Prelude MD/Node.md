```js
// Node :: a -> [Tree a] -> Tree a
const Node = v => xs => ({
    type: 'Node',
    root: v,
    nest: xs || []
});
```