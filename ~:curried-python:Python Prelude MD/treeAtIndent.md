```js
// treeAtIndent :: Int -> Parser (Tree String)
const treeAtIndent = n =>
    // Parser for an outline block at a
    // given level of indentation.
    // An indented line and all lines
    // further indented beneath it.
    bindP(
        lineAtIndent(n)
    )(txt => fmapP(Node(txt))(
        many(treeAtIndent(1 + n))
    ));
```