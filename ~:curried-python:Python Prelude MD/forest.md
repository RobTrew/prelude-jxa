```js
// forest :: () -> Parser Forest String
const forest = () =>
    // Parser for a list of 
    // top-level outlines.
    many(treeAtIndent(0));
```