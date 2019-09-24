```js
// gingkosFromStringForest ::
// [Tree String] ->
// [Gingko {content: String, children: [Gingko]}]
const gingkosFromStringForest = trees => {
    // Structure of  JSON used by https://gingkoapp.com
    // derived from Data Tree node list.
    const go = node => ({
        content: node.root,
        children: node.nest.map(go)
    });
    return trees.map(go)
};
```