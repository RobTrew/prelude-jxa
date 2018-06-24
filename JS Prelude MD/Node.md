```js
// Node :: a -> [Tree a] -> Tree a
const Node = (v, xs) => ({
    type: 'Node',
    root: v, // any type of value (consistent across tree)
    nest: xs || []
});
```