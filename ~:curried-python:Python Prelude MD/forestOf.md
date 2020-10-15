```js
// forestOf :: String -> Parser Forest String
const forestOf = indentUnit =>
    // Parser for a list of
    // top-level outlines.
    many(treeAtIndentOf(indentUnit)(0));
```