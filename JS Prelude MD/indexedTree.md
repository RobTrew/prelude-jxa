```javascript
// indexedTree :: Int -> Tree a -> Tree (a, Int)
const indexedTree = rootIndex =>
    // A tree in which each root value
    // is paired with a top-down
    // left-right index, where the root node
    // starts at the supplied rootIndex;
    tree => mapAccumLTree(
        i => x => [1 + i, [x, {
            index: i
        }]]
    )(rootIndex)(tree)[1];
```