```javascript
// Node :: a -> [Tree a] -> Tree a
const Node = v =>
    // Constructor for a Tree node which connects a
    // value of some kind to a list of zero or
    // more child trees.
    xs => ({
        type: 'Node',
        root: v,
        nest: xs || []
    });
```