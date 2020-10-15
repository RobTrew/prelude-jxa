```js
// treeAtIndentOf :: String Int ->
// Parser (Tree String)
const treeAtIndentOf = indentUnit =>
    // Parser for an outline block at a
    // given level of indentation, in terms
    // of a given indent unit.
    // An indented line and all lines
    // further indented beneath it.
    n => bindP(
        lineAtIndentOf(indentUnit)(n)
    )(txt => fmapP(Node(txt))(
        many(treeAtIndentOf(indentUnit)(1 + n))
    ));
```