```js
// traverseP :: (a -> b) -> 
// [Parser a] -> Parser [b]
const traverseP = f =>
    // A parser for a list of b values,
    // derived by traversing an a -> b function 
    // over list of parsers for a values.
    ps => sequenceP(
        ps.map(fmapP(f))
    );
```