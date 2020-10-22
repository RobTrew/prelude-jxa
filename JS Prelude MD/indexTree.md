```javascript
// indexTree :: Tree (a,  { nodeSum :: Int }) -> Int ->
// Maybe Tree (a,  { nodeSum :: Int })
const indexTree = tree =>
    // Index into a measured tree. (see measuredTree)
    i => 0 !== i ? (
        i > (tree.root[1].nodeSum - 1) ? (
            Nothing()
        ) : indexForest(tree.nest)(i - 1)
    ) : Just(tree);
```